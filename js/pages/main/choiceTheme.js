var unChoiceThemes = document.querySelectorAll("#unChoiceTheme");
var choice = document.getElementById("choiceTheme");
var plusFileUrl = "/assets/img/themeImg/";

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

  if (choice.textContent !== "가까운 휴게소") {
    var beforeImgTag = choice.getElementsByTagName("img");
    var newImgUrl = beforeImgTag[0].src;
    var newUrl =
      plusFileUrl + newImgUrl.substring(newImgUrl.lastIndexOf("/") + 10);
    beforeImgTag[0].src = newUrl;
  }
});
//"/assets/img/themeImg/graybathroom.png"
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

    if (choice.textContent !== "가까운 휴게소") {
      var beforeImgTag = choice.getElementsByTagName("img");
      var newImgUrl = beforeImgTag[0].src;
      var newUrl =
        plusFileUrl + newImgUrl.substring(newImgUrl.lastIndexOf("/") + 10);
      beforeImgTag[0].src = newUrl;
    }
  });
});
