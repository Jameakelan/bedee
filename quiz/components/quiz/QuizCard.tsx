import * as React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import { useTheme } from "../../contexts/use_theme";
import RoundedButton from "../button/RoundedButton";
import { ChoiceModel, QuestionModel } from "../../models/QuestionModel";
import QuizChoice from "./QuizChoice";

export interface IQuizCardProps {
  onPressNext?: () => void;
  onPressChoice?: (choice: ChoiceModel) => void;
  question: QuestionModel;
  active?: "correct" | "incorrect" | "none";
  isSelectedAnswer?: boolean;
  selectedChoice?: ChoiceModel;
  buttonTitle: string;
}

const { height, width } = Dimensions.get("window");

export default function QuizCard(props: IQuizCardProps) {
  const { theme } = useTheme();

  function handleUserAnswer(
    choice: ChoiceModel
  ): "correct" | "incorrect" | "none" {
    if (choice.choice === props.selectedChoice?.choice) {
      return props.selectedChoice?.isCorrect ? "correct" : "incorrect";
    }
    return "none";
  }

  return (
    <View style={[styles.container]}>
      <View
        style={[
          styles.cardContainer,
          { backgroundColor: theme.palette?.primary },
        ]}
      >
        <Text style={styles.question}>{props.question.question}</Text>
        {props.question.choices?.map((choice, index) => (
          <QuizChoice
            key={index}
            choice={choice}
            active={handleUserAnswer(choice)}
            onPress={() => props.onPressChoice?.(choice)}
          />
        ))}
        <View style={styles.buttonContainer}>
          <RoundedButton
            onPress={props.onPressNext}
            title={props.buttonTitle}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    width,
  },
  cardContainer: {
    flex: 1,
    padding: 8,
    borderRadius: 8,
  },
  question: {
    paddingVertical: 8,
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
  },
  buttonContainer: {
    alignItems: "center",
    marginVertical: 8,
  },
});
