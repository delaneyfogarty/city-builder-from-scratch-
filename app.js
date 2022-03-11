// import functions and grab DOM elements
const cityNameInput = document.getElementById('city-name-input-container');
const cityNameEl = document.getElementById('city-name-input');

const waterDropdown = document.getElementById('water-dropdown');
const skylineDropdown = document.getElementById('skyline-dropdown');
const natureDropdown = document.getElementById('nature-dropdown');

const waterImgEl = document.getElementById('water-images');
const skylineImgEl = document.getElementById('skyline-images');
const natureImgEl = document.getElementById('nature-images');

const waterCountEl = document.getElementById('waterCount');
const skylineCountEl = document.getElementById('skylineCount');
const natureCountEl = document.getElementById('natureCount');

const countMessageEl = document.getElementById('count-message');
const addSloganButton = document.getElementById('slogan-button');
const sloganInputEl = document.getElementById('slogan-input');
const slogansEl = document.getElementById('slogans');

// let state
let waterCount = 0;
let skylineCount = 0;
let natureCount = 0;
const slogans = [];


// set event listeners 
waterDropdown.addEventListener('change', () => {
  const waterSelect = waterDropdown.value;
  waterCount++;
  waterImgEl.src = `./assets/${waterSelect}.jpg`;
  displayStats();

});

skylineDropdown.addEventListener('change', () => {
  const skylineSelect = skylineDropdown.value;
  skylineCount++;
  skylineImgEl.src = `./assets/${skylineSelect}.jpg`;
  displayStats();

});

natureDropdown.addEventListener('change', () => {
  const natureSelect = natureDropdown.value;
  natureCount++;
  natureImgEl.src = `./assets/${natureSelect}.jpg`;
  displayStats();

});

addSloganButton.addEventListener('click', () => {
  const sloganSelect = sloganInputEl.value;
  slogans.push(sloganSelect);
  sloganInputEl.value = '';

})

function displayStats() {
  countMessageEl.textContent = `You changed the water scene ${waterCount} times, the skyline scene ${skylineCount} times, and the nature scene ${natureCount} times.`;
}




  // get user input
  // use user input to update state
  // update DOM to reflect the new state
