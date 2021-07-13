import './Exercise.css';

import Question from './Question';

import { Component } from "react";

import myData from './data/data.json';

class Exercise extends Component {

    constructor() {
        super();
    
        this.state = {
            currentSession: 0
        }
        this.updateSession = this.updateSession.bind(this);
    }

    updateSession() {

        this.setState({
            currentSession: this.state.currentSession+1
        })
    }

    render() {

        let question;

        if (myData.sessions[this.state.currentSession]){
            question= (<Question 
                session={myData.sessions[this.state.currentSession]}
                onSessionEnd = {this.updateSession}
            ></Question>);
        } else {
            question = (<div className="answer-grid"><div className="answer">No more question.  You are done!!!</div></div>);
        }

        return (
            <div className="Question">
                <header className="question-header">
                    {myData.title || "Questions for the genius"}
                </header>

                {
                    question
                }
                
            </div>
        );
    }
}

export default Exercise;
