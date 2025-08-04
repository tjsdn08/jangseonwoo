import React, { useState } from "react";
import { View, TextInput, Button, Alert, StyleSheet } from "react-native";
import { createPost } from "../api/posts"; // ✅ API 함수 불러오기

export default function PostCreateScreen() {
  const [content, setContent] = useState("");

  const handleSubmit = async () => {
    if (!content.trim()) {
      Alert.alert("⚠️ 입력 오류", "내용을 입력해주세요.");
      return;
    }

    try {
      const data = await createPost({ content });
      Alert.alert("✅ 작성 완료", "게시글이 등록되었습니다!");
      console.log("등록된 게시글:", data);
      setContent("");
    } catch (err: any) {
      Alert.alert("❌ 등록 실패", err.message || "오류가 발생했습니다.");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="게시글 내용을 입력하세요"
        value={content}
        onChangeText={setContent}
        style={styles.input}
        multiline
      />
      <Button title="게시글 등록" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    marginBottom: 10,
    borderRadius: 5,
    minHeight: 100,
    textAlignVertical: "top",
  },
});

