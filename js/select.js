const food = ["핫도그", "소떡소떡", "알감자", "떡볶이"];

var select = document.getElementById("select");
food.forEach((element) => {
  var option = document.createElement("option");
  option.value = element;
  option.textContent = element;
  select.appendChild(option);
});

select.addEventListener("change", () => {
  console.log(select.value);
});

var selectBtn = document.getElementById("selectBtn");
selectBtn.addEventListener("click", () => {
  if (select.value == "none") {
    Toastify({
      text: `음식을 선택해주세요.`,
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
  } else {
    console.log(select.value);
  }
});
