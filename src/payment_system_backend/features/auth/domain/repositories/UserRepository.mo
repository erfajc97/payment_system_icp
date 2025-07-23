import User "../entities/User";
import Result "mo:base/Result";

module {
  public type UserRepository = {
    create : (User.CreateUserRequest) -> async Result.Result<User.User, Text>;
    findById : (User.UserId) -> async Result.Result<?User.User, Text>;
    findByPrincipal : (User.Principal) -> async Result.Result<?User.User, Text>;
    update : (User.UserId, User.UpdateUserRequest) -> async Result.Result<User.User, Text>;
    delete : (User.UserId) -> async Result.Result<(), Text>;
    list : () -> async Result.Result<[User.User], Text>;
  };
}; 