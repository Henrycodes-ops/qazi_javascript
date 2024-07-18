// API Section
// .then - Anytime i see .then it implies Promises
// Promises - asynchronous programming
// synchronous code means a code wich runs line by line
// While asynchronous code is a type of code that deals with fetching data from a 3rd party website and the code does not run linearly

// eg >
// console.log("yo run first"); // runs instantly

// const dogImageDiv = document.getElementById("dogImage");

// const getRandomDog = () => {
//   fetch("https://dog.ceo/api/breeds/image/random")
//     .then((response) => response.json())
//     .then((json) => {
//       // console.log(json.message);
//       dogImageDiv.innerHTML = `<img src='${json.message}' />`;
//     });
// };

// the .thens' helps to pull the data from the api source
// runs 2s late
//console.log("yo run third"); // runs instantly

// Another Api Example
// SuperHero Api Section
// https://superheroapi.com/api/access-token/character-id
const SUPERHERO_TOKEN = "99b5d26800a9b3434b1fcdc1635d5564";
const BASE_URL = `https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`;

const newHeroBtn = document.getElementById("newHeroBtn");
const heroImageDiv = document.getElementById("heroImage");
const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("searchInput");

const getSuperHero = (id, name) => {
  fetch(`${BASE_URL}/${id}`)
    .then((response) => response.json())
    .then((json) => {
      const superHero = json
      showHeroInfo(superHero);
    });
  };

const statToEmoji = {
  intelligence: "🧠",
  strength: "💪",
  speed: "⚡",
  durability: "🏋️",
  power: "📊",
  combat: "⚔️",
};

const showHeroInfo = (character) => {
  const name = `<h2>${character.name}</h2>`;
  const img = `<img src="${character.img.url}" height=200 width=200 />`;
  const stats = Object.keys(character.powerStats)
    .map((stat) => {
      return `<p>${statToEmoji[stat]} ${stat.toUpperCase()}: ${
        character.powerStats[stat]
      }</p>`; // make sure the tags are in template literals
    })
    .join(""); // To turn an object into an array
    heroImageDiv.innerHTML = `${name}${img}${stats}`;
  };

const getSearchSuperHero = (name) => {
  //console.log(searchInput);
  fetch(`${BASE_URL}/search/${name}`) // also a promise
  .then((response) => response.json()) // response.json is also a promise
  .then((json) => {
    //console.log(json);
    const hero = json.results[0];;
    showHeroInfo(hero);
  });
};

// getSuperHero();

const randomHero = () => {
  const numberOfHeroes = 731;
  return Math.floor(Math.random() * numberOfHeroes) + 1;
};

newHeroBtn.onclick = () => getSuperHero(randomHero());
searchButton.onclick = () => getSearchSuperHero(searchInput.value);
