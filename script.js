const form = document.querySelector(".form");
const sucessStateContainer = document.querySelector(".sucess_state");
const checkBoxInput = document.querySelector(".checkbox_input");
const inputs = document.querySelectorAll(".input_grp input");
const errorMsgs = document.querySelectorAll(".error_msg");
const radioBtnInputs = document.querySelectorAll("input[type='radio']");
const radioErrMsg = document.querySelector("fieldset .error_msg");
const textArea = document.querySelector("textarea");
const textAreaError = document.querySelector(".message_container .error_msg");
const consentCheck = document.querySelector("#consent");
const consentError = document.querySelector(".checkbox_input .error_msg");

function isValidEmail(email){
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function showError(index, errorMsg){
  errorMsgs[index].classList.remove("hidden");
  errorMsgs[index].textContent = errorMsg;
}

function removeError(index) {
  errorMsgs[index].classList.add("hidden");
}

function showRadioError() {
  radioErrMsg.classList.remove("hidden");
}

function removeRadioError() {
  radioErrMsg.classList.add("hidden");
}

function showTextAreaError() {
  textAreaError.classList.remove("hidden");
}

function removeTextAreaError() {
  textAreaError.classList.add("hidden");
}

function showConsentError(){
  consentError.classList.remove("hidden");
}

function removeConsentError() {
  consentError.classList.add("hidden");
}

function checkForError() {
  let errorFound = false;
  inputs.forEach((input, index) => {
    if (input.value.trim() === ""){
      let errorMsg = "this field is required";
      showError(index, errorMsg);
      errorFound = true;
    } else if (input.id === "email" && !isValidEmail(input.value)){
      let errorMsg = "please enter a valid email adress"
      showError(index, errorMsg)
      errorFound = true;
    }
  })
  let radioChecked = [...radioBtnInputs].some(input => input.checked);
  if (!radioChecked) {
    showRadioError();
    errorFound = true;
  }
  if (textArea.value.trim() === ""){
    showTextAreaError();
    errorFound = true;
  }
  if (!consentCheck.checked) {
    showConsentError();
    errorFound = true;
  }
  return errorFound;
}


form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!checkForError()){
    sucessStateContainer.classList.remove("hidden");
    form.reset();
  }
})

inputs.forEach((input, index) => {
  input.addEventListener("focus", () => removeError(index))
})
radioBtnInputs.forEach((input) => {
  input.addEventListener("click", removeRadioError);
})
textArea.addEventListener("focus", removeTextAreaError);
consentCheck.addEventListener("click", removeConsentError);

