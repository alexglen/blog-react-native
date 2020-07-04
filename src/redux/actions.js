import {
	FETCH_ARTICLES,
	TOGGLE_MARKED,
	DELETE_ARTICLE,
	ADD_ARTICLE,
	SHOW_LOADER,
	HIDE_LOADER,
	SHOW_ERROR,
	HIDE_ERROR,
} from "./constants";

import { deleteOneArticle, addToFave } from "../services";

export const toggleMarked = (id, marked) => {
	addToFave(id, marked);

	return { type: TOGGLE_MARKED, payload: id };
};

export const removeArticle = (id) => {
	deleteOneArticle(id);
	return { type: DELETE_ARTICLE, payload: id };
};

export const addArticle = (payload) => ({
	type: ADD_ARTICLE,
	payload,
});

export const fetchArticles = () => {
	return async (dispatch) => {
		dispatch({ type: SHOW_LOADER });
		dispatch({ type: HIDE_ERROR });

		try {
			const res = await fetch(
				"https://blog-react-native-e68a9.firebaseio.com/articles.json"
			);

			const body = await res.json();
			console.log(body, "BODY");
			dispatch({
				type: FETCH_ARTICLES,
				payload: body
					? Object.keys(body).map((key) => ({ id: key, ...body[key] }))
					: [],
			});
		} catch (err) {
			dispatch({ type: SHOW_ERROR });
		} finally {
			dispatch({ type: HIDE_LOADER });
		}
	};
};
