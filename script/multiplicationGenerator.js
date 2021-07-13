'use strict'

class MultiplicationGenerator {

    generateMultiplication(persona){

        if (Math.random() > 0.5){
    
            let i = 3 + Math.floor(Math.random() *10);
            let q = Math.floor(Math.random()*1000);
    
            let a = i*q;
    
            return {
                q: `${persona || ""} What is ${q} x ${i}?`,
                a: a
            }
        } else {
            let i = 3 + Math.floor(Math.random() *100);
            let q = Math.floor(Math.random()*100);
            let a = i*q;
    
            return {
                q: `${persona || ""} What is ${q} x ${i}?`,
                a: a
            }        
        }
    }
}


module.exports =  MultiplicationGenerator;