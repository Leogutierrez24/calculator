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
            this.firstTerm = parseInt(x);
        }
    }

    setSecondTerm(y){
        if(y == '0' || y == ''){
            this.secondTerm = 0;
        } else {
            this.secondTerm = parseInt(y);
        }
    }

    setOperator(value){
        this.operator = value;
    }

    calculate(){
        switch(this.operator){
            case '+':
                this.result = this.firstTerm + this.secondTerm;
                break;
            case '-':
                this.result = this.firstTerm - this.secondTerm;
                break;
            case '/':
                this.result = this.firstTerm / this.secondTerm;
                break;
            case '*':
                this.result = this.firstTerm * this.secondTerm;
                break;
            case undefined:
                this.result = this.firstTerm;
                break;
            default:
                console.log('Something is wrong!!');
        }
    }

    clearAll(){
        this.firstTerm = undefined;
        this.secondTerm = undefined;
        this.operator = undefined;
        this.result = undefined;
    }

};