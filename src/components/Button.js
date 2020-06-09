import React, { memo } from 'react';
import { TouchableNativeFeedback, Text, Platform } from 'react-native';
import PropTypes from 'prop-types';
import TouchableHighlight
  from 'react-native-web/dist/exports/TouchableHighlight';

const Button = memo(({ onPress, value }) => {
  if (Platform.OS === 'android') {
    return (
      <TouchableNativeFeedback onPress={() => onPress(value)}>
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
