import React, { useState, useEffect, createContext, useContext } from "react";
import { authService } from "../services/auth.service";
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

  const login = async (principal: string) => {
    try {
      setState((prev) => ({ ...prev, isLoading: true, error: null }));

      const user = await authService.getUserByPrincipal(principal);

      if (user) {
        setState({
          user,
          isAuthenticated: true,
          isLoading: false,
          error: null,
        });
      } else {
        // Si el usuario no existe, lo registramos
        const newUser = await authService.registerUser({
          principal,
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
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error instanceof Error ? error.message : "Login failed",
      }));
    }
  };

  const logout = () => {
    setState({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,
    });
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

  // Verificar autenticación al cargar
  useEffect(() => {
    // Aquí podrías verificar si hay una sesión guardada
    // Por ahora, simplemente marcamos como no autenticado
    setState((prev) => ({ ...prev, isLoading: false }));
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
