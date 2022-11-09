const firstNameInput = document.querySelector("input[name='first-name']");
const lastNameInput = document.querySelector("input[name='last-name']");
const emailInput = document.querySelector("input[name='email']");
const passwordInput = document.querySelector("input[name='password']");

const register = (e) => {
  e.preventDefault();
  if (!checkInputs()) {
    alert("Form sent!");
    location.reload();
  }
};

const checkInputs = () => {
  let error = false;

  if (!firstNameInput.value) {
    addInputErrorMessage(firstNameInput, "First Name cannot be empty");
    error = true;
  }
  if (!lastNameInput.value) {
    addInputErrorMessage(lastNameInput, "Last Name cannot be empty");
    error = true;
  }
  if (!emailInput.value) {
    addInputErrorMessage(emailInput, "Email cannot be empty");
    error = true;
  }
  if (emailInput.value && !validateEmail(emailInput.value)) {
    addInputErrorMessage(emailInput, "Looks like this is not an email");
    error = true;
  }
  if (!passwordInput.value) {
    addInputErrorMessage(passwordInput, "Password cannot be empty");
    error = true;
  }

  return error;
};

const addInputErrorMessage = (input, message) => {
  const span = input.nextElementSibling;
  span.innerText = message;
  input.classList.add("input-invalid");
};

const validateEmail = (email) => {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
};
