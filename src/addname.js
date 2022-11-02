const inputName = document.querySelector('#name-input');
const addName = document.querySelector('#name-button');
const displayName = document.querySelector('#pet-name');

addName.addEventListener('click', (event) => {
    const currentAge = document.querySelector("#pet-age");
    const currentHunger = document.querySelector("#pet-hunger");
    const currentFitness = document.querySelector("#pet-fitness");

    pet = new Pet(inputName.value);
    currentAge.value = pet.age;
    currentHunger.value = pet.hunger;
    currentFitness.value = pet.fitness;

    displayName.innerHTML = pet.name;
    document.querySelector("#pet-age-value").innerHTML = pet.age;
    controller = new Controller (pet);
    controller.checkUp();

    event.preventDefault();
});

// to do: 
// low and high set up for meters
// having child as well