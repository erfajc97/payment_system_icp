module {
  public type UserId = Text;
  public type Principal = Text;
  public type Email = Text;
  public type WalletAddress = Text;

  public type User = {
    id : UserId;
    principal : Principal;
    email : ?Email;
    walletAddress : ?WalletAddress;
    createdAt : Int;
    updatedAt : Int;
    isActive : Bool;
  };

  public type CreateUserRequest = {
    principal : Principal;
    email : ?Email;
    walletAddress : ?WalletAddress;
  };

  public type UpdateUserRequest = {
    email : ?Email;
    walletAddress : ?WalletAddress;
    isActive : ?Bool;
  };
}; 