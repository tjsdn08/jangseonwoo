import React from "react";
import { View, Text, Button } from "react-native";

// 댓글 데이터 타입 정의
interface Comment {
  id: string;
  content: string;
  username: string;
}

// CommentItem 컴포넌트 props 타입 정의
interface Props {
  comment: Comment;
  onEdit: () => void;
  onDelete: (id: string) => void;
}

export default function CommentItem({ comment, onEdit, onDelete }: Props) {
  return (
    <View style={{ padding: 10, borderBottomWidth: 1 }}>
      <Text>{comment.username}</Text>
      <Text>{comment.content}</Text>
      <View style={{ flexDirection: "row", gap: 10 }}>
        <Button title="수정" onPress={onEdit} />
        <Button title="삭제" onPress={() => onDelete(comment.id)} />
      </View>
    </View>
  );
}
