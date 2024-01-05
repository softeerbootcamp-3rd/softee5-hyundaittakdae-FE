import "./style.css";
import { setupCounter } from "./js/counter.js";

document.querySelector("#app").innerHTML = `
  <div>
   원하는 태그 입력
  </div>
`;

setupCounter(document.querySelector("#counter"));
