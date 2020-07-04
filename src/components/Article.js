import React from "react";
import {
	View,
	Image,
	StyleSheet,
	Text,
	TouchableOpacity,
	Dimensions,
} from "react-native";
import { cutLongTitle, formatDate } from "../helpers";

export const Article = ({ article, goToArticle }) => {
	return (
		<TouchableOpacity
			activeOpacity={0.5}
			onPress={() => goToArticle(article)}
			style={styles.wrap}
		>
			<View style={styles.date}>
				<Text style={styles.text}>{formatDate(article.date)}</Text>
			</View>
			<View style={styles.content}>
				<View style={styles.imgWrap}>
					<Image
						source={{ uri: article.img }}
						style={{ width: "100%", height: 80 }}
					/>
				</View>
				<View style={styles.wrapText}>
					<Text style={styles.title}>{cutLongTitle(article.title)}</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	wrap: {
		marginTop: 10,
		borderRadius: 3,
		elevation: 8,
		shadowColor: "#000",
		shadowRadius: 3,
		shadowOpacity: 0.4,
		shadowOffset: {
			width: 3,
			height: 3,
		},
		backgroundColor: "#fff",
		padding: 4,
		width: Dimensions.get("screen").width * 0.94,
	},
	content: {
		flexDirection: "row",
	},
	imgWrap: {
		width: "45%",
	},
	wrapText: {
		marginLeft: 8,
		paddingRight: 5,
	},
	date: {
		marginBottom: 5,
	},

	text: {
		textAlign: "center",
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
});
