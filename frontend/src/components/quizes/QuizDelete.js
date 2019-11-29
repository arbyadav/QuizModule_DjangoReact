import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../layout/Modal';
import history from '../../history';
import { getQuiz, deleteQuiz } from '../../actions/quizes';

class QuizDelete extends Component {
  componentDidMount() {
    this.props.getQuiz(this.props.match.params.id);
  }

  renderContent() {
    if (!this.props.quiz) {
      return 'Are you sure you want to delete this Quiz?';
    }
    return `Are you sure you want to delete the Quiz: ${this.props.quiz.name}`;
  }

  renderActions() {
    const { id } = this.props.match.params;
    return (
      <Fragment>
        <button
          onClick={() => this.props.deleteQuiz(id)}
          className='ui negative button'
        >
          Delete
        </button>
        <Link to='/' className='ui button'>
          Cancel
        </Link>
      </Fragment>
    );
  }

  render() {
    return (
      <Modal
        title='Delete Quiz'
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/')}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  quiz: state.quizes[ownProps.match.params.id]
});

export default connect(
  mapStateToProps,
  { getQuiz, deleteQuiz }
)(QuizDelete);
