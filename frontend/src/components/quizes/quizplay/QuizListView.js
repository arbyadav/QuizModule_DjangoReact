import React, { Fragment } from 'react';
import axios from 'axios';
import './quiz-list.css';
import QuizItem from './QuizItem';

const API_URL = 'http://127.0.0.1:8000/api/quizzes/'

class QuizListView extends React.Component {
    state = {
        quizzes: null
    };
    config = () => {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                'Authorization': `Token ${this.props.token}`
            }
        }
        return config;
    };

    resetQuiz = (slug, id, e) => {
        axios
            .post(`http://127.0.0.1:8000/api/quizresult/${slug}/`, null, this.config())
            .then(res => {

            })
            .catch(err => {
                console.log(err);
            });

        let new_state = this.state.quizzes

        var result = new_state.find((obj, index) => {
            if (obj.slug === slug) {
                new_state[index].quiztakers_set.completed = false
            }
        })


        this.setState({
            quizzes: new_state
        })
    };


    componentDidMount() {
        axios.get(`${API_URL}`, this.config())
            .then(res => {
                this.setState({
                    quizzes: res.data
                });
                console.log(res.data);
            })
    };

    render() {
        if (!this.state.quizzes) {
            return <div></div>
        }
        return (
            <Fragment>
                <nav className="navbar fixed-top navbar-light bg-light">
                    <span className="navbar-brand mb-0 h1">Quiz Application</span>
                </nav>


                <main role="main" className="container">
                    {this.state.quizzes.map((quiz, index) => {
                        return <QuizItem key={index} reset={this.resetQuiz} quiz={quiz} />
                    }
                    )
                    }
                </main>
            </Fragment>
        );
    }
}

export default QuizListView;
