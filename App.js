import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import SearchIcon from "./assets/search.svg";

export default function App() {
	return (
		<View style={styles.container}>
			<Text>Open up App.js to start working on your app!</Text>
			<Image
				source={SearchIcon}
				style={{
					width: 60,
					height: 60,
					backgroundColor: "gray",
				}}
			/>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	icon: {
		width: 40,
		height: 40,
		backgroundColor: "red",
	},
});
