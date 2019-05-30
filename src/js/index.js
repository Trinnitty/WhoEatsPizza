import processingRecievedData from "./processingRecievedData";

import "../styles.scss";

document.getElementById("load-btn").addEventListener("click", () => {
  if (document.body.children[1].classList[0] === "circle") {
    document.body.children[1].remove();
    console.log(document.body.children[1].classList);
  }
  document.getElementById("app").innerHTML = `<p>wait...</p>`;
  document.getElementById("load-btn").classList.add("loading");

  fetch("https://gp-js-test.herokuapp.com/pizza")
    .then(response => {
      if (response.status !== 200) {
        console.log(
          "Looks like there was a problem. Status Code: " + response.status
        );
        return;
      }
      document.getElementById("app").innerHTML = ``;
      document.getElementById("load-btn").classList.remove("loading");
      // Examine the text in the response
      return response.json();
    })
    .then(data => {
      processingRecievedData(data);
    })
    .catch(error => {
      console.log(
        "There has been a problem with your fetch operation: " + error.message
      );
    });
});
