function clearInputFields(element) {
  const inputFields = element.querySelectorAll("input");
  inputFields.forEach((input) => {
    input.value = "";
  });
}

function register(element) {
  const username = element.querySelector("#username").value;
  const password = element.querySelector("#password").value;
  const passwordConfirmation = element.querySelector(
    "#passwordConfirmation"
  ).value;

  if (password === passwordConfirmation) {
    alert("Usuário " + username + " registrado!");
    // Limpar os campos após o registro
    clearInputFields(element);
  } else {
    alert("As senhas não conferem");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const registerButton = document.getElementById("registerButton");
  registerButton.addEventListener("click", function () {
    register(this.parentNode);
  });
});
