import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-parent1",
  templateUrl: "./parent1.component.html",
  styleUrls: ["./parent1.component.css"]
})
export class Parent1Component implements OnInit {
  messageFromChild = "";
  objFromChild = {};
  arrayFromChild = [];
  constructor() {}

  ngOnInit() {}
  receiveMsg(message) {
    this.messageFromChild = message;
  }
  toReceiveObj(obj) {
    this.objFromChild = obj;
  }

  toReceiveArray(array) {
    this.arrayFromChild = array;
  }
}
