import React, { useState } from "react";
import { View, FlatList, Text, Alert } from "react-native";
import CommentForm from "../../components/CommentForm";
import CommentItem from "../../components/CommentItem";


// 댓글 데이터 타입 정의
interface Comment {
  id: string;
  content: string;
  username: string;
}

export default function PostDetailScreen() {
  const [comments, setComments] = useState<Comment[]>([
    { id: "1", content: "좋은 글이네요!", username: "예림" },
    { id: "2", content: "감사합니다~", username: "개발자" },
  ]);

  const [editing, setEditing] = useState<Comment | null>(null);

  const handleSubmit = (content: string) => {
    if (editing) {
      // 수정
      setComments((prev) =>
        prev.map((comment) =>
          comment.id === editing.id ? { ...comment, content } : comment
        )
      );
      setEditing(null);
    } else {
      // 새 댓글 추가
      const newComment: Comment = {
        id: Date.now().toString(),
        content,
        username: "익명", // 고정
      };
      setComments((prev) => [newComment, ...prev]);
    }
  };

  const handleDelete = (id: string) => {
    Alert.alert("삭제 확인", "댓글을 삭제할까요?", [
      { text: "취소" },
      {
        text: "삭제",
        onPress: () => {
          setComments((prev) => prev.filter((comment) => comment.id !== id));
        },
      },
    ]);
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18 }}>댓글</Text>
      <CommentForm
        onSubmit={handleSubmit}
        initialContent={editing?.content}
      />
      <FlatList
        data={comments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CommentItem
            comment={item}
            onEdit={() => setEditing(item)}
            onDelete={handleDelete}
          />
        )}
      />
    </View>
  );
}
