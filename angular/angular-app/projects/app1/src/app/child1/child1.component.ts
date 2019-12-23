import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { CommonService } from "../common.service";

@Component({
  selector: "app-child1",
  templateUrl: "./child1.component.html",
  styleUrls: ["./child1.component.css"]
})
export class Child1Component implements OnInit {
  @Output() toSendMesg = new EventEmitter();
  @Output() toSendOb = new EventEmitter();
  @Output() toSendArray = new EventEmitter();

  message;
  user;
  userDetails;
  constructor(private commonService: CommonService) {}

  ngOnInit() {
    this.message = this.commonService.getMessage();
    this.user = this.commonService.getUser();
    this.userDetails = this.commonService.getUsersDetails();
  }

  sendMessageToParent() {
    this.toSendMesg.next(this.message);
  }

  sendObjectToParent() {
    this.toSendOb.next(this.user);
  }

  sendArrayToParent() {
    this.toSendArray.next(this.userDetails);
  }
}
