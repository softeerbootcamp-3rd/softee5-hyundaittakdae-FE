var unChoiceThemes = document.querySelectorAll("#unChoiceTheme");
var choice = document.getElementById("choiceTheme");

choice.addEventListener("click", function () {
  choice.id = "unChoiceTheme";
  choice = this;
  choice.id = "choiceTheme";
});

unChoiceThemes.forEach((unChoiceTheme) => {
  unChoiceTheme.addEventListener("click", function () {
    choice.id = "unChoiceTheme";
    choice = this;
    choice.id = "choiceTheme";
  });
});
