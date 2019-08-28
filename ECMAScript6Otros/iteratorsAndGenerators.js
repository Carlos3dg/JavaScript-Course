//Iterators
//These let you manage every running made, opposite to the for, while or other iterator systems that just let you manage the entire proccess during the running and not individually

/* Example */
function createIterator(product) {
     let i = 0;

     return {
          next: () => {
               let done = (i >= product.length);

               let value = !done ? product[i++] : undefined;

               return {
                    done: done,
                    value: value,
               }
          }
     }
}

const products = ['cap', 'jeans', 't-shirt', 'sunglasses'];

//To iterate the function we need to declare a variable equal to its called
const runIterator = createIterator(products);

console.log(runIterator.next()); // {done: false, value: 'cap'}
console.log(runIterator.next()); //{done: false, value: 'jeans'}
console.log(runIterator.next()); // {done: false, value: 't-shirt'}

/* GENERATORS */
//These are functions that returns an object with the done and value properties, similar to an iterator

//Creation
function *CreateGenerator() {
     yield 1;
     yield 2;
     yield 3;
     yield 'four';
} //The generator functions are always distinguished by the astheristic before its name, and they use the word yield to create a next() object with its respective value  

//In the same way as we did with the iterator function, we declare a variable equal to its call
const runGenerator = CreateGenerator();

console.log(runGenerator.next()); // {value: 1, done: false}
console.log(runGenerator.next()); // {value: 2, done: false}
console.log(runGenerator.next()); // {value: 3, done: false}
console.log(runGenerator.next()); // {value: 'four', done: false}
console.log(runGenerator.next()); // {value: undefined, done: true} //Here the generator didn't found more yield values

//Other example
function *iterateStore() {
     //Here we create a serie of yields with a respective element from the items array
     for(let i=0; i<items.length; i++) {
          yield items[i];
     }
}
const items = ['headphones', 'cap', 'jeans', 'belt']

const runStore = iterateStore(items);

console.log(runStore.next().value); //headphones
console.log(runStore.next().value); //cap
console.log(runStore.next().value); //jeans
console.log(runStore.next().value); //belt
