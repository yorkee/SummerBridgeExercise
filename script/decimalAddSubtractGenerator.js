'use strict'

class DecimalAddSubtractGenerator {

    generateQuestion(persona){

        if (Math.random() > 0.5){
    
            let x = Math.floor(((Math.random() *10) + Math.random()) * 100)/100;
            let y = Math.floor(((Math.random() *10) + Math.random()) * 100)/100;
            
            let a = Math.round((x + y)*100)/100;

            return {
                q: `${persona || ""} What is  ${x} + ${y}?`,
                a: a
            }
        } else {
            let x = Math.floor(((Math.random() *10) + Math.random()) * 100)/100;
            let y = Math.floor(((Math.random() *10) + Math.random()) * 100)/100;
            if (y > x){
                let temp = y;
                y = x; 
                x = temp;

            }
            let a = Math.round((x - y)*100)/100;
    
            return {
                q: `${persona || ""} What is ${x} - ${y} ?`,
                a: a
            }        
        }
    }
}


module.exports =  DecimalAddSubtractGenerator;