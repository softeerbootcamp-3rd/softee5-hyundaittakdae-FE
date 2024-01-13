function goUrl(url) {
  window.location.href = url;
}

document.getElementById("lineBtn").addEventListener("click", () => {
  goUrl("/pages/detail");
});
document.getElementById("fillBtn").addEventListener("click", () => {
  goUrl("/pages/mainHome");
});
