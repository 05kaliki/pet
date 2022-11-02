const inputName = document.querySelector('#name-input');
const addName = document.querySelector('#name-button');
const displayName = document.querySelector('#pet-name');

addName.addEventListener('click', (event) => {
    pet = new Pet(inputName.value);
    controller = new Controller (pet);
    controller.meterValue();
    displayName.innerHTML = pet.name;

    event.preventDefault();
});
