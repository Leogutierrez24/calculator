const calculadora = new Calculator();

const resetAll = () => {
    firstTermData.innerHTML = '';
    operatorData.innerHTML = '';
    secondTermData.innerHTML = '';
    resultData.innerHTML = '';
    currentData.innerHTML = '';
    calculadora.clearAll();
};

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
            calculadora.setFirstTerm(currentData.textContent);
            calculadora.setOperator(operatorButtons[i].textContent);
    
            firstTermData.innerHTML = calculadora.firstTerm;
            operatorData.innerHTML = ` ${calculadora.operator} `;
            currentData.innerHTML = '';
        } else {
            if(calculadora.secondTerm === undefined){
                resultData.innerHTML = '';

                calculadora.setSecondTerm(currentData.textContent);
                calculadora.calculate();
                calculadora.checkResult();
                if(calculadora.result === 'ERROR'){
                    firstTermData.innerHTML = '';
                    operatorData.innerHTML = '';
                    resultData.innerHTML = calculadora.result;
                    setTimeout(() => {
                        resetAll();
                    }, 1000);
                } else {
                    calculadora.keepWorking();
                    calculadora.setOperator(operatorButtons[i].textContent);
        
                    firstTermData.innerHTML = calculadora.firstTerm;
                    operatorData.innerHTML = calculadora.operator;
                    currentData.innerHTML = '';
                }
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
                calculadora.setSecondTerm(currentData.textContent);
                calculadora.calculate();
                if(calculadora.result === 'ERROR'){
                    firstTermData.innerHTML = '';
                    operatorData.innerHTML = '';
                    resultData.innerHTML = calculadora.result;
                    setTimeout(() => {
                        resetAll();
                    }, 1000);
                } else {
                    secondTermData.innerHTML = calculadora.secondTerm;
                    resultData.innerHTML = ` = ${calculadora.result}`;
                    currentData.innerHTML = '';
                }
            }
        }
    } else {
        firstTermData.innerHTML = calculadora.firstTerm;
        resultData.innerHTML = ` = ${calculadora.result}`;
    }
});

deleteButton.addEventListener('click', resetAll);