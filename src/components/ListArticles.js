import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { Article } from "./Article";

export const ListArticle = ({ data, goToArticle }) => {
	return (
		<View>
			<FlatList
				data={data}
				keyExtractor={(article) => article.id.toString()}
				renderItem={({ item }) => (
					<Article article={item} goToArticle={goToArticle} />
				)}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	mainScreen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
