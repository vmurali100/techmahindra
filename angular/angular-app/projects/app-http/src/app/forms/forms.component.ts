import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-forms",
  templateUrl: "./forms.component.html",
  styleUrls: ["./forms.component.css"]
})
export class FormsComponent implements OnInit {
  usersDetails: Object;
  userObj = {
    fullName: "",
    email: "",
    passWord: "",
    id: ""
  };
  constructor(private _http: HttpClient) {}

  ngOnInit() {
    this.getlatestUsers();
  }
  addUser(userForm) {
    this._http.post("http://localhost:3000/users", userForm.value).subscribe(
      res => {
        console.log("user Added");
        this.getlatestUsers();
      },
      error => {
        console.log("Some Error Happend");
      }
    );
    console.log(userForm.value);
  }

  getlatestUsers() {
    this._http.get("http://localhost:3000/users").subscribe(
      res => {
        this.usersDetails = res;
        console.log(this.usersDetails);
      },
      () => {
        console.log("Some Error Happend");
      }
    );
  }

  deleteUser(user) {
    this._http
      .delete("http://localhost:3000/users/" + user.id)
      .subscribe(() => {
        this.getlatestUsers();
      });
  }

  editUser(user) {
    console.log(user);
    this.userObj = Object.assign({}, user);
  }

  updateUser(userForm) {
    this._http
      .put("http://localhost:3000/users/" + this.userObj.id, userForm.value)
      .subscribe(() => {
        this.getlatestUsers();
      });
  }
}
