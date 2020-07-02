import {
	FETCH_ARTICLES,
	TOGGLE_MARKED,
	DELETE_ARTICLE,
	ADD_ARTICLE,
} from "./constants";

const initialState = {
	articles: [],
	markedArticles: [],
};

export const articlesReducer = (state = initialState, { type, payload }) => {
	console.log(type, payload);
	switch (type) {
		case FETCH_ARTICLES:
			return {
				...state,
				articles: payload,
				markedArticles: payload.filter((article) => article.booked),
			};
		case TOGGLE_MARKED:
			const index = state.articles.findIndex(
				(article) => article.id === payload
			);
			const changedArticle = {
				...state.articles[index],
				booked: !state.articles[index].booked,
			};
			const changedAllArticles = [
				...state.articles.slice(0, index),
				changedArticle,
				...state.articles.slice(index + 1),
			];
			return {
				...state,
				articles: changedAllArticles,
				markedArticles: changedAllArticles.filter((article) => article.booked),
			};
		case DELETE_ARTICLE:
			return {
				...state,
				articles: [
					...state.articles.filter((article) => article.id !== payload),
				],
				markedArticles: [
					...state.markedArticles.filter((article) => article.id !== payload),
				],
			};
		case ADD_ARTICLE:
			return {
				...state,
				articles: [{ ...payload }, ...state.articles],
			};

		default:
			return state;
	}
};
