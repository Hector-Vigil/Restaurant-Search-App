import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import SearchScreen from "./src/screens/SearchScreen";
import DetailsScreen from "./src/screens/DetailsScreen";
import ResultsShowScreen from "./src/screens/ResultsShowScreen";

const Stack = new createStackNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Search" component={SearchScreen} options={{title: 'Business Search'}}/>
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="ResultShow" component={ResultsShowScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}