import React from "react";
import { Animated, View, Text } from "react-native";
import { useSelector } from "react-redux";
import styles from "../styles";

const Screen = ({ scale, opacity }) => {
  const { expression, entry } = useSelector((state) => ({
    expression: state.expression,
    entry: state.entry,
  }));

  const style = {
    position: "absolute",
    top: 0,
    left: 0,
    width: 800,
    height: 800,
    borderRadius: 400,
    transform: [{ scale }],
    opacity,
    backgroundColor: "black",
  };

  return (
    <View style={styles.display}>
      <Animated.View style={style} />
      <View style={styles.displayContainer}>
        <View style={styles.expression}>
          <Text style={styles.expressionText}>{expression}</Text>
        </View>
        <View style={styles.entry}>
          <Text style={styles.entryText}>{entry}</Text>
        </View>
      </View>
    </View>
  );
};

export default Screen;
