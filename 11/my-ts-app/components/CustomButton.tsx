// components/CustomButton.tsx
import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

type ButtonProps = {
  title: string;
  onPress: () => void;
};

const CustomButton = ({ title, onPress }: ButtonProps) => (
  <Pressable style={styles.button} onPress={onPress}>
    <Text style={styles.text}>{title}</Text>
  </Pressable>
);

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: '#2196F3',
    borderRadius: 5,
    marginTop: 20,
  },
  text: {
    color: '#fff',
    textAlign: 'center',
  },
});
