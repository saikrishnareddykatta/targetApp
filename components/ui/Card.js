import { View, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
  card: {
    // flex: 1, // the attched element takes up space as much as needed
    justifyContent: "center", // justifyContent always correlate with main axis.
    // in react native, flex is by default, hence the default flexDirection is column which will act as main axis
    alignItems: "center", // alignItems always correlate with cross axis, here the cross axis is row
    marginTop: 36, // adding 36 pixels as margin top
    marginHorizontal: 16, // adding 16 pixels margin horizontally
    padding: 16, //adding 16 pixels of padding
    backgroundColor: Colors.primary800,
    borderRadius: 8, // adding 8 pixels as broder radius
    elevation: 4, // it is not a css property but an react native property used to add shadow for an element
    // higher the level for elevation higher the shadow - it is an android only property
    shadowColor: "black", // adding shadow for IOS mobile apps
    shadowOffset: { width: 0, height: 2 }, // adding shadow for IOS mobile apps
    shadowRadius: 6, // adding shadow for IOS mobile apps
    shadowOpacity: 0.25, // adding shadow for IOS mobile apps
  },
});
