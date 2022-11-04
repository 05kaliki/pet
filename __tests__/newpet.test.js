
const Pet = require("../src/pet");

describe('Pet', () => {
    let pet;

    beforeEach(()=> {
        pet = new Pet('Yeppi');
    });

    describe('pet constructor', () => {
        it('returns an object', () => {
            expect(pet).toBeInstanceOf(Object);
        });

        it('sets name property', () => {
            expect(pet.name).toEqual('Yeppi');
        });

        it('has initial age of 0', () => {
            expect(pet.age).toEqual(0);
        });

        it('has an initial hunger of 0', () => {
            expect(pet.hunger).toEqual(0);
        });

        it('has an initial fitness of 10', () => {
            expect(pet.fitness).toEqual(10);
        });
    })
});

describe('growup, walk and feed', () => {
    let pet;
    let currentAge;
    let currentHunger;
    let currentFitness;
    const MINIMUM_HUNGER = 0;
    const MAXIMUM_AGE = 30;
    const MAXIMUM_FITNESS = 10;
 
    beforeEach(() => {
        pet = new Pet('Fido');
        // const { age: currentAge, hunger: currentHunger, fitness: currentFitness } = pet;
    });

    describe('growUp', () => {
        it('growUp increase the age by 1', () => {   
            currentAge = pet.age;
            pet.growUp();
            expect(pet.age).toEqual(currentAge + 1);
        });  
        
        it('growUp increase the hunger by 5', () => {
            currentHunger = pet.hunger;
            pet.growUp();
            expect(pet.hunger).toEqual(currentHunger + 5);
        });
        
        it('decrease the fitness by 3', () => {
            currentFitness = pet.fitness;
            pet.growUp();
            expect(pet.fitness).toEqual(currentFitness - 3);
        });
        
        it('throw an error if the pet is not alive', () => {
            pet.age = 30;
            expect(() => pet.growUp()).toThrow('Your pet is no longer alive :(');
        }); 
    });

    describe('walk', () => {
        it('increase the fitness by 4', () => {
            currentFitness = pet.fitness = 2;
            pet.walk();
            
            expect(pet.fitness).toEqual(currentFitness + 4);
        });
        
        it('increase the fitness to maximum of 10', () => {
            pet.fitness = 9;
            pet.walk();
            
            expect(pet.fitness).toEqual(MAXIMUM_FITNESS);
        });
    
        it('throws an error if the pet is not alive', () => {
            pet.age = MAXIMUM_AGE;
            expect(() => pet.walk()).toThrow('Your pet is no longer alive :(');
        });
    });

    describe('feed', () => {
        it('decrease the hunger level by 3', () => {
            currentHunger = pet.hunger = 5;
            pet.feed();
            
            expect(pet.hunger).toEqual(currentHunger - 3);
        });
    
        it('decrease the hunger level to minimum of 0', () => {
            pet.hunger = 2;
            pet.feed();
    
            expect(pet.hunger).toEqual(MINIMUM_HUNGER);
        });
    
        it('throws an error if the pet is not alive', () => {
            pet.age = MAXIMUM_AGE;
            expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
        });
    });
})


