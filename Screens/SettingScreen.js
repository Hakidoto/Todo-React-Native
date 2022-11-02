import React from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
  
export default Settings = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ color: "#006600", fontSize: 40 }}>Olameb0</Text>
      <Ionicons name="ios-settings-outline" size={80} color="#006600" />
    </View>
  );
};
  
