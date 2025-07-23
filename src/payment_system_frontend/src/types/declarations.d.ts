// Tipos para las declaraciones del backend
declare module 'declarations/payment_system_backend' {
  export interface User {
    id: string;
    principal: string;
    email?: string;
    walletAddress?: string;
    createdAt: number;
    updatedAt: number;
    isActive: boolean;
  }

  export interface CreateUserRequest {
    principal: string;
    email?: string;
    walletAddress?: string;
  }

  export interface UpdateUserRequest {
    email?: string;
    walletAddress?: string;
    isActive?: boolean;
  }

  export interface payment_system_backend {
    greet: (name: string) => Promise<string>;
    registerUser: (request: CreateUserRequest) => Promise<{ ok: User } | { err: string }>;
    getUserByPrincipal: (principal: string) => Promise<{ ok: User | null } | { err: string }>;
    updateUser: (userId: string, request: UpdateUserRequest) => Promise<{ ok: User } | { err: string }>;
    deactivateUser: (userId: string) => Promise<{ ok: User } | { err: string }>;
  }
} 