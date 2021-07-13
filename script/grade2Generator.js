'use strict'

class Grade2Generator {

    generateGrade2Question(persona){

        let random = Math.random();
        if (random > 0.3){
            let a = Math.floor(Math.random() *100);
            let b = Math.floor(Math.random() *100);
            if (a>b){
                return {
                    q: `${persona|| ""} What is ${a} - ${b} ?`,
                    a: a-b
                }
            } else {
                return {
                    q: `${persona || ""} What is ${b} - ${a} ?`,
                    a: b-a
                }
            }

        } else if (Math.random() > 0.6){
            let a = Math.floor(Math.random() *7)+2;
            let b = Math.floor(Math.random() *3)+2;
    
            return {
                q: `${persona} What is ${a} x ${b} ?`,
                a: a*b
            }
        } else {
            let a = Math.floor(Math.random() *100);
            let b = Math.floor(Math.random() *100);
            let c = Math.floor(Math.random() *100);
    
            return {
                q: `${persona} What is ${a} + ${b} + ${c} ?`,
                a: a+b+c
            }
        }
    }
}

module.exports =  Grade2Generator;