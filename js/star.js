//별점 구현 JS파일
const ShowStarScore = (target) => {
  console.log(target);
};

const drawStar = (target) => {
  document.querySelector(`.star span`).style.width = `${target.value * 10}%`;
  ShowStarScore((target.value * 10) / 20);
};
