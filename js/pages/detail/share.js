document.getElementById("shareBtn").addEventListener("click", function () {
  var specificURL = "http://172.20.14:5500/detail.html";
  copyURLToClipboard(specificURL);
  alert("클립보드에 URL이 복사되었습니다");
});

function copyURLToClipboard(url) {
  var tempInput = document.createElement("input");
  tempInput.value = url;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
}
