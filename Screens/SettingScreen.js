import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons  } from "@expo/vector-icons";
import {
  Button,
  Switch,
  useTheme,
  TouchableRipple,
  Text,
} from "react-native-paper";
import { ThemeContext } from "../App";
import { DarkTheme, LightTheme } from "../Componentes/Theme";

export default Settings = (props) => {
  const { colors } = useTheme();
  const { setTheme, theme } = React.useContext(ThemeContext);

  useEffect(() => {
    if(theme === LightTheme){
      setIsSwitchOn(false)
    }
    else if (theme === DarkTheme){
      setIsSwitchOn(true)
    }
    }, [])

  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => {
    setIsSwitchOn(!isSwitchOn);
    setTheme(theme === DarkTheme ? LightTheme : DarkTheme); 
  };
  return (
    <TouchableRipple rippleColor="rgba(0, 0, 0, .32)">
      <View style={styles.container}>
      <MaterialCommunityIcons name="theme-light-dark" size={24} style={{ color: colors.onSurface }} />
        <Text variant="titleMedium" style={{ color: colors.onSurface }}>Modo oscuro</Text>
        <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
      </View>
    </TouchableRipple>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop:10,
    marginHorizontal: 20,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
});
