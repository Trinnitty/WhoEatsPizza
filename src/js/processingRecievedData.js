import drawCircle from "./drawCircle";
import slicePizza from "./slicePizza";

export default function processingRecievedData(data) {
  //  Specify how many pizza eaters
  let eaters = data.party.filter(i => {
    return i.eatsPizza === true;
  });
  //  Display text with the number of party participants and pizza eaters
  document.getElementById("app").innerHTML = `
    <p>Party participants <strong>${data.party.length}</strong></p>
    <p>Pizza eaters <strong>${eaters.length}</strong></p>`;
  // Draw pizza
  drawCircle();
  // Slice pizza
  slicePizza(eaters.length);
}
