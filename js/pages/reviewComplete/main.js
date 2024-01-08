function goUrl(url) {
  window.location.href = url;
}

document.getElementById("lineBtn").addEventListener("click", () => {
  goUrl("/");
});
document.getElementById("fillBtn").addEventListener("click", () => {
  goUrl("/");
});
