import {  GET_POSITIONS,  POSITIONS_LOADDING } from '../actions/types';

const initialState = {
    positions: [],
    loading: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case POSITIONS_LOADDING:
            return {
                ...state,
                loading: true
            }
        case GET_POSITIONS:
            return {
                ...state,
                posts: action.payload,
                loading: false
            }
        default:
            return state;
    }
}