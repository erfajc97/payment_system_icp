// Declaraciones para modo desarrollo
declare module "declarations/*" {
  const declarations: any;
  export default declarations;
}

// Variables de entorno
declare global {
  interface Window {
    __env__: {
      DFX_NETWORK: string;
    };
  }
}
