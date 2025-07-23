import { HttpAgent } from "@dfinity/agent";
import { AuthClient } from "@dfinity/auth-client";

export interface AuthState {
  isAuthenticated: boolean;
  principal?: string;
  identity?: any;
}

class InternetIdentityService {
  private authClient: AuthClient | null = null;
  private agent: HttpAgent | null = null;

  async initialize(): Promise<void> {
    try {
      this.authClient = await AuthClient.create();
      console.log("AuthClient initialized");
    } catch (error) {
      console.error("Error initializing AuthClient:", error);
      throw error;
    }
  }

  async login(): Promise<AuthState> {
    if (!this.authClient) {
      throw new Error("AuthClient not initialized");
    }

    return new Promise((resolve, reject) => {
      this.authClient!.login({
        identityProvider: "https://identity.ic0.app",
        onSuccess: async () => {
          try {
            const identity = this.authClient!.getIdentity();
            const principal = identity.getPrincipal().toString();

            // Initialize agent with the authenticated identity
            this.agent = new HttpAgent({ identity });

            const authState: AuthState = {
              isAuthenticated: true,
              principal,
              identity,
            };

            // Store auth state in localStorage
            localStorage.setItem("authState", JSON.stringify(authState));

            resolve(authState);
          } catch (error) {
            console.error("Error after successful login:", error);
            reject(error);
          }
        },
        onError: (error: any) => {
          console.error("Login error:", error);
          reject(error);
        },
      });
    });
  }

  async logout(): Promise<void> {
    if (this.authClient) {
      await this.authClient.logout();
    }

    // Clear stored auth state
    localStorage.removeItem("authState");

    // Reset service state
    this.agent = null;
  }

  async checkAuthState(): Promise<AuthState> {
    if (!this.authClient) {
      await this.initialize();
    }

    const isAuthenticated = await this.authClient!.isAuthenticated();

    if (isAuthenticated) {
      const identity = this.authClient!.getIdentity();
      const principal = identity.getPrincipal().toString();

      return {
        isAuthenticated: true,
        principal,
        identity,
      };
    }

    return {
      isAuthenticated: false,
    };
  }

  getAgent(): HttpAgent | null {
    return this.agent;
  }

  async getPrincipal(): Promise<string | null> {
    if (this.authClient) {
      const isAuthenticated = await this.authClient.isAuthenticated();
      if (isAuthenticated) {
        return this.authClient.getIdentity().getPrincipal().toString();
      }
    }
    return null;
  }
}

// Export singleton instance
export const internetIdentityService = new InternetIdentityService();
