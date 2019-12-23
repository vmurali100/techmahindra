import { Component, OnInit } from "@angular/core";
import { CommonService } from "../common.service";

@Component({
  selector: "app-comp-b",
  templateUrl: "./comp-b.component.html",
  styleUrls: ["./comp-b.component.css"]
})
export class CompBComponent implements OnInit {
  message: any = "";
  user: any = {};
  userDetails: any = [];
  constructor(private commonService: CommonService) {}

  ngOnInit() {
    this.commonService.sendAndReceiveMsg.subscribe(data => {
      console.log(data);
      this.message = data;
    });

    this.commonService.sendAndReceiveObj.subscribe(obj => {
      this.user = obj;
    });

    this.commonService.sendAndReceiveArray.subscribe(array => {
      this.userDetails = array;
    });
  }
}
