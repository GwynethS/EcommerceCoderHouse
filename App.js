import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./src/screens/Home";
import ItemListCategories from "./src/screens/ItemListCategories";
import ItemDetail from "./src/screens/ItemDetail";
import { useState } from "react";

export default function App() {
  const [categorySelected, setCategorySelected] = useState("");
  
  const handleCategorySelected = (category) => {
    setCategorySelected(category);
  }

  return (
    <View style={styles.container}>
      {categorySelected ? (
        <ItemListCategories category={categorySelected} />
      ) : (
        <Home handleCategorySelected={handleCategorySelected}/>
      )}
      {/* <ItemDetail /> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
