import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';

import history from '../history';
import Header from './layout/Header';

import Dashboard from './todos/Dashboard';
import TodoDelete from './todos/TodoDelete';
import TodoEdit from './todos/TodoEdit';


// import QuizDelete from './quizes/QuizDelete';
// import QuizEdit from './quizes/QuizEdit';

// import QuizListView from '.quizes/quizplay/QuizListView';
// import QuizDetailView from '.quizes/quizplay/QuizDetailView';

import RegisterForm from './auth/RegisterForm';
import LoginForm from './auth/LoginForm';
import PrivateRoute from './common/PrivateRoute';

import { Provider } from 'react-redux';
import store from '../store';
import { loadUser } from '../actions/auth';


class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Header />
          <Switch>
            <PrivateRoute exact path='/' component={Dashboard} />
            <Route exact path='/delete/:id' component={TodoDelete} />
            <Route exact path='/edit/:id' component={TodoEdit} />
            <Route exact path='/register' component={RegisterForm} />
            <Route exact path='/login' component={LoginForm} />
          </Switch>
        </Router>

        {/* 
        <PrivateRoute exact path='/' component={QuizDashboard} />
        <Route exact path='/delete/:id' component={QuizDelete} />
        <Route exact path='/edit/:id' component={QuizEdit} /> */}



      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#app'));
