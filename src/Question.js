import './Question.css';
import { Component, Fragment } from "react";

class Question extends Component {

    constructor() {
        super();
        this.state = {
            result:"",
            answer:[],
            inCorrect:[],
            isPicture: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.renderQuestion = this.renderQuestion.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e, index) {

        
        let answer = this.state.answer;


        answer[index] = e.target.value;
        console.log("haha", answer);
        this.setState({
            answer: answer
        });
    }

    handleSubmit(e) {

        let inCorrect = [], anyIncorrect = false;
        for (let i = 0; i < this.props.session.questions.length; i++){
            let isIncorrect = parseFloat(this.state.answer[i]) !== this.props.session.questions[i].a;
            
            inCorrect[i] = isIncorrect;
            console.log("what is incorrect? ", inCorrect);
            if (isIncorrect){
                anyIncorrect = true;
            }
        }

        this.setState({
            inCorrect: inCorrect,
            result: anyIncorrect? "Wrong answer": this.props.session.rewards.message
        })

        if (!anyIncorrect){
            this.setState({
                isPicture: true
            })

            setTimeout(() => {
                this.props.onSessionEnd();
                this.setState({
                    result:"",
                    answer:[],
                    inCorrect:[],
                    isPicture: false
                });
            }, 10000);
        }
    }

    renderQuestion(question, index){
        return (
            <Fragment>
                <div>{question.q}</div>
                <input type="text" value={this.state.answer[index]} onChange={e => this.handleChange(e, index)} />
                <div className="correct">{this.state.inCorrect[index]? "X" : ""}</div>
            </Fragment>
        );
    }

    render() {

        let block;
        if (this.state.isPicture){
            let imgIndex = Math.floor(Math.random()*19 +1) ;
            if (Math.random()>0.5){
                imgIndex = `a${imgIndex}`;
            }
            console.log("img name: ", imgIndex);
            block = (<div className="imgBlock">
                <img src={`./assets/${imgIndex}.JPG`}/>
            </div>)

        } else {
            block = (<div className="riddle-grid">
            {
                this.props.session.questions.map(this.renderQuestion)
            }
            </div>)
        }

        return (
            <Fragment>
                {block}

                <div className="answer-grid">
                    {!this.state.isPicture && <button onClick={this.handleSubmit}>Submit</button>}
                    <div className="answer"> {this.state.result}</div>
                </div>
            </Fragment>
        );
    }
}

export default Question;
