import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { HeaderIcon } from "../components/HeaderIcon";
import { ListArticle } from "../components/ListArticles";
import { useSelector } from "react-redux";

export const MarkScreen = ({ navigation }) => {
	const goToArticle = (article) => {
		navigation.navigate("Article", {
			article,
		});
	};

	const { markedArticles } = useSelector((state) => state.articles);

	return <ListArticle data={markedArticles} goToArticle={goToArticle} />;
};

MarkScreen.navigationOptions = ({ navigation }) => ({
	headerTitle: "Избранные статьи",

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
