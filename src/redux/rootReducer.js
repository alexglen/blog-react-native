import { combineReducers } from "redux";
import { articlesReducer } from "./aarticlesReducer";
import { loaderReducer } from "./loaderRedcuer";

export const rootReducer = combineReducers({
	articles: articlesReducer,
	loader: loaderReducer,
});
