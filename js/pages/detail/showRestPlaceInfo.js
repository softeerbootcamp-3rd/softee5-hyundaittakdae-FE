import axios from "axios";

// detail 페이지 상단 상세정보 불러오기
var glassBox = document.getElementById("glassBox");
var restPlaceImg = document.getElementById("bannerImg");

async function getRestInfo() {
  let choicePlaceId = localStorage.getItem("restPlaceId");

  const response = await axios
    .get(`http://15.164.44.233:8080/rest-areas/${choicePlaceId}/details`, {})
    .then((data) => {
      let restInfo = data.data.result;
      restPlaceImg.style.background = `url(${restInfo.imageUrl}) lightgray -53.113px 0px / 129.507% 100% no-repeat`;

      glassBox.innerHTML = `
        
        <div id="storeDisWrapper">
          <img
            src="/assets/img/whiteGPS.png"
            style="width: 12px; height: 12px; padding-right: 3px; margin-top: 1px;"
          /><div id="storeDis">1.4km</div>
        </div>
        <div id="storeName">${restInfo.name}</div>
        <div id="roadName">${restInfo.roadName}</div>
        <div
          id="grayLine"
          style="
            border-color: rgba(235, 235, 235, 0.5);
            margin-bottom: 12.53px;
          "
        ></div>
        <div id="plusInfoWrapper">
          <img
            src="/assets/img/store.png"
            style="width: 18px; height: 18px; margin-right: 4px"
          />
          <p id="plusInfo" style="padding-top: 1px">
            ${restInfo.amenities}
          </p>
        </div>
        <div id="sideBetween" style="margin-top: 16px">
          <a href="/restAreaReview" id="writeReviewBtn">
            <img
              src="/assets/img/pencil.png"
              style="width: 16px; height: 16px; margin-right: 4px"
            />후기작성
          </a>
          <button id="shareBtn">
            <img
              src="/assets/img/share.png"
              style="width: 16px; height: 16px; margin-right: 4px"
            />공유
          </button>
        </div>
        `;
    });

  return response;
}

getRestInfo();
