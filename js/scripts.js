/* 

    CLASSI

*/
class Car {

    constructor(brand, model, year = 2023) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

}

const cars = [];
const carOne = new Car('Hyundai', 'i10');
const carTwo = new Car('Toyota', 'Yaris');
cars.push(carOne, carTwo);
console.log('carOne', carOne, typeof carOne);
console.log('carTwo', carTwo, typeof carTwo);
console.log('cars', cars, typeof cars);

// const person = {
//     createPerson(firstName, lastName, email) {
//         const genericPersonObject = {
//             firstName: firstName,
//             lastName: lastName,
//             email: email
//         };
    
//         return genericPersonObject;
//     }
// };
// const pasquale = person.createPerson('Pasquale', 'Rizzo', 'pasquale.rizzo@boolean.careers');

const pasquale = createPersonObject('Pasquale', 'Rizzo', 'pasquale.rizzo@boolean.careers');

console.log(pasquale, typeof pasquale);
console.log(pasquale.fullName());
console.log(pasquale.fullNameWEmail());


const giuliano = createPersonObject('Giuliano', 'Blas', 'giuliano.blas@boolean.careers');

console.log(giuliano, typeof giuliano);
console.log(giuliano.fullName());
console.log(giuliano.firstName + ' ' + giuliano.lastName);
console.log(giuliano.fullNameWEmail());

const nomeCompletoDiGiuliano = giuliano.fullName();
console.log('Il nome completo di Giuliano è', nomeCompletoDiGiuliano);


const now = new Date();
console.log('now', now, typeof now);



/* 

    FUNZIONI

*/

class Person {

    constructor(firstName, lastName, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }

    fullName() {
        return this.firstName + ' ' + this.lastName;
    }

    fullNameWEmail() {
        return this.firstName + ' ' + this.lastName + ' ' + this.email;
    }

    printSomething(strOne, strTwo) {
        console.log(strOne, strTwo);
    }

}

const simona = new Person('Simona', 'Caruso', 'simona.caruso@boolean.careers');
console.log('simona', simona);
console.log('simona.fullName()', simona.fullName());
console.log('simona.fullNameWEmail()', simona.fullNameWEmail());

simona.printSomething('Ciao', 'Pietro');

const { firstName, lastName, email } = simona;
console.log('DESTRUCTURING:', firstName, lastName, email);
const { log } =  console;
console.log('LOG', log);

function createPersonObject(firstName, lastName, email) {
    const genericPersonObject = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        fullName() {
            return this.firstName + ' ' + this.lastName;
        },
        fullNameWEmail() {
            return this.firstName + ' ' + this.lastName + ' ' + this.email;
        }
    };

    return genericPersonObject;
}