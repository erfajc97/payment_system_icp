declare module "ic:canisters/internet_identity" {
  export interface InternetIdentity {
    create_challenge: (
      request: CreateChallengeRequest
    ) => Promise<CreateChallengeResponse>;
    create_delegation: (
      request: CreateDelegationRequest
    ) => Promise<CreateDelegationResponse>;
    get_delegation: (
      request: GetDelegationRequest
    ) => Promise<GetDelegationResponse>;
    prepare_delegation: (
      request: PrepareDelegationRequest
    ) => Promise<PrepareDelegationResponse>;
    register: (request: RegisterRequest) => Promise<RegisterResponse>;
    lookup: (request: LookupRequest) => Promise<LookupResponse>;
  }

  export interface CreateChallengeRequest {
    key: Uint8Array;
    max_number_of_credentials?: bigint;
  }

  export interface CreateChallengeResponse {
    challenge_key: Uint8Array;
    challenge: Uint8Array;
  }

  export interface CreateDelegationRequest {
    session_key: Uint8Array;
    expiration: bigint;
    max_number_of_credentials?: bigint;
  }

  export interface CreateDelegationResponse {
    user_key: Uint8Array;
    timestamp: bigint;
  }

  export interface GetDelegationRequest {
    session_key: Uint8Array;
    expiration: bigint;
    max_number_of_credentials?: bigint;
  }

  export interface GetDelegationResponse {
    delegations: Array<{
      delegation: Uint8Array;
      pubkey: Uint8Array;
    }>;
    user_key: Uint8Array;
    timestamp: bigint;
  }

  export interface PrepareDelegationRequest {
    session_key: Uint8Array;
    max_number_of_credentials?: bigint;
  }

  export interface PrepareDelegationResponse {
    user_key: Uint8Array;
    expiration: bigint;
  }

  export interface RegisterRequest {
    user_number: bigint;
    pubkey: Uint8Array;
    alias: string;
    pubkey_derivation_path: Uint8Array;
  }

  export interface RegisterResponse {
    user_number: bigint;
  }

  export interface LookupRequest {
    user_number: bigint;
  }

  export interface LookupResponse {
    user_number: bigint;
    pubkey: Uint8Array;
    alias: string;
  }
}
