(function exportController () {   
    function Controller (pet) {
        this.pet = pet;

        document.querySelector('#grow-button').addEventListener('click', () => {
            this.growUp();
        });
        document.querySelector('#feed-button').addEventListener('click', () => {
            this.feed();
        });
        document.querySelector('#walk-button').addEventListener('click', () => {
            this.walk();
        });
    };

    Controller.prototype = {
        // initialisePet() {
        //     const age = document.querySelector('#pet-age');
        //     age.value
        // },
        growUp() {
            this.pet.growUp();
            const currentAge = document.querySelector("#pet-age");
            const currentHunger = document.querySelector("#pet-hunger");
            const currentFitness = document.querySelector("#pet-fitness");

            currentAge.value = pet.age;
            currentHunger.value = pet.hunger;
            currentFitness.value = pet.fitness;

            document.querySelector("#pet-age-value").innerHTML = pet.age;

            this.checkUp();
        },
        feed() {
            this.pet.feed();
            const currentAge = document.querySelector("#pet-age");
            const currentHunger = document.querySelector("#pet-hunger");
            const currentFitness = document.querySelector("#pet-fitness");

            currentAge.value = pet.age;
            currentHunger.value = pet.hunger;
            currentFitness.value = pet.fitness;
            
            this.checkUp();
        },
        walk() {
            this.pet.walk();
            const currentAge = document.querySelector("#pet-age");
            const currentHunger = document.querySelector("#pet-hunger");
            const currentFitness = document.querySelector("#pet-fitness");

            currentAge.value = pet.age;
            currentHunger.value = pet.hunger;
            currentFitness.value = pet.fitness;
            
            this.checkUp();
        },
        checkUp() {
            document.querySelector("#checkup-message").innerHTML = this.pet.checkUp();
        }
    };

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = Controller;
    } else {
        window.Controller = Controller;
    };
}());