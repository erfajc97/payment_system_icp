import User "features/auth/domain/entities/User";
import AuthUseCase "features/auth/domain/usecases/AuthUseCase";
import AuthController "features/auth/presentation/controllers/AuthController";
import UserRepositoryImpl "features/auth/infrastructure/repositories/UserRepositoryImpl";
import Result "mo:base/Result";
import Text "mo:base/Text";

actor {
  // Inicialización de la arquitectura
  private let userRepository = UserRepositoryImpl.UserRepositoryImpl();
  private let authUseCase = AuthUseCase.AuthUseCaseImpl(userRepository);
  private let authController = AuthController.AuthControllerImpl(authUseCase);

  // Métodos públicos para autenticación
  public shared({caller = _}) func registerUser(request : User.CreateUserRequest) : async Result.Result<User.User, Text> {
    await authController.registerUser(request);
  };

  public shared({caller = _}) func getUserByPrincipal(principal : User.Principal) : async Result.Result<?User.User, Text> {
    await authController.getUserByPrincipal(principal);
  };

  public shared({caller = _}) func updateUser(userId : User.UserId, request : User.UpdateUserRequest) : async Result.Result<User.User, Text> {
    await authController.updateUser(userId, request);
  };

  public shared({caller = _}) func deactivateUser(userId : User.UserId) : async Result.Result<User.User, Text> {
    await authController.deactivateUser(userId);
  };

  // Método de prueba para verificar que todo funciona
  public query func greet(name : Text) : async Text {
    return "Hello, " # name # "!";
  };

  // Métodos para persistencia
  system func preupgrade() {
    userRepository.preupgrade();
  };

  system func postupgrade() {
    userRepository.postupgrade();
  };
};
