import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { MainScreen } from "../screens/MainScreen";
import { ArticleScreen } from "../screens/ArticleScreen";
import { Platform } from "react-native";
import { THEME } from "../../theme";
import { MarkScreen } from "../screens/MarkScreen";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import { CreateArticleScreen } from "../screens/CreateArticleScreen";
import { AboutAppScreen } from "../screens/AboutAppScreen";

const navigationOptionsDefault = {
	defaultNavigationOptions: {
		headerStyle: {
			backgroundColor: Platform.OS === "android" ? THEME.MAIN_COLOR : "white",
		},
		headerTintColor: Platform.OS === "android" ? "white" : THEME.MAIN_COLOR,
	},
};

const PostNavigator = createStackNavigator(
	{
		Main: MainScreen,
		Article: ArticleScreen,
	},
	navigationOptionsDefault
);

const MarkNavigator = createStackNavigator(
	{
		Mark: MarkScreen,
		Article: ArticleScreen,
	},
	navigationOptionsDefault
);

const bottomNavigatorOptions = {
	Article: {
		screen: PostNavigator,
		navigationOptions: {
			tabBarIcon: <MaterialIcons name="markunread" size={24} color="#fff" />,
			tabBarLabel: "Все статьи",
		},
	},
	Marked: {
		screen: MarkNavigator,
		navigationOptions: {
			tabBarIcon: <MaterialIcons name="bookmark" size={24} color="#fff" />,
			tabBarLabel: "Избранные статьи",
		},
	},
};

const BottomNavigator =
	Platform.OS === "android"
		? createMaterialBottomTabNavigator(bottomNavigatorOptions, {
				activeColor: "#fff",
				barStyle: {
					backgroundColor: THEME.MAIN_COLOR,
				},
				shifting: true,
		  })
		: createBottomTabNavigator(bottomNavigatorOptions);

const CreateNavigator = createStackNavigator(
	{
		Create: CreateArticleScreen,
	},
	navigationOptionsDefault
);

const AboutNavigator = createStackNavigator(
	{
		About: AboutAppScreen,
	},
	navigationOptionsDefault
);

const KeyNavigator = createDrawerNavigator(
	{
		Posts: {
			screen: BottomNavigator,
			navigationOptions: {
				drawerLabel: "Главная",
			},
		},
		Create: {
			screen: CreateNavigator,
			navigationOptions: {
				drawerLabel: "Новая статья",
			},
		},
		About: {
			screen: AboutNavigator,
			navigationOptions: {
				drawerLabel: "О приложении",
			},
		},
	},
	{
		contentOptions: {
			activeTintColor: THEME.MAIN_COLOR,
		},
	}
);

export const AppNavigation = createAppContainer(KeyNavigator);
