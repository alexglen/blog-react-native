import React from "react";
import {
	View,
	Text,
	Image,
	Dimensions,
	StyleSheet,
	TouchableOpacity,
} from "react-native";

export const MainArticle = ({ article, goToArticle }) => {
	return (
		<TouchableOpacity activeOpacity={0.7} onPress={() => goToArticle(article)}>
			<View>
				<View>
					<Image
						source={{ uri: article.img }}
						style={{ width: Dimensions.get("window").width, height: 200 }}
					/>
				</View>
				<View style={styles.wrapTitle}>
					<Text style={styles.title} t>
						{article.title}
					</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	wrapTitle: {
		marginTop: 10,
		marginBottom: 15,
	},
	title: {
		fontSize: 22,
		marginLeft: 10,
	},
});
