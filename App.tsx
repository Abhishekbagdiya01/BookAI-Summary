import React from "react";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import HomeScreen from "./src/screens/HomeScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BookScreen from "./src/screens/BookScreen";
import BookSummeryScreen from "./src/screens/BookSummeryScreen";
const queryClient = new QueryClient();
const Stack = createNativeStackNavigator();
const app = () => {
  return <QueryClientProvider client={queryClient}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Book" component={BookScreen} />
        <Stack.Screen name="Summery" component={BookSummeryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  </QueryClientProvider>
};

export default app;
