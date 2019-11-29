import _ from 'lodash';
import {
    GET_QUIZES,
    GET_QUIZ,
    ADD_QUIZ,
    DELETE_QUIZ,
    EDIT_QUIZ
} from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case GET_QUIZES:
            return {
                ...state,
                ..._.mapKeys(action.payload, 'id')
            };
        case GET_QUIZ:
        case ADD_QUIZ:
        case EDIT_QUIZ:
            return {
                ...state,
                [action.payload.id]: action.payload
            };
        case DELETE_QUIZ:
            return _.omit(state, action.payload);
        default:
            return state;
    }
};
