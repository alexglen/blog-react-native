import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { THEME } from "../../theme";

export const AppError = () => {
	return (
		<View style={styles.wrapError}>
			<Text style={styles.titleError}>Упс...</Text>
			<View>
				<Text style={styles.textError}>Кажется что-то пошло не так...</Text>
			</View>
			<View>
				<MaterialIcons
					name="error-outline"
					size={30}
					color={THEME.DANGER_COLOR}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	wrapError: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	titleError: {
		fontSize: 22,
		color: THEME.DANGER_COLOR,
		textAlign: "center",
	},
	textError: {
		fontSize: 18,
		color: THEME.DANGER_COLOR,
	},
});
