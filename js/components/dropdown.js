var foodArr = ["떡볶이", "만두", "비빔칼국수"];
var dropContent = document.getElementById("drop-content");

foodArr.forEach((food) => {
  var link = document.createElement("a");
  link.href = "#";
  link.dataset.food = food;
  link.textContent = food;

  dropContent.appendChild(link);
});

var dropDownBtn = document.getElementById("dropDownBtn");
let click = document.getElementById("drop-content");
dropDownBtn.addEventListener("click", () => {
  if (click.style.display === "none") {
    click.style.display = "block";
    dropDownBtn.style.background =
      "url(/assets/img/upArrow.png) no-repeat right 10px center";
    dropDownBtn.style.backgroundSize = "24px";
    dropDownBtn.style.borderColor = "var(--mainColor)";
    dropDownBtn.style.borderBottomLeftRadius = "0px";
    dropDownBtn.style.borderBottomRightRadius = "0px";
  } else {
    click.style.display = "none";
    dropDownBtn.style.background =
      "url(/assets/img/downArrow.png) no-repeat right 10px center"; // 클릭시 배경 변경
    dropDownBtn.style.backgroundSize = "24px";
    dropDownBtn.style.borderColor = "var(--200)";
    dropDownBtn.style.borderBottomLeftRadius = "6px";
    dropDownBtn.style.borderBottomRightRadius = "6px";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var menuLinks = document.querySelectorAll("#drop-content a");

  function selectFood(event) {
    event.preventDefault();
    var selectedFood = event.target.dataset.food;
    dropDownBtn.innerText = selectedFood;
    dropDownBtn.style.color = "var(--500)";
    if (click.style.display === "none") {
      click.style.display = "block";
      dropDownBtn.style.background =
        "url(/assets/img/upArrow.png) no-repeat right 10px center";
      dropDownBtn.style.backgroundSize = "24px";
      dropDownBtn.style.borderColor = "var(--mainColor)";
      dropDownBtn.style.borderBottomLeftRadius = "0px";
      dropDownBtn.style.borderBottomRightRadius = "0px";
    } else {
      click.style.display = "none";
      dropDownBtn.style.background =
        "url(/assets/img/downArrow.png) no-repeat right 10px center"; // 클릭시 배경 변경
      dropDownBtn.style.backgroundSize = "24px";
      dropDownBtn.style.borderColor = "var(--200)";
      dropDownBtn.style.borderBottomLeftRadius = "6px";
      dropDownBtn.style.borderBottomRightRadius = "6px";
    }
  }

  menuLinks.forEach(function (link, idx) {
    link.addEventListener("click", selectFood);
    if (idx == menuLinks.length - 1) {
      link.style.borderBottomLeftRadius = "6px";
      link.style.borderBottomRightRadius = "6px";
    }
  });
});
