import React, { useState, useEffect } from "react";
import { View, TextInput, Button } from "react-native";

interface Props {
  onSubmit: (content: string) => void;
  initialContent?: string; // 선택적, 기본값 ""
}

export default function CommentForm({ onSubmit, initialContent = "" }: Props) {
  const [content, setContent] = useState<string>("");

  // 수정 시 초기값 반영
  useEffect(() => {
    setContent(initialContent);
  }, [initialContent]);

  return (
    <View style={{ marginVertical: 10 }}>
      <TextInput
        placeholder="댓글을 입력하세요"
        value={content}
        onChangeText={setContent}
        style={{ borderWidth: 1, padding: 8 }}
      />
      <Button
        title={initialContent ? "수정 완료" : "댓글 작성"}
        onPress={() => {
          if (content.trim()) {
            onSubmit(content);
            setContent("");
          }
        }}
      />
    </View>
  );
}
