import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import products from "../data/products.json";
import Search from "../components/Search";
import ProductItem from "../components/ProductItem";

const ItemListCategories = ({ category, handleProductDetailId }) => {
  const [productsFilteredByCategory, setProductsFilteredByCategory] = useState(
    []
  );

  useEffect(() => {
    setProductsFilteredByCategory(
      products.filter((product) => product.category === category)
    );
  }, [category]);

  const onSearch = (input) => {
    if (input) {
      setProductsFilteredByCategory(
        productsFilteredByCategory.filter((product) =>
          product.title.includes(input)
        )
      );
    } else {
      setProductsFilteredByCategory(
        products.filter((product) => product.category === category)
      );
    }
  };

  return (
    <>
      <Header title={"Productos"} />
      <Search onSearch={onSearch} />
      <FlatList
        style={styles.list}
        data={productsFilteredByCategory}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductItem
            product={item}
            handleProductDetailId={handleProductDetailId}
          />
        )}
      />
    </>
  );
};

export default ItemListCategories;

const styles = StyleSheet.create({
  list: {
    marginHorizontal: 16,
  },
});
