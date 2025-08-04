import React from 'react';
import { Text } from 'react-native';

type Props = {
  name: string;
  age?: number;
};

const Hello: React.FC<Props> = ({ name, age }) => (
  <Text>Hello, {name}! {age && `You're ${age}`}</Text>
);

export default Hello;
