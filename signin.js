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
  if (x === "Hello" && y === "world") {
    // alert("Login Successful Welcome " + x);

    // var url = "https://www.google.com/";
    // g_navgation.open(url, "_blank");

    return true;
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
