'use strict'

class DivisionGenerator {

    generateDivision(persona){

        if (Math.random() > 0.5){
    
            let x = 1 + Math.floor(Math.random() *10);
            let y = 1 + Math.floor(Math.random()*100);    
            let a = x * y;
    
            return {
                q: `${persona || ""} What is the area of ${x} x ${y} block?`,
                a: a
            }
        } else {
            let x = 1 + Math.floor(Math.random() *10);
            let y = 1 + Math.floor(Math.random()*100);
            let a = x+x+y+y;
    
            return {
                q: `${persona || ""} What is parameter of ${x} x ${y} block?`,
                a: a
            }        
        }
    }
}


module.exports =  DivisionGenerator;