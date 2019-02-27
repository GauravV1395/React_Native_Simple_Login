// Import libraries for making a comment

import React from "react";
import { Text, View } from "react-native";

// Make a component

const Header = props => {
  // props is a JS object that specifies values that needs to be provided by the parent component to access the child component.
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  // react doesn't support CSS or Bootstrap. Own styles must nbe defined in the form of CSS Object. But a lot of styles map with CSS. And Camel case is used.
  viewStyle: {
    backgroundColor: "#F8F8F8",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    paddingTop: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.8,
    elevation: 5,
    position: "relative"
  },
  textStyle: {
    fontSize: 20
  }
};

// Make the component available tpo other parts of the app.

export { Header };
