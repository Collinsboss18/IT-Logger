import { GET_TECH, ADD_TECH, DELETE_TECH, TECHS_ERROR, SET_LOADING } from './types';

// GET Tech from Server
export const getTechs = () => async (dispatch) => {
	try {
		setLoading();
		const res = await fetch('/techs');
		const data = await res.json();

		dispatch({ type: GET_TECH, payload: data });
	} catch (err) {
		dispatch({ type: TECHS_ERROR, payload: err.response });
	}
};

// Add Tech to server
export const addTech = (tech) => async (dispatch) => {
	try {
		setLoading();
		const res = await fetch('/techs', {
            method: 'POST',
			body: JSON.stringify(tech),
			headers: { 'Content-Type': 'application/json' }
        });
        const data = await res.json();
        
		dispatch({ type: ADD_TECH, payload: data });
	} catch (err) {
		dispatch({ type: TECHS_ERROR, payload: err.response });
	}
};

// Set Loading to true
export const setLoading = () => {
	return {
		type: SET_LOADING,
	};
};
