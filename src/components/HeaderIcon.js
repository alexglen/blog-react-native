import React from "react";
import { Platform } from "react-native";
import { HeaderButton } from "react-navigation-header-buttons";
import { MaterialIcons } from "@expo/vector-icons";
import { THEME } from "../../theme";

export const HeaderIcon = (props) => (
	<HeaderButton
		{...props}
		iconSize={24}
		color={Platform.OS === "android" ? "white" : THEME.MAIN_COLOR}
		IconComponent={MaterialIcons}
	/>
);
