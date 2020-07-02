import React, { useEffect } from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { HeaderIcon } from "../components/HeaderIcon";
import { ListArticle } from "../components/ListArticles";
import { useSelector, useDispatch } from "react-redux";
import { fetchArticles } from "../redux/actions";
import { MainArticle } from "../components/MainArticle";
import { ScrollView, ActivityIndicator } from "react-native";
import { AppError } from "../components/AppError";

export const MainScreen = ({ navigation }) => {
	const goToArticle = (article) => {
		navigation.navigate("Article", {
			article,
		});
	};

	const dispatch = useDispatch();
	const { articles } = useSelector((state) => state.articles);

	useEffect(() => {
		dispatch(fetchArticles());
	}, [dispatch]);

	const { loader, error } = useSelector((state) => state.loader);

	if (loader) {
		return <ActivityIndicator />;
	}
	if (error) {
		return <AppError />;
	}

	return (
		<ScrollView>
			<MainArticle
				article={articles?.length && articles[0]}
				goToArticle={goToArticle}
			/>
			<ListArticle
				data={articles.slice(1).reverse()}
				goToArticle={goToArticle}
			/>
		</ScrollView>
	);
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
