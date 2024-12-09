//declaração
v1 = [];

//podemos acessar qualquer posição, começando de zero
v1[0] = 3.4;
v1[10] = 2;
v1[2] = "abc"

//aqui, v1 tem comprimento igual a 11
console.log(v1.length)

//iniciando na declaração
v2 = [2, "abc", true]
console.log(v2)

//iterando
for (let i = 0; i < v2.length; i++) {
    console.log(v2[i])
}

const nomes = ["Ana Maria", "Antonio", "Rodrigo", "Alex", "Cristina"];

const apenasComA = nomes.filter((n) => n.startsWith("A")); // Filtro - Nomes que começam com a Letra "A"
console.log(apenasComA);

const res = nomes.map((nome) => nome.charAt(0)); // mapeamento de uma coleção a outra atráves de uma função
console.log(res);

const todosComecamComA = nomes.every((n) => // Retorna False
    // Every -> checa algum elemento dentro da função

    n.startsWith("A"));
console.log(todosComecamComA);

const valores = [1, 2, 3, 4];
const soma = valores.reduce((ac, v) => ac + v); // (Acumulador, Valor) -> adicionar no acumulador o elemento "v'"
console.log(soma);