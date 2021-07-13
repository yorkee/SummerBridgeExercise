'use strict'

class DivisionGenerator {

    generateDivision(persona){

        if (Math.random() > 0.5){
    
            let i = 3 + Math.floor(Math.random() *7);
            let q = Math.floor(Math.random()*1000);
    
            let a = Math.round(q *100 / i)/100;
    
            return {
                q: `${persona || ""} What is ${q} divide by ${i}?`,
                a: a
            }
        } else {
            let i = 3 + Math.floor(Math.random() *7);
            let a = Math.floor(Math.random()*10000);
            let q = i*a;
    
            return {
                q: `${persona || ""} What is ${q} divide by ${i}?`,
                a: a
            }        
        }
    }
}


module.exports =  DivisionGenerator;