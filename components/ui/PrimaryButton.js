import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function PrimaryButton({ children, onPress }) {
  function presshandler() {
    onPress();
  }
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={presshandler}
        android_ripple={{ color: Colors.primary600 }}
        style={(pressData) =>
          pressData.pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden", // it clips the css elements when it overflows from the element
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
