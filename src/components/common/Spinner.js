import React from "react";
import { View, ActivityIndicator } from "react-native";

const Spinner = ({ size, color }) => {
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator size={size || "large"} color={color} />
    </View>
  );
};

const styles = {
  spinnerStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
};

// size || large...takes in the prop if its value is provided or by default it will be displayed as large.

export { Spinner };
