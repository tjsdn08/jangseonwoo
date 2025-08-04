import React from "react";
import { NavigationContainer } from "@react-navigation/native"; // 네비게이션 전체 감싸주는 껍데기
import { createNativeStackNavigator } from "@react-navigation/native-stack"; // 화면 이동 기능
import { Text, View, Button } from "react-native"; // 기본 UI 컴포넌트
import MainTab from "./navigation/Maintab";

// [1] 화면 이름이랑 받을 값 정의 (타입스크립트용)
type RootStackParamList = {
  Home: undefined; // 아무 값도 안 받음
  Detail: { id: string }; // id라는 글자(String)를 ㅌ받아야 함
};

// [2] Stack Navigator 만들기
const Stack = createNativeStackNavigator<RootStackParamList>();

// [3] 홈 화면
const HomeScreen = ({ navigation }: any) => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>Home Screen</Text>
    {/* 버튼 누르면 'Detail' 화면으로 이동하면서 id 값 전달 */}
    <Button
      title="Go to Detail"
      onPress={() => navigation.navigate("Detail", { id: "123" })}
    />
  </View>
);

// [4] 디테일 화면
const DetailScreen = ({ route }: { route: { params: { id: string } } }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Detail Screen</Text>
      <Text>ID: {route.params.id}</Text>
    </View>
  );
};

// [5] 전체 앱 구성
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={MainTab}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
