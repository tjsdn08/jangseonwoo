import { createNativeStackNavigator } from '@react-navigation/native-stack';

// ✅ 여기에서 export를 명시적으로 해줘야 해!
export type RootStackParamList = {
  Home: undefined;
  Detail: { id: string };
  Profile: undefined;
};

// ✅ Stack도 내보낼 거면 아래처럼 export default로
const Stack = createNativeStackNavigator<RootStackParamList>();
export default Stack;


