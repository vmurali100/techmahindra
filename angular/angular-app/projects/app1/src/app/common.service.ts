import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class CommonService {
  constructor() {}

  getMessage() {
    return "Helo Angular";
  }

  getUser() {
    return {
      fname: "Murali",
      lname: "Krishna"
    };
  }

  getUsersDetails() {
    return ["Ram", "Ravi", "Ramesh", "Krishna"];
  }
}
