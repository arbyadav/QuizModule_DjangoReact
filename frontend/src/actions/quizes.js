import axios from 'axios';
import { reset } from 'redux-form';
import history from '../history';
import { tokenConfig } from './auth';
import { GET_QUIZES, GET_QUIZ, ADD_QUIZ, DELETE_QUIZ, EDIT_QUIZ } from './types';

// GET QUIZES
export const getQuizes = () => async (dispatch, getState) => {
    const res = await axios.get('/apiquiz/quizzes/', tokenConfig(getState));
    dispatch({
        type: GET_QUIZES,
        payload: res.data
    });
};

// GET QUIZ
export const getQuiz = id => async (dispatch, getState) => {
    const res = await axios.get(`/apiquiz/quizzes/${id}/`, tokenConfig(getState));
    dispatch({
        type: GET_QUIZ,
        payload: res.data
    });
};

// ADD QUIZ
export const addQuiz = formValues => async (dispatch, getState) => {
    const res = await axios.post(
        '/apiquiz/quizzes/',
        { ...formValues },
        tokenConfig(getState)
    );
    dispatch({
        type: ADD_QUIZ,
        payload: res.data
    });
    dispatch(reset('quizForm'));
};

// DELETE QUIZ
export const deleteQuiz = id => async (dispatch, getState) => {
    await axios.delete(`/apiquiz/quizzes/${id}/`, tokenConfig(getState));
    dispatch({
        type: DELETE_QUIZ,
        payload: id
    });
    history.push('/');
};

// EDIT QUIZ
export const editQuiz = (id, formValues) => async (dispatch, getState) => {
    const res = await axios.patch(
        `/apiquiz/quizzes/${id}/`,
        formValues,
        tokenConfig(getState)
    );
    dispatch({
        type: EDIT_QUIZ,
        payload: res.data
    });
    history.push('/');
};
