import List "mo:core/List";
import Text "mo:core/Text";
import Time "mo:core/Time";

actor {
  type TiffinPlan = {
    #weekly;
    #monthly;
    #custom;
    #corporate;
  };

  type Enquiry = {
    name : Text;
    phone : Text;
    location : Text;
    plan : TiffinPlan;
    timestamp : Time.Time;
  };

  let enquiries = List.empty<Enquiry>();

  public shared ({ caller }) func submitEnquiry(name : Text, phone : Text, location : Text, plan : TiffinPlan) : async () {
    let newEnquiry : Enquiry = {
      name;
      phone;
      location;
      plan;
      timestamp = Time.now();
    };
    enquiries.add(newEnquiry);
  };

  public query ({ caller }) func getAllEnquiries() : async [Enquiry] {
    enquiries.toArray();
  };
};
