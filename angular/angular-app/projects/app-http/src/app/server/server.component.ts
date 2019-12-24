import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html",
  styleUrls: ["./server.component.css"]
})
export class ServerComponent implements OnInit {
  users: any = [];
  constructor(private _http: HttpClient) {}

  ngOnInit() {
    this._http.get("http://localhost:3000/users").subscribe(res => {
      console.log(res);
      this.users = res;
    });
  }
}
