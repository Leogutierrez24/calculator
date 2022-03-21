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
        if(calculadora.firstTerm === undefined){
            //seteo de variables
            calculadora.setFirstTerm(currentData.textContent);
            calculadora.setOperator(operatorButtons[i].textContent);
    
            // qué muestro en el front?
            firstTermData.innerHTML = calculadora.firstTerm;
            operatorData.innerHTML = ` ${calculadora.operator} `;
            currentData.innerHTML = '';

        } else {
            if(calculadora.secondTerm === undefined){
                // borro por si ya hay un resultado anterior
                resultData.innerHTML = '';

                calculadora.setSecondTerm(currentData.textContent);
                calculadora.calculate();
                calculadora.keepWorking();
                calculadora.setOperator(operatorButtons[i].textContent);
    
                firstTermData.innerHTML = calculadora.firstTerm;
                operatorData.innerHTML = calculadora.operator;
                currentData.innerHTML = '';
            } else {
                calculadora.keepWorking();
                calculadora.setOperator(operatorButtons[i].textContent);

                firstTermData.innerHTML = calculadora.firstTerm;
                operatorData.innerHTML = calculadora.operator;
                secondTermData.innerHTML = '';
                resultData.innerHTML = '';
            }
        }
    });
}

equalButton.addEventListener('click', () => {
    if(calculadora.result === undefined){
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
                secondTermData.innerHTML = calculadora.secondTerm;
                resultData.innerHTML = ` = ${calculadora.result}`;
                currentData.innerHTML = '';
            }
        }
    } else {
        firstTermData.innerHTML = calculadora.firstTerm;
        resultData.innerHTML = ` = ${calculadora.result}`;
    }
});

deleteButton.addEventListener('click', () => {
    // resetea los valores del html y la calculadora
    firstTermData.innerHTML = '';
    operatorData.innerHTML = '';
    secondTermData.innerHTML = '';
    resultData.innerHTML = '';
    currentData.innerHTML = '';
    calculadora.clearAll();
});