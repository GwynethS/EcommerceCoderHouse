import { StyleSheet, Text, View, StatusBar, Platform } from "react-native";
import React from "react";
import { colors } from "../global/colors";

const Header = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.persianPink,
    width: "100%",
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 22,
    fontWeight: 500
  },
});
