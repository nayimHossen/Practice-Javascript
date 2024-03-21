// document.getElementById("btn-more").addEventListener("click", function () {
//   console.log("clicked");
// });

// document.getElementById("text-filed").addEventListener("focus", function () {
//   console.log("clicked");
// });

document.getElementById("text-filed").addEventListener("keyup", function (e) {
  console.log(e.target.value);
});
