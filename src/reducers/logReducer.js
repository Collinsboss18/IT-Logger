import {
	GET_LOGS,
	SET_LOADING,
	LOG_ERROR,
	UPDATE_LOG,
	ADD_LOG,
	DELETE_LOG,
	SET_CURRENT,
	CLEAR_CURREN,
  CLEAR_CURRENT,
} from '../actions/types';

const initialState = {
	logs: null,
	current: null,
	loading: false,
	error: null,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_LOGS:
			return {
				...state,
				logs: action.payload,
				loading: false,
			};
		case ADD_LOG:
			return {
				...state,
				logs: [action.payload, ...state.logs],
				loading: false,
			};
		case DELETE_LOG:
			return {
				...state,
				logs: state.logs.filter((log) => log.id !== action.payload),
				loading: false,
      };
    case UPDATE_LOG:
      return {
        ...state,
        logs: state.logs.map((log)=>log.id === action.payload.id ? action.payload : log),
        loading: false
      }
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
		case SET_LOADING:
			return {
				...state,
				loading: true,
			};
		case LOG_ERROR:
			console.error(action.payload);
			return {
				...state,
				error: action.payload,
			};
		default:
			return state;
	}
};
