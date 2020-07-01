import React, { useEffect } from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { HeaderIcon } from "../components/HeaderIcon";
import { ListArticle } from "../components/ListArticles";
import { useSelector, useDispatch } from "react-redux";
import { fetchArticles } from "../redux/actions";

export const MainScreen = ({ navigation }) => {
	const goToArticle = (article) => {
		navigation.navigate("Article", {
			article,
		});
	};

	const dispatch = useDispatch();
	const articles = useSelector((state) => state.articles);
	console.log(articles);

	useEffect(() => {
		dispatch(fetchArticles());
	}, [dispatch]);

	return <ListArticle data={articles} goToArticle={goToArticle} />;
};

MainScreen.navigationOptions = ({ navigation }) => ({
	headerTitle: "Главная",
	headerRight: (
		<HeaderButtons HeaderButtonComponent={HeaderIcon}>
			<Item
				title="take photo"
				iconName="camera-alt"
				onPress={() => navigation.navigate("Create")}
			/>
		</HeaderButtons>
	),
	headerLeft: (
		<HeaderButtons HeaderButtonComponent={HeaderIcon}>
			<Item
				title="menu"
				iconName="menu"
				onPress={() => navigation.toggleDrawer()}
			/>
		</HeaderButtons>
	),
});
