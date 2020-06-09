import React, { memo } from "react";
import {
  TouchableNativeFeedback,
  Text,
  Platform,
  TouchableHighlight,
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
        <Text>{value}</Text>
      </TouchableNativeFeedback>
    );
  }

  return (
    <TouchableHighlight onPress={() => onPress(value)}>
      <Text>{value}</Text>
    </TouchableHighlight>
  );
});

Button.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default memo(Button);
