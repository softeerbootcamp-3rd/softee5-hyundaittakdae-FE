import axios from "axios";

var RestAreaArr = [
  {
    theme: "음식이 맛있어요",
    themeScore: "4.8",
    restAreaName: "의왕청계간이 휴게소(판교방향)",
    restAreaImg: "/assets/img/restPlace.png",
    restAreaDis: "1.4km",
    roadName: "경부 고속도로 상행선",
    totalScore: "3.8",
  },
  {
    theme: "시설이 편리해요",
    themeScore: "3.8",
    restAreaName: "부평 휴게소(판교방향)",
    restAreaImg: "/assets/img/restPlace.png",
    restAreaDis: "2.4km",
    roadName: "경부 고속도로 상행선",
    totalScore: "2.8",
  },
  {
    theme: "음식이 맛있어요",
    themeScore: "4.8",
    restAreaName: "의왕청계간이 휴게소(판교방향)",
    restAreaImg: "/assets/img/restPlace.png",
    restAreaDis: "1.4km",
    roadName: "경부 고속도로 상행선",
    totalScore: "3.8",
  },
  {
    theme: "분위기가 좋아요",
    themeScore: "4.8",
    restAreaName: "의왕청계간이 휴게소(판교방향)",
    restAreaImg: "/assets/img/restPlace.png",
    restAreaDis: "1.4km",
    roadName: "경부 고속도로 상행선",
    totalScore: "3.8",
  },
  {
    theme: "화장실이 깨끗해요",
    themeScore: "4.8",
    restAreaName: "의왕청계간이 휴게소(판교방향)",
    restAreaImg: "/assets/img/restPlace.png",
    restAreaDis: "1.4km",
    roadName: "경부 고속도로 상행선",
    totalScore: "3.8",
  },
];

var logoUrlArr = {
  "음식이 맛있어요": "/assets/img/themeImg/purplefood.png",
  "시설이 편리해요": "/assets/img/themeImg/purpleplace.png",
  "화장실이 깨끗해요": "/assets/img/themeImg/purplebathroom.png",
  "분위기가 좋아요": "/assets/img/themeImg/purplemood.png",
};

var restAreaList = document.getElementById("restAreaList");
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
    localStorage.setItem("restPlaceId", 1);
    window.location.href = "/detail";
  });
  restAreaList.appendChild(restAreaBox);
});
