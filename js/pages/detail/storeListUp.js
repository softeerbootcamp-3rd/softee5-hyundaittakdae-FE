import axios from "axios";

var storeNameList;
var foodList = [];

async function getPopluarMenuList() {
  var restAreaId = localStorage.getItem("restPlaceId");
  const response = await axios
    .get(`http://15.164.44.233:8080/rest-areas/${restAreaId}/stores`, {})
    .then((data) => {
      var menuListUpWrapper = document.getElementById("menuListUpWrapper");
      menuListUpWrapper.innerHTML = "";
      data.data.result.reverse().forEach((menu) => {
        var menuBox = document.createElement("div");
        menuBox.id = "menuBox";
        menuBox.style.marginBottom = "20px";
        menuBox.innerHTML = `
        <img id="mediumImg" src="${menu.imageUrl}" />
                  <div id="menuInfoWrapper">
                    <div id="menuName">
                      ${menu.name}
                    </div>
                    <div id="sideBetween" style="margin-top: 8px">
                      <div style="display: flex">
                        <img
                          id="basicImg"
                          src="/assets/img/mainStar.png"
                          style="margin-right: 4px; margin-bottom: 2px"
                        />
                        <div id="menuScore">${menu.rating}</div>
                      </div>
                      <div id="menuPrice" style="display: flex">
                        ${menu.price}
                        <div>원</div>
                      </div>
                    </div>
                  </div>
      `;

        menuListUpWrapper.appendChild(menuBox);
      });
    });

  return response;
}

getPopluarMenuList();
//총 인기 메뉴 부분에 들어갈 상위 3개 컴포 집어넣는 함수;
var popularBtn = document.getElementById("choiceStore");
popularBtn.addEventListener("click", () => {
  let choiceStore = document.getElementById("choiceStore");
  choiceStore.id = "unChoiceStore";
  popularBtn.id = "choiceStore";
  getPopluarMenuList();
});

async function getRestaurantList() {
  foodList = [];
  var restPlaceId = localStorage.getItem("restPlaceId");
  const response = await axios
    .get(`http://15.164.44.233:8080/rest-areas/${restPlaceId}/restaurants`, {})
    .then((data) => {
      storeNameList = data.data.result;

      var storeSideBar = document.getElementById("storeSideBar");
      storeNameList.forEach((store, index) => {
        let storeTag = document.createElement("div");
        storeTag.id = "unChoiceStore";
        let storeId = store.restaurantId;
        storeTag.textContent = store.restaurantName;
        storeTag.addEventListener("click", function () {
          let choiceStore = document.getElementById("choiceStore");
          choiceStore.id = "unChoiceStore";
          storeTag.id = "choiceStore";

          //여기서부터 클릭하면 각 가게에 대한 음식으로 변경;

          async function getRestaurantMenuList() {
            const response = await axios
              .get(
                `http://15.164.44.233:8080/rest-areas/restaurants/${storeId}/menus`,
                {}
              )
              .then((data) => {
                console.log(data.data.result.menuDTOList);

                var menuListUpWrapper =
                  document.getElementById("menuListUpWrapper");
                menuListUpWrapper.innerHTML = "";
                //menuList로 배열 받기
                data.data.result.menuDTOList.forEach((menu) => {
                  var menuBox = document.createElement("div");
                  menuBox.id = "menuBox";
                  menuBox.style.marginBottom = "20px";
                  menuBox.innerHTML = `
            <img id="mediumImg" src="${menu.imageUrl}" />
                      <div id="menuInfoWrapper">
                        <div id="menuName">
                          ${menu.name}
                        </div>
                        <div id="sideBetween" style="margin-top: 8px">
                          <div style="display: flex">
                            <img
                              id="basicImg"
                              src="/assets/img/mainStar.png"
                              style="margin-right: 4px; margin-bottom: 2px"
                            />
                            <div id="menuScore">${menu.rating}</div>
                          </div>
                          <div id="menuPrice" style="display: flex">
                            ${menu.price}
                            <div>원</div>
                          </div>
                        </div>
                      </div>
          `;

                  menuListUpWrapper.appendChild(menuBox);
                });
              });

            return response;
          }

          getRestaurantMenuList();
        });
        storeSideBar.appendChild(storeTag);
      });
    });

  return response;
}

getRestaurantList();
