var yesBtn = document.getElementById("yes");
var noBtn = document.getElementById("no");

var flag = true;

updateButtonStyles();
// 클릭 이벤트 추가
yesBtn.addEventListener("click", function () {
  flag = true;
  updateButtonStyles();
});

noBtn.addEventListener("click", function () {
  flag = false;
  updateButtonStyles();
});

// 버튼 스타일 업데이트 함수
function updateButtonStyles() {
  if (flag) {
    yesBtn.style.backgroundColor = "white";
    yesBtn.style.color = "black";
    noBtn.style.backgroundColor = "black";
    noBtn.style.color = "white";
  } else {
    yesBtn.style.backgroundColor = "black";
    yesBtn.style.color = "white";
    noBtn.style.backgroundColor = "white";
    noBtn.style.color = "black";
  }
}
