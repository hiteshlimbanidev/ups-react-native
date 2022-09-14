import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CustomersScreens from "../screens/CustomersScreens";
import OrdersScreen from "../screens/OrdersScreen";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

export type TabStackParamList = {
  Customers: undefined;
  Orders: undefined;
};

const Tab = createBottomTabNavigator<TabStackParamList>();

const TabNavigator = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);
  return (
    <Tab.Navigator>
      <Tab.Screen name="Customers" component={CustomersScreens} />
      <Tab.Screen name="Orders" component={OrdersScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
