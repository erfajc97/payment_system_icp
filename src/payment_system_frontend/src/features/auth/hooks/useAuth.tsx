import React, { useState, useEffect, createContext, useContext } from "react";
import { authService } from "../services/auth.service";
import { internetIdentityService } from "../../../services/internet-identity.service";
import {
  CreateUserRequest,
  UpdateUserRequest,
  AuthState,
  AuthContextType,
} from "../types/auth.types";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, setState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true,
    error: null,
  });

  const login = async () => {
    try {
      setState((prev) => ({ ...prev, isLoading: true, error: null }));

      // Initialize Internet Identity service
      await internetIdentityService.initialize();

      // Perform login with Internet Identity
      const authState = await internetIdentityService.login();

      if (authState.isAuthenticated && authState.principal) {
        // Try to get existing user
        const user = await authService.getUserByPrincipal(authState.principal);

        if (user) {
          setState({
            user,
            isAuthenticated: true,
            isLoading: false,
            error: null,
          });
        } else {
          // If user doesn't exist, register them
          const newUser = await authService.registerUser({
            principal: authState.principal,
            email: undefined,
            walletAddress: undefined,
          });

          setState({
            user: newUser,
            isAuthenticated: true,
            isLoading: false,
            error: null,
          });
        }
      }
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error instanceof Error ? error.message : "Login failed",
      }));
    }
  };

  const logout = async () => {
    try {
      await internetIdentityService.logout();
      setState({
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: null,
      });
    } catch (error) {
      console.error("Logout error:", error);
      // Even if logout fails, clear local state
      setState({
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: null,
      });
    }
  };

  const register = async (request: CreateUserRequest) => {
    try {
      setState((prev) => ({ ...prev, isLoading: true, error: null }));

      const user = await authService.registerUser(request);

      setState({
        user,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      });
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error instanceof Error ? error.message : "Registration failed",
      }));
    }
  };

  const updateUser = async (userId: string, request: UpdateUserRequest) => {
    try {
      setState((prev) => ({ ...prev, isLoading: true, error: null }));

      const updatedUser = await authService.updateUser(userId, request);

      setState((prev) => ({
        ...prev,
        user: updatedUser,
        isLoading: false,
        error: null,
      }));
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error instanceof Error ? error.message : "Update failed",
      }));
    }
  };

  // Check authentication state on load
  useEffect(() => {
    const checkAuthState = async () => {
      try {
        await internetIdentityService.initialize();
        const authState = await internetIdentityService.checkAuthState();

        if (authState.isAuthenticated && authState.principal) {
          // Try to get existing user
          const user = await authService.getUserByPrincipal(
            authState.principal
          );

          if (user) {
            setState({
              user,
              isAuthenticated: true,
              isLoading: false,
              error: null,
            });
          } else {
            // User authenticated but not in our system
            setState({
              user: null,
              isAuthenticated: false,
              isLoading: false,
              error: null,
            });
          }
        } else {
          setState((prev) => ({ ...prev, isLoading: false }));
        }
      } catch (error) {
        console.error("Error checking auth state:", error);
        setState((prev) => ({ ...prev, isLoading: false }));
      }
    };

    checkAuthState();
  }, []);

  const value: AuthContextType = {
    ...state,
    login,
    logout,
    register,
    updateUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
