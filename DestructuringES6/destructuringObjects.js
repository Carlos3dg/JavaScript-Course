//OBJECT DESTRUCTURING
//Object literal for object destructuring
const student = {
    firstname: 'Glad',
    lastname: 'Chinda',
    country: 'Nigeria'
};

// Object Destructuring:
const { firstname, lastname, country} = student;
console.log(firstname, lastname, country); // Glad Chinda Nigeria
//Here we have created three variables: firstname, lastname and country, equal to the respected keys from student object

//Default values
const person = {
    name: 'John Doe',
    pais: 'Canada'
};

// Assign default value of 25 to age if undefined
const { name, pais, age = 25 } = person;

console.log(`I am ${name} from ${pais} and I am ${age} years old`); // I am John Doe from Canada and I am 25 years old 
//Here we used a default value in age just in case this was not defined at the person object, in case this property is defined the value is taken from the property and ignores the default one.

//Using different variable names to the property objects
const { name: fullname, country: place, age: years = 25 } = person;

console.log(`I am ${fullname} from ${country} and I am ${years} years old`); // I am John Doe from Canada and I am 25 years old 
//Here we used different names in the variables, the correc syntax to do this is [object.key]:[variable_name] 

//NESTED OBJECT DESTRUCTURING
const estudiante = {
    nombre: 'John Doe',
    age: 16,
    scores: {
        maths: 74,
        english: 63
    }
};
//Here the scores object is nested in the student, so if we wanted to assign maths or english to local variables we will do it as folllow:
const { nombre, scores: { maths, science = 50 } } = estudiante;

console.log(`${nombre} scored ${maths} in Maths and ${science} in Elementary Science.`) // John Doe scored 74 in Maths and 50 in Elementary Science.

//DESTRUCTURED FUNCTION PARAMETERS
//To get the key values from an object and use them as local variables inside functions we destructure objects as parameters:

//Without Destructuring
function displaySummary(student) {
    console.log('Hello, ' + student.nombre);
    console.log('Your Math score is ' + student.scores.maths);
    console.log('Your English score is ' + student.scores.english);
}

//With Destructuring
function displaySummary2({ nombre, scores: { maths = 0, english = 0 } }) {
    console.log('Hello, ' + nombre);
    console.log('Your Math score is ' + maths);
    console.log('Your English score is ' + english);
}

displaySummary(estudiante);
//Hello, John Doe
//Your Math score is 74
//Your English score is 63
displaySummary2(estudiante);
//Hello, John Doe
//Your Math score is 74
//Your English score is 63

//Now if we want to call the function without any parameter, then we need to assign default values to the destructured object and its nested object:
function displaySummary3({ nombre, scores: { maths = 0, english = 0 } = {} } = {}) {
    console.log('Hello, ' + nombre);
    console.log('Your Math score is ' + maths);
    console.log('Your English score is ' + english);
}

displaySummary3(); //Here we avoid errors in case the object is undefined or we forget to pass the parameter, the only thing is that local variables will take default values defined in the destructure object
//Hello, undefined
//Your Math score is 0
//Your English score is 0