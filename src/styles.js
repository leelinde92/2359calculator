import { StyleSheet, Platform, StatusBar } from "react-native";

const styles = StyleSheet.create({
  buttons: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  arithmeticFunctions: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    flex: 1,
    backgroundColor: "#DDDDDD",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    margin: 8,
  },
  buttonText: {
    fontSize: 32,
    color: "#000000",
  },
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  display: {
    flex: 1,
    overflow: "hidden",
    position: "relative",
  },
  displayContainer: {
    flex: 1,
    padding: 8,
  },
  expression: {
    alignItems: "flex-end",
  },
  expressionText: {
    fontSize: 40,
    color: "#AAAAAA",
  },
  entry: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  entryText: {
    fontSize: 72,
  },
  row: {
    flex: 1,
    flexDirection: "row",
  },
  numpad: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
  },
});

export default styles;
