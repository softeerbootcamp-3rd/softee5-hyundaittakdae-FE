function goUrl(url) {
  window.location.href = url;
}

document.getElementById("lineBtn").addEventListener("click", () => {
  goUrl("/mainHome");
});
document.getElementById("fillBtn").addEventListener("click", () => {
  goUrl("/mainHome");
});
