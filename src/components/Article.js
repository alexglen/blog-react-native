import React from "react";
import {
	View,
	ImageBackground,
	StyleSheet,
	Text,
	TouchableOpacity,
} from "react-native";

export const Article = ({ article, goToArticle }) => {
	return (
		<TouchableOpacity activeOpacity={0.5} onPress={() => goToArticle(article)}>
			<View style={styles.imgWrap}>
				<Text style={styles.text}>
					{new Date(article.date).toLocaleDateString()}
				</Text>
				<ImageBackground source={{ uri: article.img }} style={styles.img} />
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	imgWrap: {
		borderColor: "gray",
		borderWidth: 1,
		marginTop: 15,
	},
	img: { width: "100%", height: 200 },
	text: {
		textAlign: "center",
	},
});
