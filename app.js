// import functions and grab DOM elements
const cityNameInput = document.getElementById('city-name-input');
const cityNameEl = document.getElementById('city-name-here');
const cityInputButton = document.getElementById('city-button');

const waterDropdown = document.getElementById('water-dropdown');
const skylineDropdown = document.getElementById('skyline-dropdown');
const natureDropdown = document.getElementById('nature-dropdown');

const waterImgEl = document.getElementById('water-images');
const skylineImgEl = document.getElementById('skyline-images');
const natureImgEl = document.getElementById('nature-images');

const countMessageEl = document.getElementById('count-message');
const addSloganButton = document.getElementById('slogan-button');
const sloganInputEl = document.getElementById('slogan-input');
const slogansEl = document.getElementById('list');

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

cityInputButton.addEventListener('click', () => {
	cityNameEl.textContent = cityNameInput.value;
});


cityNameInput.addEventListener('change', () => {
	const inputSelect = cityNameInput.value;
	inputSelect.push(cityNameInput);
	cityNameInput.value = '';
	displayCityName();

});

addSloganButton.addEventListener('click', () => {
	const sloganSelect = sloganInputEl.value;
	slogans.push(sloganSelect);
	sloganInputEl.value = '';
	displaySlogans();
});

function displayStats() {
	countMessageEl.textContent = `You changed the water scene ${waterCount} times, the skyline scene ${skylineCount} times, and the nature scene ${natureCount} times.`;
}

function displaySlogans() {
	slogansEl.textContent = '';
	for (let slogan of slogans) {
		const pTag = document.createElement('p');
		pTag.classList.add('slogan');
		pTag.textContent = slogan;
		slogansEl.append(pTag);
	}
}
function displayCityName() {
	cityNameEl.textContent = '';
}



  // get user input
  // use user input to update state
  // update DOM to reflect the new state
