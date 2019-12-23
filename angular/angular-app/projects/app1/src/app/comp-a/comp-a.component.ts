import { Component, OnInit } from "@angular/core";
import { CommonService } from "../common.service";

@Component({
  selector: "app-comp-a",
  templateUrl: "./comp-a.component.html",
  styleUrls: ["./comp-a.component.css"]
})
export class CompAComponent implements OnInit {
  message;
  user;
  userDetails;
  constructor(private commonService: CommonService) {}

  ngOnInit() {
    this.message = this.commonService.getMessage();
    this.user = this.commonService.getUser();
    this.userDetails = this.commonService.getUsersDetails();
  }

  sendMessage() {
    this.commonService.exchangeMsg(this.message);
  }
  sendObject() {
    this.commonService.exchangeObj(this.user);
  }
  sendArray() {
    this.commonService.exchangeArray(this.userDetails);
  }
}
