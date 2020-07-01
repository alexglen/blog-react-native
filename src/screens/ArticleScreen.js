import React, { useEffect } from "react";
import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	Image,
	Alert,
	Button,
} from "react-native";
import { THEME } from "../../theme";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { HeaderIcon } from "../components/HeaderIcon";
import { useDispatch } from "react-redux";
import { deleteOneArticle } from "../redux/actions";

export const ArticleScreen = ({ navigation }) => {
	const article = navigation.getParam("article");
	const dispatch = useDispatch();

	useEffect(() => {}, [article.booked]);

	const deleteArticle = () => {
		Alert.alert(
			"Удаление статьи",
			`Вы уверены, что хотите удалить ${article.title}?`,
			[
				{
					text: "Отмена",
					style: "cancel",
				},
				{
					text: "Удалить",
					style: "destructive",
					onPress: () => {
						navigation.navigate("Main");
						dispatch(deleteOneArticle(article.id));
					},
				},
			],
			{ cancelable: false }
		);
	};

	return (
		<ScrollView>
			<View>
				<Text style={styles.title}>{article.title}</Text>
			</View>
			<View>
				<Image source={{ uri: article.img }} style={styles.img} />
			</View>
			<View style={styles.text}>
				<Text>{article.text}</Text>
			</View>
			<Text style={styles.date}>
				{new Date(article.date).toLocaleDateString()}
			</Text>
			<Button
				title="Удалить статью"
				color={THEME.DANGER_COLOR}
				onPress={deleteArticle}
			/>
		</ScrollView>
	);
};

ArticleScreen.navigationOptions = ({ navigation }) => {
	const article = navigation.getParam("article");

	return {
		headerTitle: article.title,
		headerRight: (
			<HeaderButtons HeaderButtonComponent={HeaderIcon}>
				<Item
					title="take photo"
					iconName={article.booked ? "star" : "star-border"}
					onPress={() => console.log("make a photo")}
				/>
			</HeaderButtons>
		),
	};
};

const styles = StyleSheet.create({
	title: {
		fontSize: 22,
		textAlign: "center",
		marginTop: 5,
		marginBottom: 5,
	},
	img: {
		width: "100%",
		height: 200,
	},
	text: {
		marginTop: 5,
		marginBottom: 5,
		padding: 5,
	},
	date: {
		marginLeft: 10,
		marginBottom: 10,
		fontWeight: "bold",
	},
});
