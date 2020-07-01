import React, { useState } from "react";
import { View, Text, StyleSheet, Button, Keyboard } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { HeaderIcon } from "../components/HeaderIcon";
import { THEME } from "../../theme";
import {
	ScrollView,
	TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { TextInput } from "react-native-paper";
import { useDispatch } from "react-redux";
import { addArticle } from "../redux/actions";
import { PickerPhoto } from "../components/PickerPhoto";

export const CreateArticleScreen = ({ navigation }) => {
	const [title, setTitle] = useState("");
	const [text, setText] = useState("");
	const [photo, savePhoto] = useState(null);

	const dispatch = useDispatch();

	const saveArticle = () => {
		dispatch(
			addArticle({
				id: Math.random().toString(),
				img: photo,
				text,
				date: new Date().toJSON(),
				booked: false,
				title,
			})
		);
		setText("");
		setTitle("");
		savePhoto(null);
		navigation.navigate("Main");
	};

	return (
		<ScrollView>
			<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
				<View>
					<TextInput
						placeholder="Введите название статьи"
						value={title}
						onChangeText={setTitle}
					/>
				</View>
				<View>
					<TextInput
						multiline
						placeholder="Ваш текст"
						value={text}
						onChangeText={setText}
					/>
				</View>
				<View style={styles.picker}>
					<PickerPhoto savePhoto={savePhoto} />
				</View>
				<Button
					title="Сохранить"
					onPress={saveArticle}
					disabled={!text.trim() || !title.trim() || !photo}
				/>
			</TouchableWithoutFeedback>
		</ScrollView>
	);
};

CreateArticleScreen.navigationOptions = ({ navigation }) => ({
	headerTitle: "Создать новую статью",
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
	title: {
		fontSize: 20,
		textAlign: "center",
	},
	picker: {
		marginBottom: 10,
		marginTop: 10,
	},
});
