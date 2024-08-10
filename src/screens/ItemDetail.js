import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Header from "../components/Header";
import products from "../data/products.json";
import { colors } from "../global/colors";

const ItemDetail = ({ id }) => {
  return (
    <>
      <Header title={"Detalle"} />
      <View style={styles.containerDetail}>
        <Image
          style={styles.image}
          source={{ uri: products[id].thumbnail }}
        ></Image>
        <View style={styles.containerText}>
          <Text style={styles.productTitle}>{products[id].title}</Text>
          <Text style={styles.productDescription}>{products[id].description}</Text>
          <Text style={styles.productPrice}>S/. {products[id].price}</Text>
        </View>
        <Pressable style={styles.btn}>
          <Text style={styles.btnText}>Comprar</Text>
        </Pressable>
      </View>
    </>
  );
};

export default ItemDetail;

const styles = StyleSheet.create({
  containerDetail: {
    margin: "5%",
  },
  image: {
    width: "100%",
    height: 250,
    resizeMode: "cover",
    borderRadius: 8
  },
  containerText:{
    marginTop: 24,
    gap: 10
  },
  productTitle:{
    fontSize: 20,
    fontWeight: '700'
  },
  productDescription:{
    textAlign: 'justify'
  },
  productPrice:{
    fontWeight: '700'
  },
  btn:{
    marginTop: 24,
    backgroundColor: colors.persianPink,
    borderRadius: 8,
    paddingVertical: 16
  },
  btnText:{
    textAlign: 'center',
    fontWeight: '700'
  }
});
