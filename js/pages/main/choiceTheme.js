var unChoiceThemes = document.querySelectorAll("#unChoiceTheme");
var choice = document.getElementById("choiceTheme");
var plusFileUrl = "/assets/img/themeImg/";
var logoUrlArr = {
  "음식이 맛있어요": "/assets/img/themeImg/purplefood.png",
  "시설이 편리해요": "/assets/img/themeImg/purpleplace.png",
  "화장실이 깨끗해요": "/assets/img/themeImg/purplebathroom.png",
  "분위기가 좋아요": "/assets/img/themeImg/purplemood.png",
};

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

var callThemeRestArea = (theme) => {
  // 백엔드 값 불러오기 = > RestAreaArr
  console.log(theme + "선택!!");

  var RestAreaArr = [
    {
      restAreaId: 1,
      theme: "음식이 맛있어요",
      themeScore: "4.8",
      restAreaName: "의왕청계간이 휴게소(판교방향)",
      restAreaImg: "/assets/img/restPlace.png",
      restAreaDis: "1.4km",
      roadName: "경부 고속도로 상행선",
      totalScore: "3.8",
    },
    {
      restAreaId: 2,
      theme: "시설이 편리해요",
      themeScore: "3.8",
      restAreaName: "부평 휴게소(판교방향)",
      restAreaImg: "/assets/img/restPlace.png",
      restAreaDis: "2.4km",
      roadName: "경부 고속도로 상행선",
      totalScore: "2.8",
    },
  ];

  var restAreaList = document.getElementById("restAreaList");
  restAreaList.innerHTML = "";
  RestAreaArr.forEach((data, idx) => {
    var restAreaBox = document.createElement("div");
    restAreaBox.id = "restAreaBox";
    restAreaBox.innerHTML = `<div id="contentArea">
    <div id="restAreaImg" src="≈">
      <div id="restAreaDisSection">
        <img
          src="/assets/img/whiteLoaction.png"
          style="width: 12.5px; height: 12.5px; margin-right: 4px"
        />
        <p id="restAreaDisValue">${data.restAreaDis}</p>
      </div>
    </div>
    <div id="contentInfoWrapper">
      <div id="themeWrapper">
        <img
          src="${logoUrlArr[data.theme]}"
          id="basicImg"
        />
        <p id="themeValue">${data.theme}</p>
        <div id="mainColorLine"></div>
        <img id="tinyImg" src="/assets/img/mainStar.png" />
        <div id="themeScoreValue">${data.themeScore}</div>
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
        <div id="totalScoreValue">${data.totalScore}</div>
      </div>
    </div>
  </div>`;
    restAreaBox.addEventListener("click", () => {
      //FIXME : 받아온 ID넣기
      localStorage.setItem("restAreaId", 1);
      window.location.href = "/detail.html";
    });
    restAreaList.appendChild(restAreaBox);
  });
};
