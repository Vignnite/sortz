// var val;
// function getx(x) {
//   this.x = val;
// }
// function move() {
//   let m = document.getElementsByClassName("log").value;
//   m = val;
// }
function validate() {
  var x = document.getElementById("un").value;
  var y = document.getElementById("pass1").value;
  var g = false;
  if (x === " " || y === " ") {
    alert("Login Credential are mandatory!!!");
  }
  if (x == "Hello" && y == "world") {
    // alert("Login Successful Welcome " + x);

    // var url = "https://www.google.com/";
    // g_navgation.open(url, "_blank");
    window.location.href = "index.html";
    // document.location.assign(url);
  } else {
    alert("Invalid Username or password");
  }
  g = true;
}
// if (g === true) {
//   window.location.href =
//   let p = document.getElementsByClassName("log").value;
//   console.log(p);
// }
function textfoc(j) {
  m = document.getElementById("un");
  m.style["width"] = "80%";
}
function textblur(k) {
  m = document.getElementById("un");
  m.style["width"] = "70%";
}
function mmove(l) {
  l.style.color = "blue";
  l.style.textShadow = "2px 2px 10px 7px rgb(255, 216, 216)";
}
function mmout(o) {
  o.style.color = "orange";
  o.style.textShadow = "rgb(10, 40, 142)";
}
