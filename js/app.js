/*-------------------------------- Constants --------------------------------*/
const playBtnClick = () => {
    state.boredom = 0;
    render();
};
const feedBtnClick = () => {
    state.hunger = 0;
    render();
};
const sleepBtnClick = () => {
    state.sleepiness = 0;
    render();
};
/*---------------------------- Variables (state) ----------------------------*/
const state = {
    boredom: 0,
    hunger: 0,
    sleepiness: 0,
};

let timer;
let gameOver = false;
/*------------------------ Cached Element References ------------------------*/
const boredomStatElm = document.querySelector('#boredom-stat');
const hungerStatElm = document.querySelector('#hunger-stat');
const sleepStatElm = document.querySelector('#sleepiness-stat');
const playBtnElm = document.querySelector('#play');
const feedBtnElm = document.querySelector('#feed');
const sleepBtnElm = document.querySelector('#sleep');
const gameMessageElm = document.querySelector('#message');
const resetBtnElm = document.querySelector('#restart');
/*-------------------------------- Functions --------------------------------*/
const init = () => {
    gameMessageElm.classList.add('hidden');
    resetBtnElm.classList.add('hidden');
    state.boredom = 0;
    state.hunger = 0;
    state.sleepiness = 0;
    timer = setInterval(runGame, 2000);
};
const runGame = () => {
    updateStates();
    checkGameOver();
    render();
};
const updateStates = () => {
    state.boredom += Math.floor(Math.random() * 4);
    state.hunger += Math.floor(Math.random() * 4);
    state.sleepiness += Math.floor(Math.random() * 4);
};
const checkGameOver = () => {
    if (state.boredom >= 10 || state.hunger >= 10 || state.sleepiness >= 10) {
        gameOver = true;
    };
};
const render = () => {
    boredomStatElm.textContent = state.boredom;
    hungerStatElm.textContent = state.hunger;
    sleepStatElm.textContent = state.sleepiness;
    if (gameOver === true) {
      clearInterval(timer);
      gameMessageElm.classList.remove('hidden');
      resetBtnElm.classList.remove('hidden');
    };
};
init();
/*----------------------------- Event Listeners -----------------------------*/
playBtnElm.addEventListener('click', playBtnClick);
feedBtnElm.addEventListener('click', feedBtnClick);
sleepBtnElm.addEventListener('click', sleepBtnClick);
resetBtnElm.addEventListener('click', init);