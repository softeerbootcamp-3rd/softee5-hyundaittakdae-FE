const scriptElement = document.createElement("script");
scriptElement.src = "https://cdn.jsdelivr.net/npm/toastify-js";

document.head.appendChild(scriptElement);

const Toast = (message) => {
  Toastify({
    text: `${message}`,
    duration: 2500,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: false,
    gravity: "bottom",
    position: "center",
    stopOnFocus: true,
    style: {},
    backgroundColor: "rgba(82, 180, 204, 1)",
    onClick: function () {},
  }).showToast();
};

const dataReceived = JSON.parse(localStorage.getItem("myData"));

const submit = document.getElementById("writeContinueBtn");

var RestaurantList = ["온화 분식", "엄마 손맛", "감성 식당"];

const SELECTED = [];

var selectedJson = {
  selected: SELECTED,
};

const container = document.querySelector("#RestaurantList");
const Modal = document.querySelector("#Modal");
const inputBar = document.querySelector(".inputBar");
const Star = document.getElementsByTagName("input");

var curPos = 0;
var prevPos = 0;
var H = 285;

var gray = "rgb(239, 240, 246)";
var skyblue = "#6ccae1";
var lightblue = "#f1fafc";
var lightgray = "rgb(250, 250, 250)";
var grayText = "rgb(180 185 200)";

Modal.style.height = H;
RestaurantList.forEach((item, index) => {
  const singleBtn = document.createElement("div");
  singleBtn.classList.add("RestaurantBtn");
  const width = item.length * 13.5;
  singleBtn.style.width = `${width}px`;
  singleBtn.innerText = item;
  singleBtn.style.marginBottom = `0px`;

  singleBtn.addEventListener("click", (event) => {
    var backgroundColor = window.getComputedStyle(event.target).backgroundColor;

    var done = false;
    if (SELECTED.includes(event.target.innerText)) {
      for (let i = 0; i < SELECTED.length; i++) {
        if (SELECTED[i] === event.target.innerText) {
          SELECTED.splice(i, 1);
        }
      }
    } else {
      if (SELECTED.length >= 1) {
        const elements = document.getElementsByClassName("RestaurantBtn");
        for (const element of elements) {
          if (element.innerText.includes(`${SELECTED[0]}`)) {
            console.log("erase: ", element);
            elementToErase = element;
            break;
          }
        }

        for (let i = 0; i < SELECTED.length; i++) {
          if (SELECTED[i] === SELECTED[0]) {
            SELECTED.splice(i, 1);
          }
        }
        elementToErase.style.background = lightgray;
        elementToErase.style.color = grayText;
        elementToErase.style.border = `0.79px solid #999ba5`;

        event.target.style.background = lightblue;
        event.target.style.color = skyblue;
        event.target.style.border = `0.79px solid ${skyblue}`;
        SELECTED.push(event.target.innerText);
        done = true;
      } else SELECTED.push(event.target.innerText);
    }
    if (done === false) {
      if (backgroundColor === lightgray) {
        event.target.style.background = lightblue;
        event.target.style.color = skyblue;
        event.target.style.border = `0.79px solid ${skyblue}`;
      } else {
        event.target.style.background = lightgray;
        event.target.style.color = grayText;
        event.target.style.border = `0.79px solid #999ba5`;
      }
      done = true;
    }
    selectedJson = {
      selected: SELECTED,
    };
  });

  Modal.appendChild(singleBtn);
  const pos = singleBtn.getBoundingClientRect();

  if (pos.top > 240) H = 0.94 * pos.top;
  Modal.style.height = `${H}px`;
});

const inputField = document.createElement("div");
inputField.innerHTML = `<div class="dropdown">
<button id="dropDownBtn">메뉴를 선택해주세요</button>
<div style="display: none;" id="drop-content"></div>
</div>`;
inputField.classList.add("inputBar");
inputField.style.marginTop = "5px";
Modal.appendChild(inputField);

submit.addEventListener("click", () => {
  window.location.href = "/pages/reviewComplete.html";
});
