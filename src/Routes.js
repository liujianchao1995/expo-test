import React from "react";
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialIcons } from "@expo/vector-icons";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

/**
 * App Screens
 **/
import Home from "./screens/Home";
import Explore from "./screens/Explore";
import Subscribed from "./screens/Subscribed";
import Mine from "./screens/Mine";

export default Routes = () => {
  const Tab = createMaterialBottomTabNavigator();

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          activeColor="red"
          labeled={true}
          shifting={false}
          barStyle={{ backgroundColor: "#fff" }}
        >
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarLabel: " 首页",
              tabBarIcon: ({ color }) => (
                <MaterialIcons name="home" color={color} size={26} />
              ),
            }}
          ></Tab.Screen>
          <Tab.Screen
            name="Explore"
            component={Explore}
            options={{
              tabBarLabel: " 探索",
              tabBarIcon: ({ color }) => (
                <MaterialIcons name="explore" color={color} size={26} />
              ),
            }}
          ></Tab.Screen>
          <Tab.Screen
            name="Subscribed"
            component={Subscribed}
            options={{
              tabBarLabel: " 订阅",
              tabBarIcon: ({ color }) => (
                <MaterialIcons name="subscriptions" color={color} size={26} />
              ),
            }}
          ></Tab.Screen>
          <Tab.Screen
            name="Mine"
            component={Mine}
            options={{
              tabBarLabel: " 我的",
              tabBarIcon: ({ color }) => (
                <MaterialIcons name="person" color={color} size={26} />
              ),
            }}
          ></Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
