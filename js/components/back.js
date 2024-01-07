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
