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

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface AuthContextType extends AuthState {
  login: () => Promise<void>;
  logout: () => Promise<void>;
  register: (request: CreateUserRequest) => Promise<void>;
  updateUser: (userId: string, request: UpdateUserRequest) => Promise<void>;
}
