function register(ev) {
  console.log(ev);
  const sectionElement = ev.currentTarget.parentNode;
  const userName = sectionElement.children.username.value;
  const passWord = sectionElement.children.password.value;
  const passwordConfirmation =
    sectionElement.children.passwordConfirmation.value;

  if (passWord === passwordConfirmation) {
    alert("Usuário " + userName + ", registrado!");
  } else {
    alert("As senhas não conferem");
  }
}

function removeListner() {
  button.removeEventListener("click", register);
  alert("Evento Removido");
}

const button = document.getElementById("register-button");

button.addEventListener("click", register);

button.addEventListener("mouseover", function (ev) {
  console.log(ev);
});
