import * as React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { ChoiceModel } from "../../models/QuestionModel";
import { useTheme } from "../../contexts/use_theme";

export interface IQuizChoiceProps {
  choice: ChoiceModel;
  active?: "correct" | "incorrect" | "none";
  onPress?: () => void;
}

export default function QuizChoice(props: IQuizChoiceProps) {
  const { theme } = useTheme();

  const renderActive = () => {
    if (props.active === "correct") {
      return theme.palette?.secondary;
    } else if (props.active === "incorrect") {
      return theme.palette?.error;
    }
    return "white";
  };

  return (
    <Pressable onPress={props.onPress}>
      <View style={[styles.container, { backgroundColor: renderActive() }]}>
        <Text style={styles.font}>{props.choice.choice}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    margin: 6,
    borderRadius: 8,
  },
  font: {
    fontSize: 16,
  },
});
