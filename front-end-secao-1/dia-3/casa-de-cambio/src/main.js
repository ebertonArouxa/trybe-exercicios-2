import './style.css';
import Swal from 'sweetalert2';

const input = document.querySelector('#coin');
const button = document.querySelector('#search');
const main = document.querySelector('#price');
const qualquerCoisa = document.querySelector('#qualquerCoisa')

button.addEventListener('click', (event) => {
  event.preventDefault();
  const subtittle = document.createElement('h2');
  subtittle.innerHTML = `Valores referentes a 1 ${input.value}`
  qualquerCoisa.appendChild(subtittle);
  fetch(`https://api.exchangerate.host/latest?base=${input.value}`)
  .then((response) => response.json())
  .then((data) => {
    if (!Object.keys(data.rates).includes(input.value.toUpperCase())) {
      alert();
    }
    price(data.rates)
  })
})

const alert = () => {
    throw new Error(Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
    }))
}

const price = (data) => {
  const objectKeys = Object.keys(data)
  main.innerHTML = '';
  objectKeys.forEach((coin) => {
    const tax = data[coin]
    const allData = document.createElement('div');
    const text = document.createElement('p');
    text.innerHTML = `${coin}:${tax}`
    allData.classList.add('grid');
    text.classList.add('cotacao');
    allData.appendChild(text);
    main.appendChild(allData);
  })
}

