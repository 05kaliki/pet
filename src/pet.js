const MAXIMUM_FITNESS = 10;
const MINIMUM_HUNGER = 0;

(function exportPet () {
    function Pet(name) {
        this.name = name;
        this.age = 0;
        this.hunger = MINIMUM_HUNGER;
        this.fitness = MAXIMUM_FITNESS;
        this.children = [];
    }

    Pet.prototype = {
        get isAlive() {
            return this.fitness > 0 && this.hunger < 10 && this.age < 30;
        },
        growUp() {
            if(!this.isAlive) {
                throw new Error('Your pet is no longer alive :(');
            }
            this.age += 1;
            this.hunger += 5;
            this.fitness -= 3;
        },
        walk() {
            if(!this.isAlive) {
                throw new Error('Your pet is no longer alive :(');
            }
            if ((this.fitness + 4) <= MAXIMUM_FITNESS) {
                this.fitness += 4;
            } else {
                this.fitness = MAXIMUM_FITNESS;
            };
        },
        feed() {
            if(!this.isAlive) {
                throw new Error('Your pet is no longer alive :(');
            }
            if ((this.hunger - 3) >= MINIMUM_HUNGER) {
                this.hunger -= 3;
            } else {
                this.hunger = MINIMUM_HUNGER;
            };
        },
        checkUp() {
            if(!this.isAlive) {
                return 'Your pet is no longer alive :(';
            }
        
            if (this.fitness <= 3 && this.hunger >= 5) {
                return 'I am hungry AND I need a walk';
            } else if (this.hunger >= 5) {
                return 'I am hungry';
            } else if (this.fitness <= 3) {
                return 'I need a walk';
            } else if (this.age == 0) {
                return 'Hello! (ᵔᴥᵔ)';
            } else {
                return 'I feel great!';
            };
        },
        adoptChild(child) {
            if(!this.isAlive) {
                throw new Error('Your pet is no longer alive :(');
            } else {
                this.children.push(child);
            }
        },
        haveBaby(child) {
            if(!this.isAlive) {
                throw new Error('Your pet is no longer alive :(');
            } else {
                const baby = new Pet (child);
                this.children.push(baby);
            }
        }
    };
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = Pet;
    } else {
        window.Pet = Pet;
    }
}());