class Calculator{
    constructor(firstTerm, secondTerm, operator, result){
        this.firstTerm = firstTerm;
        this.secondTerm = secondTerm;
        this.operator = operator;
        this.result = result;
    };

    setFirstTerm(x){
        if(x == '0' || x == ''){
            this.firstTerm = 0;
        } else {
            this.firstTerm = Number(parseFloat(x).toFixed(2));
        }
    }

    setSecondTerm(y){
        if(y == '0' || y == ''){
            this.secondTerm = 0;
        } else {
            this.secondTerm = Number(parseFloat(y).toFixed(2));
        }
    }

    setOperator(value){
        this.operator = value;
    }

    calculate(){
        switch(this.operator){
            case '+':
                this.result = Number(parseFloat(this.firstTerm + this.secondTerm).toFixed(2));
                break;
            case '-':
                this.result = Number(parseFloat(this.firstTerm - this.secondTerm).toFixed(2));
                break;
            case '/':
                this.result = Number(parseFloat(this.firstTerm / this.secondTerm).toFixed(2));
                this.checkResult();
                break;
            case '*':
                this.result = Number(parseFloat(this.firstTerm * this.secondTerm).toFixed(2));
                break;
            case undefined:
                this.result = Number(parseFloat(this.firstTerm).toFixed(2));
                break;
            default:
                console.log('Something is wrong!!');
        }
    }

    keepWorking(){
        this.firstTerm = this.result;
        this.secondTerm = undefined;
        this.operator = undefined;
        this.result = undefined;
    }

    checkResult(){
        if(this.result !== this.result || this.result === Infinity){
            this.result = 'ERROR';
        }
    }

    clearAll(){
        this.firstTerm = undefined;
        this.secondTerm = undefined;
        this.operator = undefined;
        this.result = undefined;
    }
}