import {
	FETCH_ARTICLES,
	TOGGLE_MARKED,
	DELETE_ARTICLE,
	ADD_ARTICLE,
	SHOW_LOADER,
	HIDE_LOADER,
} from "./constants";

import AsyncStorage from "@react-native-community/async-storage";

export const toggleMarked = (id) => ({ type: TOGGLE_MARKED, payload: id });

export const removeArticle = (id) => ({ type: DELETE_ARTICLE, payload: id });

export const addArticle = (payload) => ({
	type: ADD_ARTICLE,
	payload,
});

export const fetchArticles = () => {
	return async (dispatch) => {
		dispatch({ type: SHOW_LOADER });

		const jsonValue = await AsyncStorage.getItem("articles");

		if (jsonValue != null) {
			await dispatch({
				type: FETCH_ARTICLES,
				payload: JSON.parse(jsonValue, null, 2),
			});
			dispatch({ type: HIDE_LOADER });
		}
	};
};
