const RewardGenerator = require("./rewardGenerator");
const rewardGenerator = new RewardGenerator();
const DivisionGenerator = require("./divisionGenerator");
const divisionGenerator = new DivisionGenerator();
const DecimalAddSubtractGenerator = require("./decimalAddSubtractGenerator");
const decimalAddSubtractGenerator = new DecimalAddSubtractGenerator();

// you can enable those question generator, and plug it in line 37 / 39.  or change the logic so they will display randomly
// const AreaParameterGenerator = require("./areaParameterGenerator");
// const areaParameterGenerator = new AreaParameterGenerator();
// const DecimalMultiplicationGenerator = require("./decimalMultiplicationGenerator");
// const decimalMultiplicationGenerator = new DecimalMultiplicationGenerator();
// const Grade2Generator = require("./grade2Generator");
// const grade2Generator = new Grade2Generator();


fs = require('fs');

(()=>{
    var args = process.argv.slice(2);

    let data = {
        grade: args[0] || 3,
        title: args[1] || "Question"
    }

    let sessionsCount = args[2] || 15;
    let questionCount = args[3] || 3;

    let sessions = [];

    for (j = 0; j < sessionsCount; j++){
        let questions = [];
        for (i = 0; i < questionCount; i++){

            if (Math.random() <0.5){
                questions[i] = divisionGenerator.generateQuestion("Sweety");
            } else {
                questions[i] = decimalAddSubtractGenerator.generateQuestion("Sweety");
            }
        }
        sessions[j] = {
            questions: questions,
            rewards: rewardGenerator.generateReward()
        };
    }

    data.sessions = sessions;

    fs.writeFile("./src/data/data.json", JSON.stringify(data), "utf8", (err) => {
        if (err){
            console.log(" err: ", err);    
        } else {
            console.log(" done.");
        }
    });
})();







