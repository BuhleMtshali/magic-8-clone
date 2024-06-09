let inputElement = document.querySelector("#input-el");
let outElement = document.querySelector("#output");
let randomResponses = [
  "Go for it",
  "it might be fate",
  "I'm not sure about this",
  "This needs more thinking through",
  "This might be the best idea",
  "Terrible idea",
  "I fully support this notion",
  "This might be the best idea!",
];
function giveResponse(event) {
  event.preventDefault();
  let randomResponse = Math.floor(Math.random() * 8);
  outElement.innerHTML = randomResponse[randomResponse];
}

let outputButton = document.querySelector("#submit");
outputButton.addEventListener("click", giveResponse);
