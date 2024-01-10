import axios from "axios";
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

var restAreaId = localStorage.getItem("restPlaceId");
console.log("restAREA:: ", restAreaId);

finishBtn.addEventListener("click", async () => {
  console.log("restArea: ");
  finishJson["food"] = parseFloat(starList[0].value) + 0.0;
  finishJson["amenities"] = parseFloat(starList[1].value) + 0.0;
  finishJson["restRoom"] = parseFloat(starList[2].value) + 0.0;
  finishJson["vibe"] = parseFloat(starList[3].value) + 0.0;
  finishJson["restAreaId"] = parseInt(restAreaId);
  console.log(finishJson);
  var c = 0;
  if (starList[0].value === "0") c++;
  if (starList[1].value === "0") c++;
  if (starList[2].value === "0") c++;
  if (starList[3].value === "0") c++;
  if (c >= 3) {
    Toast("2개 이상 점수를 입력해주세요.");
  } else {
    const response = await axios
      .post(
        `http://15.164.44.233:8080/rest-area/${restAreaId}/review`,
        JSON.stringify({
          food: starList[0].value / 2,
          amenities: starList[1].value / 2,
          restRoom: starList[2].value / 2,
          vibe: starList[3].value / 2,
        }),
        { headers: { "Content-Type": "application/json" } }
      )
      .then((data) => {
        console.log("succcceesss");
        console.log(data);

        //localStorage.setItem("myData", JSON.stringify(finishJson));
        window.location.href = "/reviewComplete";
      })
      .catch((error) => {
        console.log(error);
      });
  }
});

var restAreaId = localStorage.getItem("restPlaceId");
var RestPlaceInfoBanner = document.getElementById("RestPlaceInfoBanner");
async function getRestPlace() {
  const response = await axios
    .get(`http://15.164.44.233:8080/rest-areas/${restAreaId}/details`, {})
    .then((data) => {
      let info = data.data.result;
      console.log(data.data.result);
      RestPlaceInfoBanner.innerHTML = `
        <img id="smallImage" src="${info.imageUrl}"></img>
            <div id="rightSide">
              <div id="titleFont" style="margin-bottom: 0px; font-size: 14px">
                ${info.name}
              </div>
              <div id="graySemiMargin">${info.roadName}</div>
        </div>
      `;
    });
  return response;
}

getRestPlace();

notFinishBtn.addEventListener("click", async () => {
  finishJson["음식이 다양해요"] = starList[0].value / 2;
  finishJson["시설이 편리해요"] = starList[1].value / 2;
  finishJson["화장실이 깨끗해요"] = starList[2].value / 2;
  finishJson["분위기가 특별해요"] = starList[3].value / 2;

  var c = 0;
  if (starList[0].value === "0") c++;
  if (starList[1].value === "0") c++;
  if (starList[2].value === "0") c++;
  if (starList[3].value === "0") c++;
  if (c >= 3) {
    Toast("2개 이상 점수를 입력해주세요.");
  } else {
    localStorage.setItem(
      "myData",
      JSON.stringify({
        food: starList[0].value / 2,
        amenities: starList[1].value / 2,
        restRoom: starList[2].value / 2,
        vibe: starList[3].value / 2,
      })
    );
    window.location.href = "/restAreaReview2";
  }
});

/*
const response = await axios
    .get(`http://15.164.44.233:8080/rest-areas/${choicePlaceId}/details`, {})
    .then((data) => {

    });

*/
