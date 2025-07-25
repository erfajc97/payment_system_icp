// Declaraciones para modo desarrollo
declare module "declarations/payment_system_backend" {
  export const payment_system_backend: {
    registerUser: (request: any) => Promise<any>;
    getUserByPrincipal: (principal: string) => Promise<any>;
    updateUser: (userId: string, request: any) => Promise<any>;
    deactivateUser: (userId: string) => Promise<any>;
    greet: (name: string) => Promise<string>;
  };
}

// Variables de entorno
declare global {
  interface Window {
    __env__: {
      DFX_NETWORK: string;
    };
  }
}
