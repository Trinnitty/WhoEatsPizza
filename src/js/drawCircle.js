export default function drawcircle() {
  let div = document.createElement("div");
  div.classList.add("circle");
  let parentElem = document.body;
  parentElem.insertBefore(div, parentElem.children[1]);
}
