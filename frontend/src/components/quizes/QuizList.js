import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getQuizes, deleteQuiz } from '../../actions/quizes';

class QuizList extends Component {
  componentDidMount() {
    this.props.getQuizes();
  }

  render() {
    return (
      <div className='ui relaxed divided list' style={{ marginTop: '2rem' }}>
        {this.props.quizes.map(quiz => (
          <div className='item' key={quiz.id}>
            <div className='right floated content'>
              <Link
                to={`/delete/${quiz.id}`}
                className='small ui negative basic button'
              >
                Delete
              </Link>
            </div>
            <i className='large calendar outline middle aligned icon' />
            <div className='content'>
              <Link to={`/edit/${quiz.id}`} className='header'>
                {quiz.name}
                {quiz.description}
                {quiz.questions_count}
              </Link>
              <div className='description'>{quiz.created_at}</div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  quizes: Object.values(state.quizes)
});

export default connect(
  mapStateToProps,
  { getQuizes, deleteQuiz }
)(QuizList);
