import React from "react";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import HomeScreen from "./src/screens/HomeScreen";
const queryClient = new QueryClient();
const app = () => {
  return <QueryClientProvider client={queryClient}>
    <HomeScreen></HomeScreen>
  </QueryClientProvider>
};

export default app;
