import axios from "axios";

// ✅ 무한스크롤용 fetchPosts
export const fetchPosts = async ({ pageParam = 1 }) => {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?_page=${pageParam}&_limit=10`
  );

  return {
    data: res.data,
    nextPage: pageParam + 1,
    hasNext: pageParam < 10,
  };
};

// ✅ 게시글 작성
export const createPost = async ({ content }: { content: string }) => {
  const res = await axios.post("https://jsonplaceholder.typicode.com/posts", {
    title: "임시제목",
    body: content,
    userId: 1,
  });
  return res.data;
};

// ✅ 전체 목록 조회 (1회성)
export const getPosts = async () => {
  const res = await axios.get(
    "https://jsonplaceholder.typicode.com/posts?_limit=20"
  );
  return res.data;
};

// ✅ 게시글 삭제
export const deletePost = async (id: number) => {
  const res = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (res.status !== 200) throw new Error("삭제 실패");
  return true;
};

// ✅ 게시글 수정
export const updatePost = async ({
  id,
  title,
}: {
  id: number;
  title: string;
}) => {
  const res = await axios.put(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      title, // 제목만 수정하는 예시
      body: "수정된 내용",
      userId: 1,
    }
  );
  if (res.status !== 200) throw new Error("수정 실패");
  return res.data;
};

