// We get the event on the button to create a function with some steps that will be executed after this
document.getElementById('submit').addEventListener('click', calculateIt);

function calculateIt () {
//We create two varibles: one to get the operator and another to get the result
    var myOperator;
    var returnValue;

// We catch the input operand value in variables
    var operand1 = document.getElementById('operand1').value;
    var operand2 = document.getElementById('operand2').value;

//Here we create the variables that are going to storage the operand type
    var select1 = document.getElementById('operand1_type');
    var select2 = document.getElementById('operand2_type');

    var operand1Type = select1.value;
    var operand2Type = select2.value;

//We get the operator
    var radios = document.getElementsByName('operator');
    

//Next step is transform the operators to the type that user indicates
    switch (operand1Type) {
        case "number":
        Number(operand1Type);
        break;

        case "string":
        String(operand1Type);
        break;
    }

    switch (operand2Type) {
        case "number":
        Number(operand2Type);
        break;

        case "string":
        String(operand2Type);
        break;
    }

//We loop the times that radios input are in the program and determinate if one of them is checked to do the operation
    for(var i=0, length = radios.length; i < length; i++ ) {
        if (radios[i].checked) {
            myOperator = radios[i].value

            switch (radios[i].value){
                case '+':
                returnValue = operand1 + operand2;
                break;
            }
        }
    }

}

