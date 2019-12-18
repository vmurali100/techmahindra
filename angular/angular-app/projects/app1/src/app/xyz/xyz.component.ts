import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-xyz",
  templateUrl: "./xyz.component.html",
  styleUrls: ["./xyz.component.css"]
})
export class XyzComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  company = "Tech Mahindra";

  person = {
    fname: "Murali ",
    lname: "Krishna"
  };

  users = ["Ramesh", "Ram", "Ravi"];

  sayHello() {
    alert("Hello");
  }
}
