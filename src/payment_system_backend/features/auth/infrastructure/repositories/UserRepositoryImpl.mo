import User "../../domain/entities/User";
import UserRepository "../../domain/repositories/UserRepository";
import Result "mo:base/Result";
import HashMap "mo:base/HashMap";
import Text "mo:base/Text";
import Time "mo:base/Time";
import Nat "mo:base/Nat";
import Random "mo:base/Random";
import Iter "mo:base/Iter";

module {
  public class UserRepositoryImpl() : UserRepository.UserRepository {
    private var users : [(User.UserId, User.User)] = [];
    private var userMap = HashMap.HashMap<User.UserId, User.User>(0, Text.equal, Text.hash);
    private var principalToUserId = HashMap.HashMap<User.Principal, User.UserId>(0, Text.equal, Text.hash);
    private var nextUserId : Nat = 1;

    public func create(request : User.CreateUserRequest) : async Result.Result<User.User, Text> {
      let userId = await generateUserId();
      let now = Time.now();
      
      let user : User.User = {
        id = userId;
        principal = request.principal;
        email = request.email;
        walletAddress = request.walletAddress;
        createdAt = now;
        updatedAt = now;
        isActive = true;
      };

      userMap.put(userId, user);
      principalToUserId.put(request.principal, userId);

      #ok(user);
    };

    public func findById(userId : User.UserId) : async Result.Result<?User.User, Text> {
      switch (userMap.get(userId)) {
        case (?user) { #ok(?user) };
        case null { #ok(null) };
      };
    };

    public func findByPrincipal(principal : User.Principal) : async Result.Result<?User.User, Text> {
      switch (principalToUserId.get(principal)) {
        case (?userId) {
          switch (userMap.get(userId)) {
            case (?user) { #ok(?user) };
            case null { #ok(null) };
          };
        };
        case null { #ok(null) };
      };
    };

    public func update(userId : User.UserId, request : User.UpdateUserRequest) : async Result.Result<User.User, Text> {
      switch (userMap.get(userId)) {
        case (?existingUser) {
          let updatedUser : User.User = {
            id = existingUser.id;
            principal = existingUser.principal;
            email = switch (request.email) {
              case (?email) { ?email };
              case null { existingUser.email };
            };
            walletAddress = switch (request.walletAddress) {
              case (?wallet) { ?wallet };
              case null { existingUser.walletAddress };
            };
            createdAt = existingUser.createdAt;
            updatedAt = Time.now();
            isActive = switch (request.isActive) {
              case (?active) { active };
              case null { existingUser.isActive };
            };
          };

          userMap.put(userId, updatedUser);
          #ok(updatedUser);
        };
        case null { #err("User not found") };
      };
    };

    public func delete(userId : User.UserId) : async Result.Result<(), Text> {
      switch (userMap.get(userId)) {
        case (?user) {
          userMap.delete(userId);
          principalToUserId.delete(user.principal);
          #ok(());
        };
        case null { #err("User not found") };
      };
    };

    public func list() : async Result.Result<[User.User], Text> {
      let userList = Iter.toArray(userMap.vals());
      #ok(userList);
    };

    private func generateUserId() : async User.UserId {
      let userId = Nat.toText(nextUserId);
      nextUserId += 1;
      userId;
    };

    // Métodos para persistencia
    public func preupgrade() {
      users := Iter.toArray(userMap.entries());
    };

    public func postupgrade() {
      userMap := HashMap.HashMap<User.UserId, User.User>(users.size(), Text.equal, Text.hash);
      principalToUserId := HashMap.HashMap<User.Principal, User.UserId>(0, Text.equal, Text.hash);
      
      for ((userId, user) in users.vals()) {
        userMap.put(userId, user);
        principalToUserId.put(user.principal, userId);
      };
      
      users := [];
    };
  };
}; 