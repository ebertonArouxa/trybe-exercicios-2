const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

emailListInData.forEach((email) => console.log(`O email ${email} está cadastrado em nosso banco de dados!`));

const numbers = [19, 21, 30, 3, 45, 22, 15];
const verifyNumber = numbers.find((number) => number % 3 === 0 && number % 5 === 0);
console.log(verifyNumber);

const names = ['João', 'Irene', 'Fernando', 'Maria'];
const verifyName = names.find((name) => name.length === 5);
console.log(verifyName);

const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
];

const verifyMusic = musicas.find((music) => music.id === '31031685');
console.log(verifyMusic);

const names2 = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  return arr.some((currentName) => currentName === name); 
};

console.log(hasName(names2, 'Ana'));
console.log(hasName(names2, 'Pedro'));

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (array, lowAge) => {
  return array.every((idade) => idade.age >= lowAge);
};

console.log(verifyAges(people, 18));
console.log(verifyAges(people, 14));