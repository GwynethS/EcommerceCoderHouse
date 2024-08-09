import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/Header";

const ItemDetail = ({id}) => {
  return (
    <>
      <Header title={"Detalle"} />
      <View>
        <Text>ItemDetail</Text>
      </View>
    </>
  );
};

export default ItemDetail;

const styles = StyleSheet.create({});
