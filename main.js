const l = document.getElementById("lem");
window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;
  // console.log("Offset : " + offset);
  l.style.backgroundPositionY = offset * -0.175 + "px";
});
