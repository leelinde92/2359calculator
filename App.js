import React from "react";
import { View } from "react-native";
import { Provider } from "react-redux";
import Button from "./src/components/Button";
import Screen from "./src/components/Screen";

import styles from "./src/styles";

export default function App() {
  return (
    <Provider>
      <View style={styles.container}>
        <Screen />
        <View>
          <View>
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
              <Button value="C" />
              <Button value={0} />
              <Button value="." />
            </View>
          </View>
          <View>
            <Button value="/" />
            <Button value="*" />
            <Button value="+" />
            <Button value="-" />
            <Button value="=" />
          </View>
        </View>
      </View>
    </Provider>
  );
}
