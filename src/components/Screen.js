import React from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import styles from "../styles";

const Screen = () => {
  const { expression, entry } = useSelector((state) => ({
    expression: state.calculatorReducer.expression,
    entry: state.calculatorReducer.entry,
  }));

  return (
    <View style={styles.display}>
      <View style={styles.expression}>
        <Text>{expression}</Text>
      </View>
      <View style={styles.entry}>
        <Text>{entry}</Text>
      </View>
    </View>
  );
};

export default Screen;
