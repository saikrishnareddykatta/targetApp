import { useState } from "react";
import { TextInput, View, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
  const [enteredNumber, setEnteredNumber] = useState("");

  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }

  function resetInputHander() {
    setEnteredNumber("");
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      // show alert
      Alert.alert(
        "Invalid Number",
        "Number has to be a number between 1 and 99",
        [{ text: "Okay", style: "destructive", onPress: resetInputHander }]
      );
      return;
    }
    console.log("***Valid Number!!!");
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={numberInputHandler}
        value={enteredNumber}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInputHander}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}
export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    // flex: 1, // the attched element takes up space as much as needed
    justifyContent: "center", // justifyContent always correlate with main axis.
    // in react native, flex is by default, hence the default flexDirection is column which will act as main axis
    alignItems: "center", // alignItems always correlate with cross axis, here the cross axis is row
    marginTop: 100, // adding 100 pixels as margin top
    marginHorizontal: 16, // adding 16 pixels margin horizontally
    padding: 16, //adding 16 pixels of padding
    backgroundColor: "#3b021f",
    borderRadius: 8, // adding 8 pixels as broder radius
    elevation: 4, // it is not a css property but an react native property used to add shadow for an element
    // higher the level for elevation higher the shadow - it is an android only property
    shadowColor: "black", // adding shadow for IOS mobile apps
    shadowOffset: { width: 0, height: 2 }, // adding shadow for IOS mobile apps
    shadowRadius: 6, // adding shadow for IOS mobile apps
    shadowOpacity: 0.25, // adding shadow for IOS mobile apps
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
