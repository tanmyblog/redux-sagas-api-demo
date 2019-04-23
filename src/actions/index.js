import * as Types from '../constants/ActionTypes';
import callApi from '../utils/apiCaller';

export const actFetchUsersRequest = () => {
    return (dispatch) => {
        return callApi('users', 'GET', null).then( res => {
            dispatch(actFetchUser(res.data));
        });
    }
}

export const actFetchUser = (users) => {
    return {
        type: Types.FETCH_USER,
        users
    };
}