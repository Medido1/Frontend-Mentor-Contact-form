const form = document.querySelector(".form");
const sucessStateContainer = document.querySelector(".sucess_state");
const checkBoxInput = document.querySelector(".checkbox_input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  sucessStateContainer.classList.remove("hidden");
})

