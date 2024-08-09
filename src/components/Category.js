import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import ShadowWrapper from "./ShadowWrapper";
import { colors } from "../global/colors";

const Category = ({ item, handleCategorySelected }) => {
  return (
    <Pressable onPress={() => handleCategorySelected(item)}>
      <ShadowWrapper style={styles.container}>
        <Text style={styles.text}>{item}</Text>
      </ShadowWrapper>
    </Pressable>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    width: "90%",
    marginHorizontal: "5%",
    marginVertical: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: colors.amaranthPink,
  },
  text: {
    fontSize: 16,
  },
});
