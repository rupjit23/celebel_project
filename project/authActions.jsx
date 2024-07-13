import axios from 'axios';

export const login = (email, password) => async (dispatch) => {
    try {
        const res = await axios.post('/api/login', { email, password });
        dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
    } catch (error) {
        dispatch({ type: 'LOGIN_FAIL', payload: error.response.data });
    }
};

export const register = (email, password) => async (dispatch) => {
    try {
        const res = await axios.post('/api/register', { email, password });
        dispatch({ type: 'REGISTER_SUCCESS', payload: res.data });
    } catch (error) {
        dispatch({ type: 'REGISTER_FAIL', payload: error.response.data });
    }
};
