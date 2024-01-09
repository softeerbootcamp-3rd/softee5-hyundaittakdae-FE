import axios from "axios";

var unChoiceThemes = document.querySelectorAll("#unChoiceTheme");
var choice = document.getElementById("choiceTheme");
var plusFileUrl = "/assets/img/themeImg/";
var logoUrlArr = {
  "음식이 맛있어요": "/assets/img/themeImg/purplefood.png",
  "시설이 편리해요": "/assets/img/themeImg/purpleplace.png",
  "화장실이 깨끗해요": "/assets/img/themeImg/purplebathroom.png",
  "분위기가 특별해요": "/assets/img/themeImg/purplemood.png",
};

var callThemeRestArea = (theme) => {
  var themeNum;
  if (theme == "가까운 휴게소") themeNum = 0;
  else if (theme == "음식이 맛있어요") themeNum = 1;
  else if (theme == "시설이 편리해요") themeNum = 2;
  else if (theme == "화장실이 깨끗해요") themeNum = 3;
  else themeNum = 4;

  async function getThemeRestAreaList() {
    const response = await axios
      .get(`http://15.164.44.233:8080/rest-areas/${themeNum}`, {})
      .then((data) => {
        console.log(data.data.result);
        var RestAreaArr = data.data.result;
        var restAreaList = document.getElementById("restAreaList");
        restAreaList.innerHTML = "";
        RestAreaArr.forEach((data, idx) => {
          var restAreaBox = document.createElement("div");
          restAreaBox.id = "restAreaBox";
          restAreaBox.innerHTML = `<div id="contentArea">
          <img id="restAreaImg" src="${data.imageUrl}">
            <div id="restAreaDisSection">
              <img
                src="/assets/img/whiteLoaction.png"
                style="width: 12.5px; height: 12.5px; margin-right: 4px"
              />
              <p id="restAreaDisValue">${data.distance}km</p>
            </div>
          </img>
          <div id="contentInfoWrapper">
            <div id="themeWrapper">
              <img
                src="${logoUrlArr[data.themeName]}"
                id="basicImg"
              />
              <p id="themeValue">${data.themeName}</p>
              <div id="mainColorLine"></div>
              <img id="tinyImg" src="/assets/img/mainStar.png" />
              <div id="themeScoreValue">${data.themeRating}</div>
            </div>
            <div id="restAreaName" >
              ${data.restAreaName}
            </div>
            <div id="roadName">${data.roadName}</div>
            <div id="totalScoreWrapper">
              <div id="body2regular">전체</div>
              <div id="tinyGrayLine"></div>
              <img
                src="/assets/img/grayStar.png"
                style="
                  width: 10px;
                  height: 10px;
                  margin-bottom: 2px;
                  margin-right: 4px;
                "
              />
              <div id="totalScoreValue">${data.totalRating}</div>
            </div>
          </div>
        </div>`;

          restAreaBox.addEventListener("click", () => {
            //FIXME : 받아온 ID넣기
            localStorage.setItem("restPlaceId", data.id);
            console.log(data.id);
            window.location.href = "/detail";
          });
          restAreaList.appendChild(restAreaBox);
        });
      });

    return response;
  }
  getThemeRestAreaList();
};

//
callThemeRestArea("가까운 휴게소");

choice.addEventListener("click", function () {
  if (choice.textContent !== "가까운 휴게소") {
    var beforeImgTag = choice.getElementsByTagName("img");
    var newImgUrl = beforeImgTag[0].src;
    var newUrl =
      plusFileUrl +
      "whiteGray" +
      newImgUrl.substring(newImgUrl.lastIndexOf("/") + 1);
    beforeImgTag[0].src = newUrl;
  }
  choice.id = "unChoiceTheme";
  choice = this;
  choice.id = "choiceTheme";
  // 고른거 백엔드 호출
  callThemeRestArea(choice.textContent);

  if (choice.textContent !== "가까운 휴게소") {
    var beforeImgTag = choice.getElementsByTagName("img");
    var newImgUrl = beforeImgTag[0].src;
    var newUrl =
      plusFileUrl + newImgUrl.substring(newImgUrl.lastIndexOf("/") + 10);
    beforeImgTag[0].src = newUrl;
  }
});

unChoiceThemes.forEach((unChoiceTheme) => {
  unChoiceTheme.addEventListener("click", function () {
    if (choice.textContent !== "가까운 휴게소") {
      var beforeImgTag = choice.getElementsByTagName("img");
      var newImgUrl = beforeImgTag[0].src;
      var newUrl =
        plusFileUrl +
        "whiteGray" +
        newImgUrl.substring(newImgUrl.lastIndexOf("/") + 1);
      beforeImgTag[0].src = newUrl;
    }
    choice.id = "unChoiceTheme";
    choice = this;
    choice.id = "choiceTheme";

    // 고른거 백엔드 호출
    callThemeRestArea(choice.textContent);

    if (choice.textContent !== "가까운 휴게소") {
      var beforeImgTag = choice.getElementsByTagName("img");
      var newImgUrl = beforeImgTag[0].src;
      var newUrl =
        plusFileUrl + newImgUrl.substring(newImgUrl.lastIndexOf("/") + 10);
      beforeImgTag[0].src = newUrl;
    }
  });
});
