import React from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import styles from "../styles";

const Screen = () => {
  const { expression, entry } = useSelector((state) => ({
    expression: state.expression,
    entry: state.entry,
  }));

  return (
    <View style={styles.display}>
      <View style={styles.expression}>
        <Text style={styles.expressionText}>{expression}</Text>
      </View>
      <View style={styles.entry}>
        <Text style={styles.entryText}>{entry}</Text>
      </View>
    </View>
  );
};

export default Screen;
