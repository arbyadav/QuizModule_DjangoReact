import React, { Component } from 'react';
import TodoCreate from './TodoCreate';
import TodoList from './TodoList';
import QuizCreate from '../quizes/QuizCreate'
import QuizList from '../quizes/QuizList';

class Dashboard extends Component {
  render() {
    return (
      <body className='ui container'>
        <div className="todo">
          <TodoCreate />
          <TodoList />
        </div>
        <br /> <br></br>
        <div className="Quiz">
          Here is my Quiz Section
          <QuizCreate />
          <QuizList />
        </div>
      </body>


    );
  }
}

export default Dashboard;
