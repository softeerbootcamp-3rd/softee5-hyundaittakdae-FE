var menuList = [
  {
    menuImg: "/assets/img/exFoodImg.png",
    menuName: "매운 마제소바",
    menuScore: 4.8,
    menuPrice: "8,000",
  },
  {
    menuImg: "/assets/img/exFoodImg.png",
    menuName: "매운 마제소바",
    menuScore: 4.8,
    menuPrice: "8,000",
  },
  {
    menuImg: "/assets/img/exFoodImg.png",
    menuName: "매운 마제소바",
    menuScore: 4.8,
    menuPrice: "8,000",
  },
];

var menuListUpWrapper = document.getElementById("menuListUpWrapper");

menuList.forEach((menu) => {
  var menuBox = document.createElement("div");
  menuBox.id = "menuBox";
  menuBox.style.marginBottom = "20px";
  menuBox.innerHTML = `
  <img id="mediumImg" src="${menu.menuImg}" />
            <div id="menuInfoWrapper">
              <div id="menuName">
                ${menu.menuName}
              </div>
              <div id="sideBetween" style="margin-top: 8px">
                <div style="display: flex">
                  <img
                    id="basicImg"
                    src="/assets/img/mainStar.png"
                    style="margin-right: 4px; margin-top: 2px"
                  />
                  <div id="menuScore">4.8</div>
                </div>
                <div id="menuPrice" style="display: flex">
                  ${menu.menuPrice}
                  <div>원</div>
                </div>
              </div>
            </div>
`;

  menuListUpWrapper.appendChild(menuBox);
});
