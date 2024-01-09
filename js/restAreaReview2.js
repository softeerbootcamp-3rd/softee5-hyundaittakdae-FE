import axios from "axios";
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

const submit = document.querySelector("#writeContinueBtn");

if (dataReceived) {
  console.log(dataReceived);
} else {
  console.log("not received");
}

var RestaurantList = [];

const SELECTED = [];

var selectedJson = {
  selected: SELECTED,
};

const container = document.querySelector("#RestaurantList");
const Modal = document.querySelector("#inBox");
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

async function getRestaurantList() {
  var restAreaId = localStorage.getItem("restPlaceId");
  const response = await axios
    .get(`http://15.164.44.233:8080/rest-areas/${restAreaId}/restaurants`, {})
    .then((data) => {
      console.log(data);
      var list = data.data.result;
      list.forEach((store) => {
        console.log(store);
        RestaurantList.push({
          name: store.restaurantName,
          id: store.restaurantId,
        });
      });
      RestaurantList.forEach((item, index) => {
        const singleBtn = document.createElement("div");
        singleBtn.classList.add("RestaurantBtn");
        const width = item.length * 13.5;
        singleBtn.style.width = `${width}px`;
        singleBtn.innerText = item.name;
        singleBtn.style.marginBottom = `0px`;

        singleBtn.addEventListener("click", (event) => {
          var backgroundColor = window.getComputedStyle(
            event.target
          ).backgroundColor;
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
              var elementToErase;
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

          console.log(selectedJson["selected"]);
        });

        Modal.appendChild(singleBtn);
        const pos = singleBtn.getBoundingClientRect();

        console.log(pos.top);
        if (pos.top > 240) H = 0.94 * pos.top;
        Modal.style.height = `${H}px`;
      });
      //
    })
    .catch((e) => {
      console.log(e);
    });

  return response;
}

getRestaurantList();

submit.addEventListener("click", () => {
  if (SELECTED.length !== 1) {
    Toast("식사하신 한군데를 선택해 주세요");
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
