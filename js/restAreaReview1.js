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

(async () => {
  const finishBtn = document.querySelector("#fillBtn");
  const notFinishBtn = document.querySelector("#lineBtn");

  const starList = document.getElementsByTagName("input");

  var finishJson = {};

  var restAreaId = localStorage.getItem("restPlaceId");
  console.log("restAREA:: ", restAreaId);

  finishBtn.addEventListener("click", async () => {
    console.log("restArea: ");
    /*
  finishJson["food"] = parseFloat(starList[0].value) +.0;
  finishJson["amenities"] = parseFloat(starList[1].value) + .0;
  finishJson["restRoom"] = parseFloat(starList[2].value) +.0;
  finishJson["vibe"] = parseFloat(starList[3].value) +.0;
  finishJson["restAreaId"] = parseInt(restAreaId);
  */

    const finishJson = {
      food: parseFloat(starList[0].value) + 0.0,
      amenities: parseFloat(starList[1].value) + 0.0,
      restRoom: parseFloat(starList[2].value) + 0.0,
      vibe: parseFloat(starList[3].value) + 0.0,
      restAreaId: parseInt(restAreaId),
    };

    const params = new URLSearchParams();
    params.append("food", finishJson.food);
    params.append("amenities", finishJson.amenities);
    params.append("restRoom", finishJson.restRoom);
    params.append("vibe", finishJson.vibe);
    params.append("restAreaId", finishJson.restAreaId);

    var c = 0;
    if (starList[0].value === "0") c++;
    if (starList[1].value === "0") c++;
    if (starList[2].value === "0") c++;
    if (starList[3].value === "0") c++;
    if (c >= 3) {
      Toast("2개 이상 점수를 입력해주세요.");
    } else {
      const json = JSON.stringify(finishJson);

      const response = await axios
        .post(
          `http://15.164.44.233:8080/rest-area/${restAreaId}/review`,
          params
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

  notFinishBtn.addEventListener("click", async () => {
    //finishJson["음식이 다양해요"] = starList[0].value / 2;
    //finishJson["시설이 편리해요"] = starList[1].value / 2;
    //finishJson["화장실이 깨끗해요"] = starList[2].value / 2;
    //finishJson["분위기가 특별해요"] = starList[3].value / 2;

    var c = 0;
    if (starList[0].value === "0") c++;
    if (starList[1].value === "0") c++;
    if (starList[2].value === "0") c++;
    if (starList[3].value === "0") c++;
    if (c >= 3) {
      Toast("2개 이상 점수를 입력해주세요.");
    } else {
      console.log(starList[0]);
      const finishJson = {
        food: parseFloat(starList[0].value) + 0.0,
        amenities: parseFloat(starList[1].value) + 0.0,
        restRoom: parseFloat(starList[2].value) + 0.0,
        vibe: parseFloat(starList[3].value) + 0.0,
        restAreaId: parseInt(restAreaId),
      };

      const params = new URLSearchParams();
      params.append("food", finishJson.food / 2);
      params.append("amenities", finishJson.amenities / 2);
      params.append("restRoom", finishJson.restRoom / 2);
      params.append("vibe", finishJson.vibe / 2);
      params.append("restAreaId", finishJson.restAreaId / 2);

      const response = await axios
        .get(
          `http://15.164.44.233:8080/rest-area/${restAreaId}/restaurants/names`
        )
        .then((data) => {
          console.log("successsss2");
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });

      localStorage.setItem("myData", JSON.stringify(finishJson));
      window.location.href = "/restAreaReview2";
    }
  });
})();
