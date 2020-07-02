import { SHOW_LOADER, HIDE_LOADER, SHOW_ERROR, HIDE_ERROR } from "./constants";

const initialState = {
	loader: false,
	error: null,
};

export const loaderReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case SHOW_LOADER:
			return { ...state, loader: true };
		case HIDE_LOADER:
			return { ...state, loader: false };
		case SHOW_ERROR:
			return { ...state, error: payload };
		case HIDE_ERROR:
			return { ...state, error: null };
		default:
			return state;
	}
};
