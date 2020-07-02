import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { Article } from "./Article";

export const ListArticle = ({ data, goToArticle }) => {
	return (
		<View style={styles.mainScreen}>
			<FlatList
				data={data}
				keyExtractor={(article) => article.id}
				renderItem={({ item }) => (
					<Article article={item} goToArticle={goToArticle} />
				)}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	mainScreen: {
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#D8D8D8",
		marginBottom: 5,
	},
});
