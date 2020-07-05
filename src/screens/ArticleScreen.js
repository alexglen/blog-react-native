import React, { useEffect } from "react";
import {
	Text,
	View,
	StyleSheet,
	ScrollView,
	Image,
	Alert,
	Button,
} from "react-native";
import { THEME } from "../../theme";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { HeaderIcon } from "../components/HeaderIcon";
import { useDispatch, useSelector } from "react-redux";
import { toggleMarked, removeArticle } from "../redux/actions";
import { formatDate } from "../helpers";

export const ArticleScreen = ({ navigation }) => {
	const article = navigation.getParam("article");

	const dispatch = useDispatch();
	const isMarkedArticle = useSelector(
		(state) => state.articles.markedArticles
	).some((post) => post.id === article.id);

	useEffect(() => {
		navigation.setParams({ marked: article.booked, dispatch: dispatch });
	}, [article.booked]);

	useEffect(() => {
		navigation.setParams({ isMarkedArticle });
	}, [isMarkedArticle]);

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
						dispatch(removeArticle(article.id));
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
			<View style={styles.imgWrap}>
				<Image source={{ uri: article.img }} style={styles.img} />
			</View>
			<View style={styles.textWrap}>
				<Text style={styles.text}>{article.text}</Text>
			</View>
			<Text style={styles.date}>{formatDate(article.date)}</Text>
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
	const marked = navigation.getParam("isMarkedArticle");
	const dispatch = navigation.getParam("dispatch");

	return {
		headerTitle: article.title,
		headerRight: (
			<HeaderButtons HeaderButtonComponent={HeaderIcon}>
				<Item
					title="take photo"
					iconName={marked ? "star" : "star-border"}
					onPress={() =>
						dispatch && dispatch(toggleMarked(article.id, !marked))
					}
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
	imgWrap: {
		marginTop: 5,
	},
	img: {
		width: "100%",
		height: 200,
	},
	textWrap: {
		marginTop: 5,
		marginBottom: 5,
		padding: 5,
	},
	text: {
		fontSize: 15,
		lineHeight: 20,
	},
	date: {
		marginLeft: 10,
		marginBottom: 10,
		fontWeight: "bold",
	},
});
