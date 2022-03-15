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
        let firstParam = currentData.textContent;
        calculadora.setFirstTerm(firstParam);
        let actualOperator = operatorButtons[i].textContent;
        calculadora.setOperator(actualOperator);
        previousData.innerHTML = firstParam;
        operatorData.innerHTML = ` ${actualOperator}`;
        currentData.innerHTML = "";
    });
}

equalButton.addEventListener('click', () => {
    // setea los valores del segundo término y ejecuta el cálculo
    calculadora.setSecondTerm(currentData.textContent);
    calculadora.calculate();
    previousData.innerHTML = calculadora.result;
    currentData.innerHTML = "";
    operatorData.innerHTML = "";
});

deleteButton.addEventListener('click', () => {
    // resetea los valores del html y la calculadora
    currentData.innerHTML = "";
    previousData.innerHTML = "";
    operatorData.innerHTML = "";
    calculadora.clearAll();
});