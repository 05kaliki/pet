
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

describe('growUp, walk, feed, checkUp, isAlive, adoptChild and haveBaby', () => {
    let pet;
    let currentAge;
    let currentHunger;
    let currentFitness;
    const MINIMUM_HUNGER = 0;
    const MAXIMUM_AGE = 30;
    const MAXIMUM_FITNESS = 10;
 
    beforeEach(() => {
        pet = new Pet('Fido');
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

    describe('checkUp', () => {
        it('if fitness is 3 or less, return "I need a walk"', () => {
            pet.fitness = 1;
            pet.hunger = 3;
            pet.checkUp();
    
            expect(pet.checkUp()).toBe('I need a walk');
        });
    
        it('if hunger level is 5 or more, return "I am hungry"', () => {
            pet.fitness = 5;
            pet.hunger = 6;
            pet.checkUp();
    
            expect(pet.checkUp()).toBe('I am hungry');
        });
    
        it('if both of the above are true, return "I am hungry AND I need a walk"', () => {
            pet.fitness = 1;
            pet.hunger = 6;
            pet.checkUp();
    
            expect(pet.checkUp()).toBe('I am hungry AND I need a walk');
        });
    
        it('when Pet initiated and age is 0, return "Hello! (ᵔᴥᵔ)"', () => {
            pet.checkUp();
    
            expect(pet.checkUp()).toBe('Hello! (ᵔᴥᵔ)');
        });
    
        it('if not hugry, no need to walk and age is not 0, return "I feel great!"', () => {
            pet.fitness = 5;
            pet.hunger = 3;
            pet.age = 1;
            pet.checkUp();
    
            expect(pet.checkUp()).toBe('I feel great!');
        });
    
        it('throws an error if the pet is not alive', () => {
            pet.age = MAXIMUM_AGE;
            expect(pet.checkUp()).toBe('Your pet is no longer alive :(');
        });
        
    });

    describe('isAlive', () => {
        it('if fitness is 0 or less, return false', () => {
            pet.fitness = -3;
            pet.hunger = 5;
            pet.age = 10;
    
            expect(pet.isAlive).toBeFalsy();
        });
    
        it('if hunger is 10 or more, return false', () => {
            pet.fitness = 3;
            pet.hunger = 12;
            pet.age = 10;
    
            expect(pet.isAlive).toBeFalsy();
        });
    
        it('if age is 30 or more, return false', () => {
            pet.fitness = 3;
            pet.hunger = 5;
            pet.age = 32;
    
            expect(pet.isAlive).toBeFalsy();
        });
    
        it('if none of above, return true', () => {
            pet.fitness = 3;
            pet.hunger = 5;
            pet.age = 10;
    
            expect(pet.isAlive).toBeTruthy();
        });
    })

    describe('adoptChild', () => {
        const child1 = new Pet('Happy');
        const child2 = new Pet('Doory');

        it('adopt a child with children property of array', () => {
            pet.adoptChild(child1);

            expect(pet.children).toEqual([ { name: 'Happy', age: 0, hunger: 0, fitness: 10, children: [] } ]);
        });

        it('using growUp on first child', () => {
            child1.growUp();

            expect(child1).toEqual({ name: 'Happy', age: 1, hunger: 5, fitness: 7, children: [] });
        });

        it('walking child increases its fitness by 4', () => {
            currentFitness = child1.fitness = 2;
            child1.walk();

            expect(child1.fitness).toEqual(currentFitness + 4);
        });

        it('feeding child decreases its hunger by 3', () => {
            currentHunger = child1.hunger = 7;
            child1.feed();

            expect(child1.hunger).toEqual(currentHunger - 3);
        });

        it('adopt two children', () => {
            pet.adoptChild(child1);
            pet.adoptChild(child2);

            expect(pet.children).toEqual(
                [ 
                    { name: 'Happy', age: 1, hunger: 4, fitness: 6, children: [] },
                    { name: 'Doory', age: 0, hunger: 0, fitness: 10, children: [] }
                ]);
        });

        it('when a dead pet adopts a child, throw an error', () => {
            pet.age = MAXIMUM_AGE;
            const child4 = new Pet('Congi');
            
            expect(() => pet.adoptChild(child4)).toThrow('Your pet is no longer alive :(');

        });
    });

    describe('haveBaby', () => { 
        it('create a baby object inside pet', () => {
            pet.haveBaby('Happy');
    
            expect(pet.children).toEqual([ { name: 'Happy', age: 0, hunger: 0, fitness: 10, children: [] } ]);
        });
    
        it('create two baby objects inside pet', () => {
            pet.haveBaby('Doory');
            pet.haveBaby('Nyangi');
    
            expect(pet.children).toEqual(
                [ 
                    { name: 'Doory', age: 0, hunger: 0, fitness: 10, children: [] },
                    { name: 'Nyangi', age: 0, hunger: 0, fitness: 10, children: [] } 
                ]);
        });
    
        it('increase Happy\'s age by 1', () => {
            pet.haveBaby('Happy');
            pet.children[0].growUp();
    
            expect(pet.children[0]).toEqual({ name: 'Happy', age: 1, hunger: 5, fitness: 7, children: [] });
        });
    
        it('walking child increases its fitness by 4', () => {
            pet.haveBaby('Happy');
            currentFitness = pet.children[0].fitness = 2;
            pet.children[0].walk();

            expect(pet.children[0].fitness).toEqual(currentFitness + 4);
        });

        it('feeding child decreases its hunger by 3', () => {
            pet.haveBaby('Happy');
            currentHunger = pet.children[0].hunger = 7;
            pet.children[0].feed();

            expect(pet.children[0].hunger).toEqual(currentHunger - 3);
        });
    
        it('when a dead pet adopts a child, throw an error', () => {
            pet.age = 30;
            
            expect(() => pet.haveBaby('Congi')).toThrow('Your pet is no longer alive :(');
        });
    });
})
