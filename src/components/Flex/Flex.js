import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View } from "react-native";

const FlexComponent = props => {
  return (
    <View
      style={[
        styles.flex,
        props.row && styles.row,
        props.column && styles.column,
        props.center && styles.center,
        props.style && props.style
      ]}
    >
      {props.children}
    </View>
  );
};

FlexComponent.propTypes = {
  direction: PropTypes.string
};

const styles = StyleSheet.create({
  flex: {
    display: "flex",
    flex: 1
  },
  column: {
    flexDirection: "column"
  },
  row: {
    flexDirection: "row"
  },
  center: {
    alignItems: "center",
    justifyContent: "center"
  }
});

export default FlexComponent;
