const RewardGenerator = require("./rewardGenerator");
const DivisionGenerator = require("./divisionGenerator");
//const Grade2Generator = require("./grade2Generator");
const rewardGenerator = new RewardGenerator();
const divisionGenerator = new DivisionGenerator();
//const grade2Generator = Grade2Generator();
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
            questions[i] = divisionGenerator.generateDivision("Sweety");
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
        
    })


})();







