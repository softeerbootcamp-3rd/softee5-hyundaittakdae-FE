import axios from "axios";

var themeBoxWrapper = document.getElementById("themeBoxWrapper");
var totalScore = document.getElementById("totalScore");
var reviewCountValue = document.getElementById("reviewCountValue");

async function getRestPlaceInfo() {
  var restAreaId = localStorage.getItem("restPlaceId");

  const response = await axios
    .get(`http://15.164.44.233:8080/rest-areas/${restAreaId}/reviews`, {})
    .then((data) => {
      var restPlaceReview = data.data.result;

      var goodImgUrl = "/assets/img/themeImg/mainColor";
      if (restPlaceReview.highestTag.tagName == "음식이 맛있어요")
        goodImgUrl += "Food.png";
      else if (restPlaceReview.highestTag.tagName == "시설이 편리해요")
        goodImgUrl += "Place.png";
      else if (restPlaceReview.highestTag.tagName == "화장실이 깨끗해요")
        goodImgUrl += "Bathroom.png";
      else {
        goodImgUrl += "Mood.png";
      }

      var badImgUrl = "/assets/img/themeImg/gray";
      if (restPlaceReview.lowestTag.tagName == "음식이 맛있어요")
        badImgUrl += "food.png";
      else if (restPlaceReview.lowestTag.tagName == "시설이 편리해요")
        badImgUrl += "place.png";
      else if (restPlaceReview.lowestTag.tagName == "화장실이 깨끗해요")
        badImgUrl += "bathroom.png";
      else {
        badImgUrl += "mood.png";
      }

      themeBoxWrapper.innerHTML = `
      <div id="themeBox">
      <div id="themeEachBox">
        <p id="body1semibold" style="color: var(--500)">이런 점이 좋아요</p>
        <div id="themeGoodBox">
          <div id="goodThemeCircle" style="margin-top: 14px;">
            <img src="${goodImgUrl}" style="width: 23.5px; height: 23.5px;"></img>
          </div>
          <p id="goodValue" style="color: var(--600); font-family: 'Semibold'; font-size: 14px; margin-top: 9px;">${restPlaceReview.highestTag.tagName}</p>
          <div id="themeScoreBox" style="margin-top: 9px;">
            <img src="/assets/img/mainStar.png" style="width: 13.6px; height: 13.6px;margin-right: 4px; margin-bottom: 1px;"/>
            <div id="smallThemeScore" style="margin-bottom: 1px;">${restPlaceReview.highestTag.rating}</div>
          </div>
        </div>
      </div>
      <div id="themeEachBox">
        <p id="body1semibold" style="color: var(--500)">이런 점이 아쉬워요</p>
        <div id="themeBadBox">
          <div id="badThemeCircle" style="margin-top: 14px;">
            <img src="${badImgUrl}" style="width: 23.5px; height: 23.5px;"></img>
          </div>
          
          <p id="goodValue" style="color: var(--600); font-family: 'Semibold'; font-size: 14px; margin-top: 9px;">${restPlaceReview.lowestTag.tagName}</p>
          <div id="themeScoreBox" style="margin-top: 9px;">
            <img src="/assets/img/mainStar.png" style="width: 13.6px; height: 13.6px;margin-right: 4px; margin-bottom: 1px;"/>
            <div id="smallThemeScore" style="margin-bottom: 1px;">${restPlaceReview.lowestTag.rating}</div>
          </div>
        </div>
      </div>
      `;

      totalScore.textContent = restPlaceReview.totalRating;
      reviewCountValue.textContent = "(" + restPlaceReview.reviewNum + ")";
    });

  return response;
}

getRestPlaceInfo();
