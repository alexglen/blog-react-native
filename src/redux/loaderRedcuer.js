import { SHOW_LOADER, HIDE_LOADER, SHOW_ERROR, HIDE_ERROR } from "./constants";

const initialState = {
	loader: false,
};

export const loaderReducer = (state = initialState, { type }) => {
	switch (type) {
		case SHOW_LOADER:
			return { ...state, loader: true };
		case HIDE_LOADER:
			return { ...state, loader: false };
		default:
			return state;
	}
};
