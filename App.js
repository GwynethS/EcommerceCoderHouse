import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./src/screens/Home";
import ItemListCategories from "./src/screens/ItemListCategories";
import ItemDetail from "./src/screens/ItemDetail";
import { useState } from "react";

export default function App() {
  const [categorySelected, setCategorySelected] = useState("");
  const [productDetailId, setProductDetailId] = useState(null);

  const handleCategorySelected = (category) => {
    setCategorySelected(category);
  };

  const handleProductDetailId = (id) => {
    setProductDetailId(id);
  };

  return (
    <View style={styles.container}>
      {categorySelected ? (
        productDetailId !== null ? (
          <ItemDetail id={productDetailId} />
        ) : (
          <ItemListCategories
            category={categorySelected}
            handleProductDetailId={handleProductDetailId}
          />
        )
      ) : (
        <Home handleCategorySelected={handleCategorySelected} />
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
