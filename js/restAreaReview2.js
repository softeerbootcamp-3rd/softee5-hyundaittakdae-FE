
const dataReceived = JSON.parse(localStorage.getItem('myData'));

const submit = document.querySelector("#writeContinueBtn");

if (dataReceived) {
    // Use the data
    console.log(dataReceived);
} else {
    console.log("not received");
    // Handle the case where data is not available
}


var RestaurantList = ["풀초롱 밥상", "풀초롱 밥상머리 밥상", "쳐비스","asdasd","DSfsdf"];
/// RestaurantList 는 가변 변수다.

const SELECTED = [];

var selectedJson = {
    "selected" : SELECTED
};



const container = document.querySelector("#RestaurantList");
const Modal = document.querySelector("#Modal");
const inputBar = document.querySelector('.inputBar');
const Star = document.getElementsByTagName("input");


var curPos = 0;
var prevPos = 0;
var H = 285;

var gray = "rgb(239, 240, 246)";
var skyblue = "#6ccae1";
var lightblue = "#f1fafc";

Modal.style.height = H;
RestaurantList.forEach((item, index) => {
    const singleBtn = document.createElement('div');
    singleBtn.classList.add('RestaurantBtn');
    const width = item.length * 13.5;
    singleBtn.style.width = `${width}px`;
    singleBtn.innerText = item;

    
    singleBtn.style.marginBottom = "10px";

    singleBtn.addEventListener("click", (event)=>{
        var backgroundColor = window.getComputedStyle(event.target).backgroundColor;
        if(SELECTED.includes(event.target.innerText)){
            for(let i = 0; i < SELECTED.length; i++){
                if(SELECTED[i] === event.target.innerText){
                    SELECTED.splice(i,1);
                }
            }
        }
        else{
            SELECTED.push(event.target.innerText);
        }
        if(backgroundColor === gray){

            event.target.style.background = lightblue;
            event.target.style.color = skyblue;
            event.target.style.border = `0.79px solid ${skyblue}`;
        }
        else{

            event.target.style.background = gray;
            event.target.style.color = "#999ba5";
            event.target.style.border = `0.79px solid #999ba5`;
        }
        selectedJson = {
            "selected": SELECTED
        };

        console.log(selectedJson["selected"]);


    });


    Modal.appendChild(singleBtn);
    const pos = singleBtn.getBoundingClientRect();
    
    
    H = pos.top;
    Modal.style.height = `${H}px`;
    
});


const inputField = document.createElement('div');
inputField.classList.add('inputBar');
Modal.appendChild(inputField);



submit.addEventListener("click",()=>{
    
    var appending = [];
    console.log(Star[0].value);
    for (let i = 0; i < Star.length; i++) {
        appending.push({
            [`${selectedJson["selected"][i]}`]: Star[i].value
        });
    }
    dataReceived["selected"] = appending;
    console.log(dataReceived);


    var finalJson = dataReceived;
});