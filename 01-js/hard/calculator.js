/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
  - `npm run test-calculator`
*/

class Calculator {

    constructor(){
        this.result = 0
    }

    add(a){
        this.result += a
    }

    subtract(a) {
        this.result -= a
    }
    multiply(a) {
        this.result *= a
    }
    divide(a){
        this.result /= a
    }

    clear(){
        this.result = 0
    }

    getResult(){
        return this.result
    }
    
    calculate(str1){

        str1 = str1.trim()
        str1 = str1.replaceAll(" ","")
        // console.log(str1)
        var oparr = []
        var operations = [ "(", ")","/","*","+","-"]
        var num = ""
        for (var i = 0; i < str1.length; i++){
            if (operations.includes(str1[i])){
                oparr.push(num)
                oparr.push(str1[i])
                num =""
            }else{

                num += str1[i]
            }
        }
        oparr.push(num)
        // console.log(oparr)
        for (var i = 0; i < operations.length; i++){
            var currop = operations[i]
            while (oparr.indexOf(currop) != -1){

                var op1 = parseInt(oparr[oparr.indexOf(currop) - 1])
                var op2 = parseInt(oparr[oparr.indexOf(currop) + 1])
                var ops = oparr[oparr.indexOf(currop)]
                // console.log(ops)
                switch (ops) {
                    case "/":
                        this.result = op1
                        this.divide(op2)
                        // console.log(this.getResult())
                        break;
                    case "*":
                        this.result = op1
                        this.multiply(op2)
                        // console.log(this.getResult())
                        break;
                    case "+":
                        this.result = op1
                        this.add(op2)  
                        // console.log(this.getResult()) 
                        break;
                    case "-":
                        this.result = op1
                        this.subtract(op2)  
                        // console.log(this.getResult())  
                        break;  
                    default:

                        // this.clear()
                        break;

                }
                oparr.splice(oparr.indexOf(currop) - 1, 3, this.result)
                // this.clear()

            }

        }
        
    }

}

const calc1 = new Calculator()
// calc1.add(3)
// calc1.add(5)
// calc1.multiply(5)
// var a = calc1.getResult()
// calc1.clear()
calc1.calculate("2 * 3 - 6 / 3 * 4")
console.log(calc1.getResult())
// console.log(a)

module.exports = Calculator;
