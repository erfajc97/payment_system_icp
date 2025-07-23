/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PAYMENT_SYSTEM_BACKEND_CANISTER_ID: string;
  readonly VITE_DFX_NETWORK: string;
  readonly VITE_HOST: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
