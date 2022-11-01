const Pet = require("./pet");

const inputName = document.querySelector('#name-input');
const addName = document.querySelector('#name-button');

addName.addEventListener('click', (event) => {

    const name = new Pet(inputName.value);
    
    event.preventDefault();
});