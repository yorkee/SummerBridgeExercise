'use strict'

class RewardGenerator {

    constructor(){

        this.NUM_OF_PICTURE = 19;

        this.persona = [
            "Mom",
            "Dad",
        ];
        
        this.noun = [
            "think",
            "said",
            "believe that",
            "know that"    
        ];
        
        this.adjective = [
            "a smartie",
            "awesome",
            "fanastic",
            "fabulous",
            "wonderful",
            "so smart",
            "brilliant",
            "a genius"
        ];
        
        this.rewardMsg2 = [
            "Look at your drawer, you will find a bubble gum as your reward!",
            "I am glad that you are able to do this question!",
        ];        
    }

generateReward() {

    if (Math.random() >0.1){

        let a = this.persona[Math.floor(Math.random() * this.persona.length)] || "I";
        let b = this.noun[Math.floor(Math.random() * this.noun.length)] || "think";
        let c = this.adjective[Math.floor(Math.random() * this.adjective.length)] || "awesome";
        
        let message = `Congrats! ${a} ${b} you are ${c}!` 
        return {
            "message": message,
            "img": `./assets/${(Math.floor(Math.random()*this.NUM_OF_PICTURE +1))}.JPG`
        }
    }else {
        return {
            "message": this.rewardMsg2[Math.floor(Math.random() * this.rewardMsg2.length)] || "Good Job!",
            "img": `./assets/a${(Math.floor(Math.random()*this.NUM_OF_PICTURE +1))}.JPG`
        }
    }  
}

}


module.exports =  RewardGenerator;