import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { useMutation } from '@tanstack/react-query';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { login } from '../api/auth';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const mutation = useMutation({
    mutationFn: () => login(email, password),
    onSuccess: async (data) => {
      console.log('✅ 로그인 성공 데이터:', data);

      // 🔐 토큰 저장
      await AsyncStorage.setItem('authToken', data.token);
      await AsyncStorage.setItem('userName', data.user.name);

      Alert.alert('✅ 로그인 성공', `${data.user.name}님 환영합니다!`);
    },
    onError: (error: any) => {
      Alert.alert('❌ 로그인 실패', error.message || '이메일 또는 비밀번호가 틀렸습니다.');
    },
  });

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('⚠️ 입력 오류', '이메일과 비밀번호를 입력해주세요.');
      return;
    }
    mutation.mutate();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>로그인</Text>
      <TextInput
        style={styles.input}
        placeholder="이메일"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TextInput
        style={styles.input}
        placeholder="비밀번호"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="로그인" onPress={handleLogin} disabled={mutation.isPending} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, marginBottom: 20, textAlign: 'center' },
  input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 },
});
