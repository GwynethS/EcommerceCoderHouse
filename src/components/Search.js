import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { colors } from "../global/colors";

const Search = ({ onSearch }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (value) => {
    setInput(value);
    if (!value) onSearch("");
  };

  const handleRemoveInput = () => {
    setInput("");
    onSearch("");
    setError("");
  };

  const search = (input) => {
    const expr = /^[A-Za-z]+$/;
    if (!expr.test(input)) {
      setError("Caracteres inválidos");
    } else {
      setError("");
      onSearch(input);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <TextInput
          style={styles.input}
          placeholder="Buscar producto"
          value={input}
          onChangeText={handleInputChange}
        />
        <Pressable style={styles.btn} onPress={() => search(input)}>
          <FontAwesome name="search" size={16} color="black" />
        </Pressable>
        <Pressable style={styles.btn} onPress={handleRemoveInput}>
          <FontAwesome name="close" size={16} color="black" />
        </Pressable>
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
  containerInput: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
  },
  input: {
    backgroundColor: "#ebedeb",
    borderRadius: 8,
    padding: 8,
    flex: 4,
  },
  btn: {
    alignItems: "center",
    borderRadius: 8,
    paddingVertical: 8,
    flex: 1,
    backgroundColor: colors.skyMagenta,
    textAlign: "center",
  },
  error: {
    color: "red",
    fontWeight: 700,
    marginTop: 8,
  },
});
