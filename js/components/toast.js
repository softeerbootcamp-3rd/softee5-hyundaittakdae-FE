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
