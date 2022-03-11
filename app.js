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

// let state
let waterCount = 0;
let skylineCount = 0;
let natureCount = 0;
const slogans = [];


// set event listeners 
waterDropdown.addEventListener('change', () => {
  const waterSelect = waterDropdown.value;
  waterCount++;
  waterImgEl.style.background = `url(./assets/water-${waterSelect}.png)`;

});

skylineDropdown.addEventListener('change', () => {
  const skylineSelect = skylineDropdown.value;
  skylineCount++;
  skylineImgEl.style.background = `url(./assets/skyline-${skylineSelect}.png)`;

});

natureDropdown.addEventListener('change', () => {
  const natureSelect = natureDropdown.value;
  natureCount++;
  natureImgEl.style.background = `url(./assets/nature-${natureSelect}.png)`;

})
  // get user input
  // use user input to update state
  // update DOM to reflect the new state
