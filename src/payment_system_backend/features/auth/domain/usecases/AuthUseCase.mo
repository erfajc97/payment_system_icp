import User "../entities/User";
import UserRepository "../repositories/UserRepository";
import Result "mo:base/Result";
import Time "mo:base/Time";
import Text "mo:base/Text";

module {
  public type AuthUseCase = {
    registerUser : (User.CreateUserRequest) -> async Result.Result<User.User, Text>;
    getUserByPrincipal : (User.Principal) -> async Result.Result<?User.User, Text>;
    updateUser : (User.UserId, User.UpdateUserRequest) -> async Result.Result<User.User, Text>;
    deactivateUser : (User.UserId) -> async Result.Result<User.User, Text>;
  };

  public class AuthUseCaseImpl(userRepository : UserRepository.UserRepository) : AuthUseCase {
    public func registerUser(request : User.CreateUserRequest) : async Result.Result<User.User, Text> {
      // Validar que el principal no esté vacío
      if (Text.size(request.principal) == 0) {
        return #err("Principal cannot be empty");
      };

      // Verificar si el usuario ya existe
      switch (await userRepository.findByPrincipal(request.principal)) {
        case (#ok(?_existingUser)) {
          return #err("User already exists with this principal");
        };
        case (#ok(null)) {
          // Continuar con el registro
        };
        case (#err(error)) {
          return #err("Error checking existing user: " # error);
        };
      };

      // Crear el usuario
      await userRepository.create(request);
    };

    public func getUserByPrincipal(principal : User.Principal) : async Result.Result<?User.User, Text> {
      if (Text.size(principal) == 0) {
        return #err("Principal cannot be empty");
      };

      await userRepository.findByPrincipal(principal);
    };

    public func updateUser(userId : User.UserId, request : User.UpdateUserRequest) : async Result.Result<User.User, Text> {
      if (Text.size(userId) == 0) {
        return #err("User ID cannot be empty");
      };

      await userRepository.update(userId, request);
    };

    public func deactivateUser(userId : User.UserId) : async Result.Result<User.User, Text> {
      if (Text.size(userId) == 0) {
        return #err("User ID cannot be empty");
      };

      let updateRequest : User.UpdateUserRequest = {
        email = null;
        walletAddress = null;
        isActive = ?false;
      };

      await userRepository.update(userId, updateRequest);
    };
  };
}; 