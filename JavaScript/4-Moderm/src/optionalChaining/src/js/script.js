// Definindo um objeto 'user' que contém informações sobre um usuário
const user = {
  name: "John Doe", // Nome do usuário
  email: "doejohn@email.com", // Email do usuário
  friends: [
    // Array de amigos do usuário
    {
      name: "Mary", // Nome do amigo
      address: {
        // Endereço do amigo
        street: "Some Street", // Nome da rua
        number: 89, // Número do endereço
      },
    },
  ],
  age: 42, // Idade do usuário
  phone: {
    // Objeto contendo informações de telefone do usuário
    countryCode: "+55", // Código do país
    ddd: "22", // DDD
    number: "998765432", // Número de telefone
  },
};

// Exibindo o DDD do telefone do primeiro amigo do usuário (utilizando optional chaining para evitar erros caso 'friends' ou 'phone' sejam null ou undefined)
console.log(user.friends[0].phone?.ddd);

// Tentando acessar o comprimento do array 'brothers' do usuário (utilizando optional chaining para evitar erros caso 'brothers' seja null ou undefined)
console.log(user?.brothers?.length);

// Tentando acessar o nome do sexto irmão do usuário (utilizando optional chaining para evitar erros caso 'brothers' seja null ou undefined, e indexação no array com ?.[])
console.log(user.brothers?.[5].name);
