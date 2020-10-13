import { GET_LOGS, SET_LOADING, LOG_ERROR, ADD_LOG, UPDATE_LOG, DELETE_LOG, SET_CURRENT, CLEAR_CURRENT } from './types';

/** export const getLogs = () => {
    return async (dispatch) => {
        setLoading();
        const res = await fetch('/logs');
        const data = await res.json;

        dispatch({ type: GET_LOGS, payload: data })
    }
} */

// Get Logs from Server
export const getLogs = () => async (dispatch) => {
	try {
		setLoading();
		const res = await fetch('/logs');
		const data = await res.json();

		dispatch({ type: GET_LOGS, payload: data });
	} catch (err) {
		dispatch({ type: LOG_ERROR, payload: err.response.data });
	}
};

// Add New Log
export const addLog = (log) => async (dispatch) => {
	try {
		setLoading();
		const res = await fetch('/logs', {
			method: 'POST',
			body: JSON.stringify(log),
			headers: { 'Content-Type': 'application/json' },
		});
		const data = await res.json();

		dispatch({ type: ADD_LOG, payload: data });
	} catch (err) {
		dispatch({ type: LOG_ERROR, payload: err.response.data });
	}
};

// Delete Log from server
export const deleteLog = (id) => async (dispatch) => {
	try {
		setLoading();
		await fetch(`/logs/${id}`, { method: 'DELETE' });

		dispatch({ type: DELETE_LOG, payload: id });
	} catch (err) {
		dispatch({ type: LOG_ERROR, payload: err.response.data });
	}
};

// Update Log on server
export const updateLog = (log) => async (dispatch) => {
	try {
		setLoading();
		const res = await fetch(`/logs/${log.id}`, {
			method: 'PUT',
			body: JSON.stringify(log),
			headers: { 'Content-Type': 'application/json' },
    });
    const data = await res.json();

		dispatch({ type: UPDATE_LOG, payload: data });
	} catch (err) {
		dispatch({ type: LOG_ERROR, payload: err.response.data });
	}
};

// Set Current Log
export const setCurrent = (log) => {
	return { type: SET_CURRENT, payload: log };
};

// Clear Current Log
export const clearCurrent = () => {
	return { type: CLEAR_CURRENT };
};

// Set Loading to true
export const setLoading = () => {
	return {
		type: SET_LOADING,
	};
};
