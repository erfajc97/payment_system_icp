// Importar declaraciones si están disponibles, sino usar placeholder
let payment_system_backend: any;

try {
  // Intentar importar las declaraciones reales
  const declarations = require("declarations/payment_system_backend");
  payment_system_backend = declarations.payment_system_backend;
} catch (error) {
  console.log("Running in development mode - using placeholder backend");
  // Placeholder para modo desarrollo
  payment_system_backend = {
    registerUser: async (request: any) => ({
      ok: {
        id: "dev-user-1",
        principal: request.principal,
        email: request.email,
        walletAddress: request.walletAddress,
        createdAt: Date.now(),
        updatedAt: Date.now(),
        isActive: true,
      },
    }),
    getUserByPrincipal: async (principal: string) => ({
      ok: {
        id: "dev-user-1",
        principal: principal,
        email: null,
        walletAddress: null,
        createdAt: Date.now(),
        updatedAt: Date.now(),
        isActive: true,
      },
    }),
    updateUser: async (userId: string, request: any) => ({
      ok: {
        id: userId,
        principal: "dev-principal",
        email: request.email,
        walletAddress: request.walletAddress,
        createdAt: Date.now(),
        updatedAt: Date.now(),
        isActive: request.isActive ?? true,
      },
    }),
    deactivateUser: async (userId: string) => ({
      ok: {
        id: userId,
        principal: "dev-principal",
        email: null,
        walletAddress: null,
        createdAt: Date.now(),
        updatedAt: Date.now(),
        isActive: false,
      },
    }),
    greet: async (name: string) =>
      `Hello, ${name}! Welcome to Payment System ICP (Development Mode)`,
  };
}

import {
  User,
  CreateUserRequest,
  UpdateUserRequest,
} from "../types/auth.types";

export class AuthService {
  private authCanister: any;

  constructor() {
    // Inicializar el canister con las declaraciones reales o placeholder
    this.authCanister = payment_system_backend;
  }

  async registerUser(request: CreateUserRequest): Promise<User> {
    try {
      const result = await this.authCanister.registerUser(request);

      if ("ok" in result) {
        return result.ok;
      } else {
        throw new Error(result.err);
      }
    } catch (error) {
      console.error("Error registering user:", error);
      throw new Error(`Error registering user: ${error}`);
    }
  }

  async getUserByPrincipal(principal: string): Promise<User | null> {
    try {
      const result = await this.authCanister.getUserByPrincipal(principal);

      if ("ok" in result) {
        return result.ok || null;
      } else {
        throw new Error(result.err);
      }
    } catch (error) {
      console.error("Error getting user:", error);
      throw new Error(`Error getting user: ${error}`);
    }
  }

  async updateUser(userId: string, request: UpdateUserRequest): Promise<User> {
    try {
      const result = await this.authCanister.updateUser(userId, request);

      if ("ok" in result) {
        return result.ok;
      } else {
        throw new Error(result.err);
      }
    } catch (error) {
      console.error("Error updating user:", error);
      throw new Error(`Error updating user: ${error}`);
    }
  }

  async deactivateUser(userId: string): Promise<User> {
    try {
      const result = await this.authCanister.deactivateUser(userId);

      if ("ok" in result) {
        return result.ok;
      } else {
        throw new Error(result.err);
      }
    } catch (error) {
      console.error("Error deactivating user:", error);
      throw new Error(`Error deactivating user: ${error}`);
    }
  }

  // Método de prueba para verificar conexión
  async testConnection(): Promise<string> {
    try {
      return await this.authCanister.greet("Test User");
    } catch (error) {
      console.error("Error testing connection:", error);
      throw new Error(`Error testing connection: ${error}`);
    }
  }
}

export const authService = new AuthService();
