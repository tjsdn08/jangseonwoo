// src/api/auth.ts
export async function login(email: string, password: string) {
  if (email === 'test@example.com' && password === '1234') {
    return {
      token: 'mocked-token-123',
      user: {
        id: 1,
        name: '테스트 유저',
        email,
      },
    };
  } else {
    throw new Error('이메일 또는 비밀번호가 틀렸습니다.');
  }
}
