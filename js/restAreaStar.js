//별점 구현 JS파일
const ShowStarScore = (target) => {
    //console.log(target);
  };
  
  const drawStar = (target) => {
    var parentElement = target.parentNode;
    //console.log(parentElement);
    var starspan = parentElement.querySelectorAll(`span`);
    //console.log(starspan);
    starspan[0].style.width = `${target.value * 10}%`;
    ShowStarScore((target.value * 10) / 20);
  };
  