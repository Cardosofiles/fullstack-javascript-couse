const form = document.getElementById("orderForm");

form.addEventListener("submit", function (ev) {
  ev.preventDefault();

  const name = document.querySelector('input[name="name"]').value;
  const address = document.querySelector('input[name="address"]').value;
  const bredType = document.querySelector('select[name="breadType"]').value;
  const meat = document.querySelector('input[name="main"]').value;
  const cheese = document.querySelector('input[name="cheese"]').value;
  const observations = document.querySelector(
    'textarea[name="observations"]'
  ).value;

  let salad = "";
  document
    .querySelectorAll('input[name="salad"]:checked')
    .forEach(function (item) {
      salad += item.value + ", ";
    });

  console.log({
    name,
    address,
    bredType,
    meat,
    cheese,
    salad,
    observations,
  });

  alert(
    "Pedido Realizado!" +
      "\nNome do Cliente: " +
      name +
      "\nEndereço de Etrega: " +
      address +
      "\nTipo de Pão: " +
      bredType +
      "\nCarne: " +
      meat +
      "\nQueijo: " +
      cheese +
      "\nSalada: " +
      salad +
      "\nObservações: " +
      observations
  );
});
