import axios from 'axios';

export type User = {
  id: number;
  name: string;
};

export const getUser = async (id: number) => {
  const response = await axios.get<User>(`https://example.com/users/${id}`);
  return response.data;
};

