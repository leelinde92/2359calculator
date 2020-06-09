import React, { memo } from "react";
import {
  TouchableNativeFeedback,
  Text,
  Platform,
  TouchableHighlight,
  View,
} from "react-native";
import PropTypes from "prop-types";
import styles from "../styles";

const Button = memo(({ value }) => {
  const onPress = () => {};

  if (Platform.OS === "android") {
    return (
      <TouchableNativeFeedback
        style={styles.button}
        onPress={() => onPress(value)}
      >
        <View style={styles.button}>
          <Text style={styles.buttonText}>{value}</Text>
        </View>
      </TouchableNativeFeedback>
    );
  }

  return (
    <TouchableHighlight style={styles.button} onPress={() => onPress(value)}>
      <Text style={styles.buttonText}>{value}</Text>
    </TouchableHighlight>
  );
});

Button.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default memo(Button);
