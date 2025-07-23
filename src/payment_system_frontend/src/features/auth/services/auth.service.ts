import { payment_system_backend } from "declarations/payment_system_backend";
import {
  User,
  CreateUserRequest,
  UpdateUserRequest,
} from "../types/auth.types";

export class AuthService {
  private authCanister: payment_system_backend;

  constructor() {
    // Inicializar el canister (esto se configurará cuando tengamos las declaraciones)
    this.authCanister = {} as payment_system_backend; // Placeholder
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
      throw new Error(`Error deactivating user: ${error}`);
    }
  }
}

export const authService = new AuthService();
