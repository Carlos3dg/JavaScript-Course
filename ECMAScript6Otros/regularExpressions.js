/* REGULAR EXPRESSIONS */
//They are objects that describe a pattern of characters than can be searched and found any pattern matching

//They can be created in two different ways:
const hiExpression = RegExp('hi');
console.log(hiExpression); // /hi/
const hiExpression2 = /hi/
console.log(hiExpression2); // /hi/

//Their respective sintax is like follow:
/*
     let variable = RegExp(pattern, modifier)
     or
     let variable = /pattern/modifier

     Here the modifier define the way the search is going to be, this can be:
          -g
          -i
          -m
*/

//Examples
