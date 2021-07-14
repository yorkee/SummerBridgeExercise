'use strict'

class DecimalMultiplicationGenerator {

    generateQuestion(persona){
    
        let x = Math.floor(((Math.random() *10) + Math.random()) * 100)/100;
        let y = Math.floor(((Math.random() *10) + Math.random()) * 100)/100;        
        let a = Math.round((x * y)*100)/100;

        return {
            q: `${persona || ""} What is  ${x} x ${y}? (round to 2 digit)`,
            a: a
        }
    }
}


module.exports =  DecimalMultiplicationGenerator;