import { Component, OnInit } from "@angular/core";
import { CommonService } from "../common.service";

@Component({
  selector: "app-sample",
  templateUrl: "./sample.component.html",
  styleUrls: ["./sample.component.css"]
})
export class SampleComponent implements OnInit {
  message;
  user;
  userDetals;
  constructor(private commonService: CommonService) {}

  ngOnInit() {
    // console.log(this.commonService.getMessage());
    // console.log(this.commonService.getUser());
    // console.log(this.commonService.getUsersDetails());

    this.message = this.commonService.getMessage();
    this.user = this.commonService.getUser();
    this.userDetals = this.commonService.getUsersDetails();
  }
}
