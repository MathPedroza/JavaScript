/* 2.1 Intuição JSON é um formato para representação de dados independente
de tecnologia. Nos dias atuais, é de longe o mais utilizado na troca de mensagens
(feitas por requisições HTTP, por exemplo) entre sistemas computacionais. A ideia
é representar dados como coleções de pares chave/valor. Veja alguns exemplos de
representações de coisas do mundo real usando JSON.*/

let pessoa = {
    nome: "João",
    idade: 17,
}
//o acesso a propriedades pode ser feito com ponto
console.log("Me chamo " + pessoa.nome);
//e com [] também
console.log("Tenho " + pessoa["idade"] + " anos");

let pessoaComEndereco = {
    nome: "Maria",
    idade: 21,
    endereco: {
        logradouro: "Rua B",
        numero: 121,
    },
};
console.log(
    `Sou ${pessoaComEndereco.nome},
     tenho ${pessoaComEndereco.idade} anos
     e moro na rua ${pessoaComEndereco.endereco["logradouro"]}
     número ${pessoaComEndereco["endereco"]["numero"]}`
);


/* Uma concessionária tem CNPJ e endereço. Ela possui alguns car-
ros em estoque. Cada um deles tem marca, modelo e ana de fabricação.*/

let concessionaria = {
    cnpj: "00011122210001-45",
    endereco: {
        logradouro: "Rua A",
        numero: 10,
        bairro: "Vila J",
    },
    veiculos: [
        {
            marca: "Ford",
            modelo: "Ecosport",
            anoDeFabricacao: 2018,
        },
        {
            marca: "Chevrolet",
            modelo: "Onix",
            anoDeFabricacao: 2020,
        },
        {
            marca: "Volkswagen",
            modelo: "Nivus",
            anoDeFabricacao: 2020,
        },
    ],
};

/* Pegar um elemento apenas*/

console.log(concessionaria.veiculos[1].modelo);
console.log("--------------------------");

for (let veiculo of concessionaria.veiculos) {
    console.log("--------------------------");
    console.log(`Marca: ${veiculo.marca}`);
    console.log(`Modelo: ${veiculo.modelo}`);
    console.log(`Ano de Fabricação:
    ${veiculo.anoDeFabricacao}`);

}

/* Uma calculadora realiza as operações de soma e subtração . Nada
impede que funções sejam armazenadas em objetos JSON. */

let calculadora = {
    //pode ser arrow function
    soma: (a, b) => a + b,
    //e função comum também
    subtracao: function (a, b) {
        return a - b; // array function e function são a mesma coisa
    },
};

console.log(`2 + 3 = ${calculadora.soma(2, 3)}`);
console.log(`2 - 3 = ${calculadora.subtracao(2, 3)}`);