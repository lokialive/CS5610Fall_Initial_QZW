import axios from 'axios'
import {

    GET_POSITIONS,

    POSITIONS_LOADDING,

} from './types'


// Get Posts action
export const getPositions = () => (dispatch) => {
    dispatch(setPositionsLoading)
    axios
        .get('/api/positions')
        .then((res) =>
            dispatch({
                type: GET_POSITIONS,
                payload: res.data,
            }),
        )
        .catch((err) =>
            dispatch({
                type: GET_POSITIONS,
                payload: null,
            }),
        )
}

// Loading image
export const setPositionsLoading = () => {
    return {
        type: POSITIONS_LOADDING,
    }
}
