const form = document.querySelector(".form");
const sucessStateContainer = document.querySelector(".sucess_state");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  sucessStateContainer.classList.remove("hidden");
})