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
        growUp() {
            this.pet.growUp();
            this.meterValue();
        },
        feed() {
            this.pet.feed();
            this.meterValue();
        },
        walk() {
            this.pet.walk();
            this.meterValue();
        },
        meterValue() {

            document.querySelector("#pet-age").value = pet.age;
            document.querySelector("#pet-hunger").value = pet.hunger;
            document.querySelector("#pet-fitness").value = pet.fitness;

            document.querySelector("#pet-age-value").innerHTML = pet.age;
            document.querySelector("#pet-hunger-value").innerHTML = pet.hunger;
            document.querySelector("#pet-fitness-value").innerHTML = pet.fitness;
            
            document.querySelector("#checkup-message").innerHTML = this.pet.checkUp();
        }
    };

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = Controller;
    } else {
        window.Controller = Controller;
    };
}());