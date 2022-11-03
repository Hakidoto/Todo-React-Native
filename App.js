import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { IconButton} from "react-native-paper";
import React, { useState } from "react";
import {
  Provider as PaperProvider,
} from "react-native-paper";

import HomeScreen from "./Screens/HomeScreen";
import SettingScreen from "./Screens/SettingScreen";
import { DarkTheme, LightTheme } from "./Componentes/Theme";

const Stack = createNativeStackNavigator();
export const ThemeContext = React.createContext();

export default function App() {
  const [theme, setTheme] = useState(DarkTheme);

  return (
    <PaperProvider theme={theme}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <NavigationContainer theme={theme}>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Todo List"
              component={HomeScreen}
              options={({ navigation, route }) => ({
                headerStyle: {
                  backgroundColor: theme.colors.surfaceVariant,  
                },
                headerTintColor: theme.colors.onSurface, 
                headerRight: () => (
                  <IconButton
                    icon="cog-outline"
                    mode="contained-tonal"
                    onPress={() => navigation.navigate("Settings")}
                  />
                ),
              })}
            />
            <Stack.Screen
              name="Settings"
              component={SettingScreen}
              options={() => ({
                headerStyle: {
                  backgroundColor: theme.colors.surfaceVariant, 
                },
                headerTintColor: theme.colors.onSurface, 
              })}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeContext.Provider>
    </PaperProvider>
  );
}
