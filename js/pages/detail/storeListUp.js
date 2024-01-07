const storeNameList = [
  "음식점1",
  "음식점2",
  "음식점3",
  "음식점4",
  "음식점5",
  "음식점6",
  "음식점7",
  "음식점8",
  "음식점9",
];

var storeSideBar = document.getElementById("storeSideBar");
storeNameList.forEach((storeName, index) => {
  let storeTag = document.createElement("div");
  storeTag.id = index === 0 ? "choiceStore" : "unChoiceStore";

  storeTag.textContent = storeName;
  storeTag.addEventListener("click", function () {
    let choiceStore = document.getElementById("choiceStore");
    choiceStore.id = "unChoiceStore";
    storeTag.id = "choiceStore";
    console.log("Clicked on store: " + storeName);
  });
  storeSideBar.appendChild(storeTag);
});
