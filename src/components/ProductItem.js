import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { colors } from "../global/colors";

const ProductItem = ({ product, handleProductDetailId }) => {
  const { width, height } = useWindowDimensions();

  return (
    <Pressable
      style={styles.container}
      onPress={() => handleProductDetailId(product.id)}
    >
      <Text
        style={[styles.title, width < 300 ? styles.titleMin : styles.titleMax]}
      >
        {product.title}
      </Text>
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    width: "100%",
    marginBottom: 16,
    gap: 16,
    borderRadius: 8,
    backgroundColor: colors.amaranthPink,
  },
  title: {
    color: "#fff",
    fontWeight: 600,
    width: "70%",
  },
  titleMin: {
    fontSize: 14,
  },
  titleMax: {
    fontSize: 16,
  },
  image: {
    minWidth: 80,
    minHeight: 80,
    maxWidth: 150,
    maxHeight: 150,
    width: "20vw",
    height: "20vw",
    borderRadius: 8,
  },
});
