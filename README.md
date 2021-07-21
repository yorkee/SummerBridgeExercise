# Summer Bridge Exercise

My kids finished their bridge book so fast that they are lacking of academic exercise to do for the rest of summer.  After a year of pandemic, they kind of get used to IXL alike computer exercise.  I decided to do my own custom version since they no longer able to access any of the school year online exercise.
![Summer exercise](https://github.com/yorkee/SummerBridgeExercise/blob/master/public/assets/20.jpg)


## Features

Unlike the usual online exercise, you are able to customize the questions and answers suitable to your kids.  You can customize questions with persona within you family, (I use their name, their friends name, their teacher name, etc), their favor cartoon character, book character, or question based on recent events (their last weekend trip) to make it more interesting.  


## How to run

npm install

npm generate

npm start


# customize question and answer

the app read all question and answer in a folder src/data/data.json, which separate each page by sessions and questions.

Format:
```
{
    "grade": 3,
    "title": "Question",
    "sessions": [       \\ each sesion consider one page.  once all the questions answered correctly, the rewards message will populated for 10 sec.
        {
            "questions": [
                {
                    "q": "Uncle Tom has 12 apples, he give 3 to you, 2 to your nephew Sam, and 4 to Aunte Susan.  How many left?",     \\ questions display on each page
                    "a": 3                                          \\ answer to validate user input
                },
                {
                    "q": "Bobby, it takes us 2 hrs drove to Lake Tahoe last weekend.  We stopped 5 mins for gas, then we stopped at the welcome center for 30 minutes.  How many minutes were we on the road?",
                    "a": 155
                },
                {
                    "q": "Bobby, what is your birth day times your birth month?",
                    "a": 189
                }
            ],
            "rewards": {
                "message": "Bobby, you answered all questions correctly! Awesome!"  \\ a custom message to display 
            }
        },        
        {
            "questions": [
                ...
                ..
                .
```


# customize question and answer

I have created couple question generator.  Run: ```npm run generate``` to generate new questions.  New questions will be in src/data/data.json.  You can customize the question from the template.

You can also modify the question generator to make question harder or easier.  I have created multiplicationGenerator, divisionGenarator, grade2Generator, and areaParameterGenerator.  you can swap them out in questionGenerator.


# customize messages and pictures.


You can customize rewardGenerator to generate different messages.  open script/rewardGenerator, add or change the persona and messages array

Currently it is hosting 19 different JPG file in public/assets.  Replace them with your family photo, your kids photo, or your kids favorite cartoon pictures, to make the end message more attractive.










