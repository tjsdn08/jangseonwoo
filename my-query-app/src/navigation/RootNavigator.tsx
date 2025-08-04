// src/navigation/RootNavigator.tsx
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import PostListScreen from "../screens/PostListScreen";
import PostCreateScreen from "../screens/PostCreateScreen";
import PostDetailScreen from "../screens/PostDetailScreen";

export type RootStackParamList = {
  Tab: undefined; // ✅ Tab 추가
  PostDetail: { id: number };
};

type TabParamList = {
  PostList: undefined;
  PostCreate: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="PostList"
        component={PostListScreen}
        options={{ title: "게시글 목록" }}
      />
      <Tab.Screen
        name="PostCreate"
        component={PostCreateScreen}
        options={{ title: "글쓰기" }}
      />
    </Tab.Navigator>
  );
}

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Tab"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PostDetail"
          component={PostDetailScreen}
          options={{ title: "상세 보기" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
