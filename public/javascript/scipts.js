const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
//now render data to page
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");
messageOne.textContent = "Enter a location ... ";
weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  messageOne.textContent = "Loading ... ";
  const location = search.value;
  //fetch('http://localhost:3000/weather?address='+location+'').then((response)=>{  //for localhost
  fetch("/weather?address=" + location + "").then((response) => {
    //for localhost and heroku both
    response.json().then((data) => {
      if (data.error) {
        messageOne.textContent = data.error;
        messageTwo.textContent = "";
      } else {
        messageOne.textContent = data.forecast;
        messageTwo.textContent = data.location;
        console.log(data.forecast);
        console.log(data.location);
      }
    });
  });
});
