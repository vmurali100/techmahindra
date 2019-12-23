import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CommonService {
  sendAndReceiveMsg = new Subject();
  sendAndReceiveObj = new Subject();
  sendAndReceiveArray = new Subject();

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

  exchangeMsg(info) {
    this.sendAndReceiveMsg.next(info);
  }
  exchangeObj(obj) {
    this.sendAndReceiveObj.next(obj);
  }

  exchangeArray(array) {
    this.sendAndReceiveArray.next(array);
  }
}
