const inputName = document.querySelector('#name-input');
const addName = document.querySelector('#name-button');
const displayName = document.querySelector('#pet-name');

addName.addEventListener('click', (event) => {

    const pet = new Pet(inputName.value);
    displayName.innerHTML = pet.name;

    event.preventDefault();
});