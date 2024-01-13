const drawStar = (target) => {
  var parentElement = target.parentNode;
  var starspan = parentElement.querySelectorAll(`span`);
  starspan[0].style.width = `${target.value * 10}%`;
};
