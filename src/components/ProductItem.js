import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { colors } from "../global/colors";

const ProductItem = ({ product }) => {
  return (
    <Pressable style={styles.container}>
      <Text style={styles.title}>{product.title}</Text>
      <Image
        style={styles.image}
        resizeMode="cover"
        source={{ uri: product.thumbnail }}
      />
    </Pressable>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    width: '100%',
    marginBottom: 16,
    gap: 16,
    borderRadius: 8,
    backgroundColor: colors.amaranthPink
  },
  title: {
    color: '#fff',
    fontWeight: 600
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: 8
  },
});
