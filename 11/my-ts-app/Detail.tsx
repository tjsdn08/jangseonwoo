import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from './navigation/RootStack';
import { getUser, User } from './lib/api';

type DetailScreenProps = {
  route: RouteProp<RootStackParamList, 'Detail'>;
};

export default function DetailScreen({ route }: DetailScreenProps) {
  const { id } = route.params;
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    (async () => {
      const data = await getUser(Number(id));
      setUser(data);
    })();
  }, [id]);

  if (!user) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator />
        <Text>Loading user...</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>🧾 Detail Screen</Text>
      <Text>ID: {user.id}</Text>
      <Text>Name: {user.name}</Text>
    </View>
  );
}

