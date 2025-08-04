import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { getUser, User } from './lib/api';

export default function ProfileScreen() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    (async () => {
      const result = await getUser(2); // id = 2 유저 가져옴
      setUser(result);
    })();
  }, []);

  if (!user) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator />
        <Text>Loading profile...</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>👤 Profile Screen</Text>
      <Text>ID: {user.id}</Text>
      <Text>Name: {user.name}</Text>
    </View>
  );
}

