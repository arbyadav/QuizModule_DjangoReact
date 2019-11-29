import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getQuiz, editQuiz } from '../../actions/quizes';
import QuizForm from './QuizForm';

class QuizEdit extends Component {
  componentDidMount() {
    this.props.getQuiz(this.props.match.params.id);
  }

  onSubmit = formValues => {
    this.props.editQuiz(this.props.match.params.id, formValues);
  };

  render() {
    // if (!this.props.quiz) {
    //   return <div>Loading...</div>;
    // }
    return (
      <div className='ui container'>
        <h2 style={{ marginTop: '2rem' }}>Edit Quiz</h2>
        <QuizForm
          initialValues={_.pick(this.props.quiz, 'name')}
          enableReinitialize={true}
          onSubmit={this.onSubmit}
        />

      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  quiz: state.quizes[ownProps.match.params.id]
});

export default connect(
  mapStateToProps,
  { getQuiz, editQuiz }
)(QuizEdit);
