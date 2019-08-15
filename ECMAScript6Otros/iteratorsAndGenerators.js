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

const runIterator = createIterator(products);

console.log(runIterator.next()); // {done: false, value: 'cap'}
console.log(runIterator.next()); //{done: false, value: 'jeans'}
console.log(runIterator.next()); // {done: false, value: 't-shirt'}