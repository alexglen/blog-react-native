import React, { useEffect, Fragment } from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { HeaderIcon } from "../components/HeaderIcon";
import { ListArticle } from "../components/ListArticles";
import { useSelector, useDispatch } from "react-redux";
import { fetchArticles } from "../redux/actions";
import { MainArticle } from "../components/MainArticle";
import {
	ScrollView,
	ActivityIndicator,
	View,
	Text,
	Button,
	StyleSheet,
} from "react-native";
import { AppError } from "../components/AppError";
import { THEME } from "../../theme";
import AsyncStorage from "@react-native-community/async-storage";

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

	const changeState = async () => {
		const jsonValue = await JSON.stringify(articles ?? []);
		return await AsyncStorage.setItem("articles", jsonValue);
	};

	useEffect(() => {
		changeState();
	}, [articles]);

	const { loader } = useSelector((state) => state.loader);

	if (loader) {
		return <ActivityIndicator color={THEME.MAIN_COLOR} />;
	}

	return (
		<ScrollView>
			{articles?.length ? (
				<Fragment>
					<MainArticle article={articles[0]} goToArticle={goToArticle} />
					<ListArticle data={articles.slice(1)} goToArticle={goToArticle} />
				</Fragment>
			) : (
				<View style={styles.textWrap}>
					<View>
						<Text style={styles.text}>Вы не добавили ещё ни одной статьи</Text>
					</View>
					<View style={styles.button}>
						<Button
							title="Новая статья"
							onPress={() => navigation.navigate("Create")}
							color={THEME.THIRD_COLOR}
						/>
					</View>
				</View>
			)}
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

const styles = StyleSheet.create({
	textWrap: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginRight: 10,
		marginLeft: 10,
		marginTop: 100,
	},
	text: {
		fontSize: 18,
		textAlign: "center",
	},
	button: {
		marginTop: 10,
	},
});
