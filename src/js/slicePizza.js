export default function slicePizza(eaters) {
  let deg = 360 / eaters;
  let temp = 0;
  while (temp <= 181) {
    let div = document.createElement("div");
    div.classList.add("sliceLine");
    let parentElem = document.body.children[1];
    div.style.transform = "rotate(" + temp + "deg)";
    parentElem.appendChild(div);
    temp += deg;
  }
}
