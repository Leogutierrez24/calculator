/* Cambios a modificar -> 
    3/15
    1) Hay que modificar el seteo del primer término y el operador
    para que se pueda seguir sumando más de una vez. Por ejemplo:
    25 + 3 (oprimo para restar) -> 28 - 2 

    2) Cambiar el resultado de números divididos por 0 y parsear para no
    trabajar con no más de 2 decimales.

    3) Mejorar un poco el front en lo posible.
*/

const calculadora = new Calculator();

for(let i = 0; i < keyboardButtons.length; i++){
    keyboardButtons[i].addEventListener('click', () => {
        let prevNumb = currentData.textContent;
        let newNumb = prevNumb + keyboardButtons[i].textContent;
        currentData.innerHTML = newNumb;
    });
};

for(let i = 0; i < operatorButtons.length; i++){
    operatorButtons[i].addEventListener('click', () => {
        // setea los valores del primer término y el operador
        // let firstParam = currentData.textContent;
        // calculadora.setFirstTerm(firstParam);
        // let actualOperator = operatorButtons[i].textContent;
        // calculadora.setOperator(actualOperator);
        // previousData.innerHTML = firstParam;
        // operatorData.innerHTML = ` ${actualOperator}`;
        // currentData.innerHTML = "";

        if(calculadora.firstTerm === undefined){
            //seteo de variables
            calculadora.setFirstTerm(currentData.textContent);
            calculadora.setOperator(operatorButtons[i].textContent);
    
            // qué muestro en el front?
            firstTermData.innerHTML = calculadora.firstTerm;
            operatorData.innerHTML = ` ${calculadora.operator} `;
            currentData.innerHTML = '';
        } else {
            


        }
    });
}

equalButton.addEventListener('click', () => {
/*
casos -> operador = undefined
         operador != undefined
         first term = undefined
*/
    if(calculadora.firstTerm === undefined){
        calculadora.setFirstTerm(currentData.textContent);
        calculadora.calculate();

        firstTermData.innerHTML = calculadora.firstTerm;
        resultData.innerHTML = ` = ${calculadora.result}`;


    } else {
        if(calculadora.secondTerm === undefined){
            // seteo variables
            calculadora.setSecondTerm(currentData.textContent);
            calculadora.calculate();
    
            // muestro en el front
            secondTermData.innerHTML = currentData.textContent;
            resultData.innerHTML = ` = ${calculadora.result}`;
            currentData.innerHTML = '';
        } else {
            toSetOperator = undefined;
            calculadora.calculate();

            firstTermData.innerHTML = calculadora.firstTerm;
            resultData.innerHTML = ` = ${calculadora.result}`;
        }
    }

});

deleteButton.addEventListener('click', () => {
    // resetea los valores del html y la calculadora
    firstTermData.innerHTML = '';
    operatorData.innerHTML = '';
    secondTermData.innerHTML = '';
    resultData.innerHTML = '';
    currentData.innerHTML = '';

    toSetParam1 = undefined;
    toSetParam2 = undefined;
    toSetOperator = undefined;
    calculadora.clearAll();
});