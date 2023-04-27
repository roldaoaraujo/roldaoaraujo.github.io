// Getting UI Elements
const questionContainer = document.querySelector("#question-container");
const title = document.getElementById("title");
const successContainer = document.querySelector(".success-container");
const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const buttonsContainer = document.querySelector(".buttons-container");
const warningBanner = document.querySelector(".warning-banner")

yesBtn.addEventListener("click", handleFirstAnswer);

noBtn.addEventListener("click", handleFirstAnswer);


function handleFirstAnswer() {
  title.classList.add("hide");
  buttonsContainer.classList.add("hide");
  warningBanner.classList.add("hide");
  handleNext()
  
}

function handleNext() {
  questionContainer.classList.add("hide");
  successContainer.classList.remove("hide");
  
  setTimeout(2000, 
    //window.location.href = "https://secure.doppus.com/go/G8889E9Z3J3E53JO"
    ) 
  
}
