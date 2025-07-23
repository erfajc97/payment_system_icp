import User "../../domain/entities/User";
import AuthUseCase "../../domain/usecases/AuthUseCase";
import Result "mo:base/Result";
import Text "mo:base/Text";

module {
  public type AuthController = {
    registerUser : (User.CreateUserRequest) -> async Result.Result<User.User, Text>;
    getUserByPrincipal : (User.Principal) -> async Result.Result<?User.User, Text>;
    updateUser : (User.UserId, User.UpdateUserRequest) -> async Result.Result<User.User, Text>;
    deactivateUser : (User.UserId) -> async Result.Result<User.User, Text>;
  };

  public class AuthControllerImpl(authUseCase : AuthUseCase.AuthUseCase) : AuthController {
    public func registerUser(request : User.CreateUserRequest) : async Result.Result<User.User, Text> {
      // Validaciones adicionales de presentación
      if (Text.size(request.principal) == 0) {
        return #err("Principal is required");
      };

      await authUseCase.registerUser(request);
    };

    public func getUserByPrincipal(principal : User.Principal) : async Result.Result<?User.User, Text> {
      if (Text.size(principal) == 0) {
        return #err("Principal is required");
      };

      await authUseCase.getUserByPrincipal(principal);
    };

    public func updateUser(userId : User.UserId, request : User.UpdateUserRequest) : async Result.Result<User.User, Text> {
      if (Text.size(userId) == 0) {
        return #err("User ID is required");
      };

      await authUseCase.updateUser(userId, request);
    };

    public func deactivateUser(userId : User.UserId) : async Result.Result<User.User, Text> {
      if (Text.size(userId) == 0) {
        return #err("User ID is required");
      };

      await authUseCase.deactivateUser(userId);
    };
  };
}; 