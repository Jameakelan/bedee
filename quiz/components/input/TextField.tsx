import * as React from "react";
import { TextInput, StyleSheet } from "react-native";

export interface ITextFieldProps {
  onTextChange?: (text: string) => void;
}

export default function TextField(props: ITextFieldProps) {
  return (
    <TextInput
      onChange={(e) => props.onTextChange?.(e.nativeEvent.text)}
      style={styles.input}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  input: {
    padding: 16,
    borderRadius: 16,
    borderColor: "black",
    backgroundColor: "white",
    borderWidth: 1,
  },
});
