import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { HeaderIcon } from "../components/HeaderIcon";

export const AboutAppScreen = () => {
	return (
		<View style={styles.block}>
			<Text>Приложение - блог. Версия 1.0.0</Text>
		</View>
	);
};

AboutAppScreen.navigationOptions = ({ navigation }) => ({
	headerTitle: "О приложении",
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
	block: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
