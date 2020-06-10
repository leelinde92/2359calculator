import React, { useState } from "react";
import { Animated, Easing, Platform, View } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Button from "./src/components/Button";
import Screen from "./src/components/Screen";
import calculatorReducer from "./src/providers/redux/reducer";

import styles from "./src/styles";

const store = createStore(calculatorReducer);

export default function App() {
  const useNativeDriver = Platform.OS === "android";
  const minScale = 0.01;
  const maxOpacity = 0.12;
  const [scale] = useState(new Animated.Value(minScale));
  const [opacity] = useState(new Animated.Value(maxOpacity));

  const onRipple = () =>
    Animated.timing(scale, {
      toValue: 1.4,
      duration: 225,
      easing: Easing.bezier(0.0, 0.0, 0.2, 1),
      useNativeDriver,
    }).start(() => {
      Animated.timing(opacity, {
        toValue: 0,
        useNativeDriver,
      }).start(() => {
        opacity.setValue(maxOpacity);
        scale.setValue(minScale);
      });
    });

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Screen scale={scale} opacity={opacity} />
        <View style={styles.numpad}>
          <View style={styles.buttons}>
            <View style={styles.row}>
              <Button value={7} />
              <Button value={8} />
              <Button value={9} />
            </View>
            <View style={styles.row}>
              <Button value={4} />
              <Button value={5} />
              <Button value={6} />
            </View>
            <View style={styles.row}>
              <Button value={1} />
              <Button value={2} />
              <Button value={3} />
            </View>
            <View style={styles.row}>
              <Button onPress={onRipple} value="C" />
              <Button value={0} />
              <Button value="." />
            </View>
          </View>
          <View style={styles.arithmeticFunctions}>
            <View style={styles.row}>
              <Button value="/" />
            </View>
            <View style={styles.row}>
              <Button value="*" />
            </View>
            <View style={styles.row}>
              <Button value="+" />
            </View>
            <View style={styles.row}>
              <Button value="-" />
            </View>
            <View style={styles.row}>
              <Button value="=" />
            </View>
          </View>
        </View>
      </View>
    </Provider>
  );
}
