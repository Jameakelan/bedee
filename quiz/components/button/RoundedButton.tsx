import * as React from "react";
import { Button, View, StyleSheet, Pressable, Text } from "react-native";

export interface IRoundedButtonProps {
  title: string;
  onPress?: () => void;
}

export default function RoundedButton(props: IRoundedButtonProps) {
  return (
    <Pressable style={styles.button} onPress={props.onPress}>
      <Text style={styles.text}>{props.title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "30%",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 16,
    elevation: 3,
    backgroundColor: "black",
  },
  text: {
    color: "white",
  },
});
