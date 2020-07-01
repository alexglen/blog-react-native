import {
	FETCH_ARTICLES,
	TOGGLE_MARKED,
	DELETE_ARTICLE,
	ADD_ARTICLE,
} from "./constants";
import { data } from "../data";

export const fetchArticles = () => ({ type: FETCH_ARTICLES, payload: data });

export const toggleMarked = (id) => ({ type: TOGGLE_MARKED, payload: id });

export const deleteOneArticle = (id) => ({ type: DELETE_ARTICLE, payload: id });

export const addArticle = (payload) => ({
	type: ADD_ARTICLE,
	payload,
});
