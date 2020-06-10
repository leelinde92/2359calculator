import React, { memo } from "react";
import {
  TouchableNativeFeedback,
  Text,
  Platform,
  TouchableHighlight,
  View,
} from "react-native";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { calculatorButtonPressed } from "../providers/redux/actions";
import styles from "../styles";

const Button = memo(({ onPress: onPressComponent, value }) => {
  const dispatch = useDispatch();
  const onPress = () => {
    if (onPressComponent) {
      onPressComponent();
    }
    dispatch(calculatorButtonPressed(value));
  };

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

Button.defaultProps = {
  onPress: null,
};

Button.propTypes = {
  onPress: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Button;
