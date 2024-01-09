function handleBackClick() {
  window.history.back();
}

var bigTitleElement = document.getElementById("bigTitle");
if (bigTitleElement) {
  bigTitleElement.addEventListener("click", handleBackClick);
}

var backWhiteElement = document.getElementById("backWhite");
if (backWhiteElement) {
  backWhiteElement.addEventListener("click", handleBackClick);
}

var backElement = document.getElementById("back");
if (backElement) {
  backElement.addEventListener("click", handleBackClick);
}
