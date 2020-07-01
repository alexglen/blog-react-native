import React, { useState } from "react";
import { View, Button, Image, StyleSheet, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

export const PickerPhoto = ({ savePhoto }) => {
	const [img, setImg] = useState(null);
	async function askPermission() {
		const { status } = await Permissions.askAsync(
			Permissions.CAMERA,
			Permissions.CAMERA_ROLL
		);
		if (status === "granted") {
			return true;
		} else {
			Alert.alert("Произошла ошибка", "разрешите доступ к камере");
			return false;
		}
	}

	const takePhoto = async () => {
		const isPermission = await askPermission();
		if (!isPermission) {
			return;
		} else {
			const image = await ImagePicker.launchCameraAsync({
				quality: 1,
				allowsEditing: false,
				aspect: [16, 9],
			});
			setImg(image.uri);
			savePhoto(image.uri);
		}
	};

	return (
		<View style={styles.picker}>
			<Button title="Сделать фото" onPress={takePhoto} color="green" />
			{img && (
				<Image source={{ uri: img }} style={{ width: "100%", height: 200 }} />
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	picker: {
		padding: 15,
	},
});
