import { Text, StyleSheet, Platform } from "react-native";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}
export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    color: "white",
    textAlign: "center",
    // borderWidth: Platform.OS === "android" ? 2 : 0,
    // borderWidth: Platform.select({ ios: 0, android: 2 }), // different way of writing a conditional statement
    borderWidth: 0,
    borderColor: "white",
    padding: 12,
    maxWidth: "80%", // with maxWidth it is upto 80%, it can be less than 80% as well
    width: 300,
  },
});
