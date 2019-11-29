import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addQuiz } from '../../actions/quizes';
import QuizForm from './QuizForm';

class QuizCreate extends Component {
  onSubmit = formValues => {
    this.props.addQuiz(formValues);
  };

  render() {
    return (
      <div style={{ marginTop: '2rem' }}>
        <QuizForm destroyOnUnmount={false} onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  { addQuiz }
)(QuizCreate);
