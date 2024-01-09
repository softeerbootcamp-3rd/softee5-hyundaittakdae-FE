//import Toast from "/js/toast.js";
// 새로운 script 요소를 생성합니다.
const scriptElement = document.createElement("script");
// src 속성을 설정합니다.
scriptElement.src = "https://cdn.jsdelivr.net/npm/toastify-js";

// script 요소를 head에 추가하여 스크립트를 로드합니다.
document.head.appendChild(scriptElement);

const Toast = (message) => {
  Toastify({
    text: `${message}`,
    duration: 2500,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: false,
    gravity: "bottom", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {},
    backgroundColor: "rgba(82, 180, 204, 1)",
    onClick: function () {}, // Callback after click
  }).showToast();
};


const dataReceived = JSON.parse(localStorage.getItem("myData"));

const submit = document.querySelector("#writeContinueBtn");

if (dataReceived) {
  // Use the data
  console.log(dataReceived);
} else {
  console.log("not received");
  // Handle the case where data is not available
}

var RestaurantList = [
  "풀초롱 밥상",
  "풀초롱 밥상머리 밥상",
  "쳐비스",
  "asdasd",
  "DSfsdf",
];
/// RestaurantList 는 가변 변수다.

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
        if(SELECTED.length >= 1){
            event.target.style.background = lightgray;
            event.target.style.color = grayText;
            event.target.style.border = `0.79px solid #999ba5`;
            Toast('한개만 선택 가능합니다.');
            done = true;
        }
       else SELECTED.push(event.target.innerText);

    }
    if(done === false){
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

    console.log(selectedJson["selected"]);
  });

  Modal.appendChild(singleBtn);
  const pos = singleBtn.getBoundingClientRect();

  H = pos.top;
  Modal.style.height = `${H}px`;
});

const inputField = document.createElement("div");
inputField.innerHTML = `<div class="dropdown">
<button id="dropDownBtn">메뉴를 선택해주세요</button>
<div style="display: none" id="drop-content"></div>
</div>`;
inputField.classList.add("inputBar");
Modal.appendChild(inputField);

submit.addEventListener("click", () => {

  if(SELECTED.length !== 1){
     
    Toast('식사하신 한군데를 선택해 주세요');
        
  }

  var appending = [];
  console.log(Star[0].value);
  for (let i = 0; i < Star.length; i++) {
    appending.push({
      [`${selectedJson["selected"][i]}`]: Star[i].value,
    });
  }
  dataReceived["selected"] = appending;
  console.log(dataReceived);

  var finalJson = dataReceived;
});
