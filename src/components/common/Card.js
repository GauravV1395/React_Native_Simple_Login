import React from "react";
import { View } from "react-native";

const Card = props => {
  return <View style={styles.containerStyle}>{props.children}</View>; // props.children is used to render all the components declared within this component.
};

const styles = {
  containerStyle: {
    borderWidth: 1, // put a border around the component of pixel 1.
    borderRadius: 2, // round the corners off.
    borderColor: "#ddd", // gives a color to the border
    borderBottomWidth: 0, // the bottom end of the card's width is set to 0.
    shadowColor: "#000", // adds a nice shadow background
    shadowOffset: { width: 0, height: 2 }, // no shadow at the sides but only at the bottom
    shadowOpacity: 0.1, // intensity of the shadow
    shadowRadius: 2, // shadow at the rounded off edges
    elevation: 1,
    marginLeft: 5, // same as Css.. place spacings between components.
    marginRight: 5, // ||
    marginTop: 10 // ||
  }
};

export { Card };
