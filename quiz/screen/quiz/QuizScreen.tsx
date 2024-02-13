import * as React from "react";
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Dimensions,
} from "react-native";
import QuizHeader from "../../components/quiz/QuizHeader";
import QuizCard from "../../components/quiz/QuizCard";
import { useTheme } from "../../contexts/use_theme";
import { useUser } from "../../contexts/use_user";

import IconButton from "../../components/button/IconButton";
import ProgressiveBar from "../../components/progressive/ProgressiveBar";
import QuizController from "./QuizController";
import quiz from "../../data/quiz";
import { ChoiceModel } from "../../models/QuestionModel";
import { useNavigation } from "@react-navigation/native";
import PathRoutes from "../../constants/pathRoutes";

export interface IQuizScreenProps {}

const quizController = new QuizController();

export default function QuizScreen(props: IQuizScreenProps) {
  const refList = React.useRef<FlatList>(null);
  const [index, setIndex] = React.useState(0);
  const [currentAnswer, setCurrentAnswer] = React.useState<ChoiceModel>({});
  const [isSelectedAnswer, setIsSelectedAnswer] = React.useState(false);
  const quize = React.useMemo(() => quizController.shuffleQuestions(quiz), []);
  const { user, setScore } = useUser();
  const navigation = useNavigation();

  function handleScore() {
    const score = currentAnswer.isCorrect ? (user.score || 0) + 1 : user.score;
    setScore(score || 0);
  }

  function handleNextQuestion() {
    /**
     * User must select an answer before moving to the next question
     */
    if (index <= quize.length - 1 && isSelectedAnswer) {
      const moveTo = index + 1 === quiz.length ? quiz.length - 1 : index + 1;
      refList.current?.scrollToIndex({ index: moveTo });
      setIndex(moveTo);
      setIsSelectedAnswer(false);
      handleScore();
    }

    /**
     * If the user is on the last question, navigate to the leaderboard
     */
    if (index === quiz.length - 1) {
      navigation.navigate(PathRoutes.LEADER_BOARD as never);
    }
  }

  return (
    <SafeAreaView style={[styles.container]}>
      <QuizHeader />
      <View>
        <Text style={styles.fontProgress}>
          Question: {index + 1} / {quiz.length}
        </Text>
      </View>
      <ProgressiveBar max={quiz.length - 1} progress={index} />
      <FlatList
        ref={refList}
        data={quize}
        renderItem={({ item }) => (
          <QuizCard
            selectedChoice={currentAnswer}
            question={item}
            onPressChoice={(choice) => {
              setCurrentAnswer(choice);
              setIsSelectedAnswer(true);
            }}
            buttonTitle={`${index === quiz.length - 1 ? "Finish" : "Next"}`}
            onPressNext={handleNextQuestion}
          />
        )}
        keyExtractor={(item) => item.id}
        horizontal
        scrollEnabled={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fontProgress: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
