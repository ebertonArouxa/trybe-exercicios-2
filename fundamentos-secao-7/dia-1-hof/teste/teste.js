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