import axios from "axios";

var storeNameList;
var foodList = [];

async function getRestaurantList() {
  foodList = [];
  const response = await axios
    .get("http://15.164.44.233:8080/rest-areas/7/restaurants", {})
    .then((data) => {
      storeNameList = data.data.result;

      var storeSideBar = document.getElementById("storeSideBar");
      storeNameList.forEach((store, index) => {
        let storeTag = document.createElement("div");
        storeTag.id = index === 0 ? "choiceStore" : "unChoiceStore";

        storeTag.textContent = store.restaurantName;
        storeTag.addEventListener("click", function () {
          let choiceStore = document.getElementById("choiceStore");
          choiceStore.id = "unChoiceStore";
          storeTag.id = "choiceStore";
        });
        storeSideBar.appendChild(storeTag);
      });
    });

  return response;
}

getRestaurantList();
