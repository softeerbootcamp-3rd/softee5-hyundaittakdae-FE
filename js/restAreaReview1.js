//import Toast from "/js/toast.js";
// 새로운 script 요소를 생성합니다.
const scriptElement = document.createElement("script");
// src 속성을 설정합니다.
scriptElement.src = "https://cdn.jsdelivr.net/npm/toastify-js";

// script 요소를 head에 추가하여 스크립트를 로드합니다.
document.head.appendChild(scriptElement);

const Toast = (message) => {
  Toastify({
    text: `${message}`,
    duration: 2500,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: false,
    gravity: "bottom", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {},
    backgroundColor: "rgba(82, 180, 204, 1)",
    onClick: function () {}, // Callback after click
  }).showToast();
};

const finishBtn = document.querySelector("#fillBtn");
const notFinishBtn = document.querySelector("#lineBtn");

const starList = document.getElementsByTagName("input");

var finishJson = {};

finishBtn.addEventListener("click", () => {
  finishJson["음식이 다양해요"] = starList[0].value;
  finishJson["시설이 편리해요"] = starList[1].value;
  finishJson["화장실이 깨끗해요"] = starList[2].value;
  finishJson["분위기가 특별해요"] = starList[3].value;
  if (
    starList[0].value === "0" ||
    starList[1].value === "0" ||
    starList[2].value === "0" ||
    starList[3].value === "0"
  ) {
    Toast("모든 항목에 대해 별점을 매겨야 합니다.");
  } else {
    localStorage.setItem("myData", JSON.stringify(finishJson));
    window.location.href = "/reviewComplete";
  }
});

notFinishBtn.addEventListener("click", () => {
  finishJson["음식이 다양해요"] = starList[0].value;
  finishJson["시설이 편리해요"] = starList[1].value;
  finishJson["화장실이 깨끗해요"] = starList[2].value;
  finishJson["분위기가 특별해요"] = starList[3].value;

  if (
    starList[0].value === "0" ||
    starList[1].value === "0" ||
    starList[2].value === "0" ||
    starList[3].value === "0"
  ) {
    Toast("모든 항목에 대해 별점을 매겨야 합니다.");
  } else {
    localStorage.setItem("myData", JSON.stringify(finishJson));
    window.location.href = "/restAreaReview2";
  }
});
