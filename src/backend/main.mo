import Map "mo:core/Map";
import Text "mo:core/Text";
import Iter "mo:core/Iter";
import Nat "mo:core/Nat";

actor {
  type Response = {
    weddingAnswer : Text;
    bobaAnswer : Text;
    timestamp : Int;
  };

  var nextId = 0;
  let responses = Map.empty<Nat, Response>();

  public shared ({ caller }) func recordResponse(weddingAnswer : Text, bobaAnswer : Text) : async Nat {
    let timestamp : Int = 0; // Placeholder for timestamp
    let response : Response = {
      weddingAnswer;
      bobaAnswer;
      timestamp;
    };

    responses.add(nextId, response);
    nextId += 1;
    nextId - 1;
  };

  public shared ({ caller }) func isAdmin(password : Text) : async Bool {
    password == "2026edit";
  };

  public shared ({ caller }) func getResponse(id : Nat, adminPassword : Text) : async ?Response {
    if (adminPassword != "2026edit") { return null };
    responses.get(id);
  };

  public shared ({ caller }) func getAllResponses(adminPassword : Text) : async ?[Response] {
    if (adminPassword != "2026edit") { return null };
    let valuesIter = responses.values();
    let array = valuesIter.toArray();
    ?array;
  };
};
