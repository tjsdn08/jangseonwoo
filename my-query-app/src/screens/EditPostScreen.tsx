import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updatePost } from '../api/posts';

export default function EditPostScreen({ route }: any) {
  const { id, title: initialTitle } = route.params;
  const [title, setTitle] = useState(initialTitle);
  const navigation = useNavigation();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: () => updatePost({ id, title }),
    onSuccess: () => {
      Alert.alert('수정 완료');
      queryClient.invalidateQueries({ queryKey: ['posts'] });
      navigation.goBack();
    },
  });

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        value={title}
        onChangeText={setTitle}
        placeholder="제목 수정"
        style={{ borderWidth: 1, padding: 10 }}
      />
      <Button title="수정 완료" onPress={() => mutation.mutate()} />
    </View>
  );
}
