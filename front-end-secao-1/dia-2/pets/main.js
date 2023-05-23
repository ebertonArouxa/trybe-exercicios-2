const dogButton = document.querySelector('.dog-button');
const catButton = document.querySelector('.cat-button');
const surpriseButton = document.querySelector('.surprise-button');
const img = document.querySelector('.img');

dogButton.addEventListener('click', (event) => {
  event.preventDefault();
  fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json())
    .then((data) => {
      img.src = data.message;
    })
});

catButton.addEventListener('click', (event) => {
  event.preventDefault();
  fetch('https://aws.random.cat/meow')
    .then((response) => response.json())
    .then((data) => {
      img.src = data.file;
    })
})

surpriseButton.addEventListener("click", () => {
  Promise.any([
    fetch("https://aws.random.cat/meow"),
    fetch("https://dog.ceo/api/breeds/image/random"),
  ])
    .then((res) => res.json())
    .then((data) => {
      img.src = data.file || data.message;
    })
  });