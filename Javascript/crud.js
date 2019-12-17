function getUser() {
  var user = {
    fullName: "",
    email: "",
    password: ""
  };
  for (a in user) {
    user[a] = document.getElementById(a).value;
  }
  postDataToServer(user);
}

function postDataToServer(user) {
  var postData = new XMLHttpRequest();
  postData.onreadystatechange = function() {
    if (postData.readyState == 4 && postData.status == 201) {
      console.log("Success");
    }
  };
  postData.open("POST", "http://localhost:3000/users");
  postData.setRequestHeader("Content-type", "application/json");
  postData.send(JSON.stringify(user));
}
var data;
function getLatestFromServer() {
  var postData = new XMLHttpRequest();
  postData.onreadystatechange = function() {
    if (postData.readyState == 4 && postData.status == 200) {
      data = JSON.parse(postData.response);
      displayData(data);
    }
  };
  postData.open("GET", "http://localhost:3000/users");
  postData.send();
}

getLatestFromServer();

function displayData(data) {
  console.log(data);
  for (i = 0; i < data.length; i++) {
    var myTr = document.createElement("tr");
    for (a in data[i]) {
      var myTd = document.createElement("td");
      myTd.innerHTML = data[i][a];
      myTr.appendChild(myTd);
    }
    var editTd = document.createElement("td");
    var editBtn = document.createElement("button");
    editBtn.setAttribute("onclick", "editUser(" + i + ")");
    editBtn.setAttribute("class", "btn btn-warning");
    editBtn.innerHTML = "Edit";
    editTd.appendChild(editBtn);
    myTr.appendChild(editTd);

    var deleteTd = document.createElement("td");
    var deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("onclick", "deleteUser(" + i + ")");
    deleteBtn.setAttribute("class", "btn btn-primary");
    deleteBtn.innerHTML = "Delete";
    deleteTd.appendChild(deleteBtn);
    myTr.appendChild(deleteTd);

    document.getElementById("myTable").appendChild(myTr);
  }
}

function deleteUser(i) {
  var getInfo = new XMLHttpRequest();
  getInfo.onreadystatechange = function() {
    if (getInfo.readyState == 4 && getInfo.status == 200) {
      data = JSON.parse(getInfo.response);
      displayData(data);
    }
  };
  getInfo.open("DELETE", "http://localhost:3000/users/" + data[i].id);

  getInfo.send();
}

function editUser(i) {
  console.log(data[i]);
  for (a in data[i]) {
    document.getElementById(a).value = data[i][a];
  }
}

function updateUser() {
  var user = {
    fullName: "",
    email: "",
    password: "",
    id: ""
  };
  for (a in user) {
    user[a] = document.getElementById(a).value;
  }
  console.log(user);

  var getInfo = new XMLHttpRequest();
  getInfo.onreadystatechange = function() {
    if (getInfo.readyState == 4 && getInfo.status == 200) {
      data = JSON.parse(getInfo.response);
      displayData(data);
    }
  };
  getInfo.open("PUT", "http://localhost:3000/users/" + user.id);
  getInfo.setRequestHeader("Content-type", "application/json");
  getInfo.send(JSON.stringify(user));
}
