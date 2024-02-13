import { ChoiceModel, QuestionModel } from "../../models/QuestionModel";
import QuizHelper from "../../utils/QuizHelper";

class QuizController {
  private quizHelper = QuizHelper.getInstance();
  shuffleQuestions(questions: QuestionModel[]): QuestionModel[] {
    let t_data = [];
    for (let i = 0; i < questions.length; i++) {
      t_data.push(questions[i]);

      /// Shuffle choices of each question
      const d = this.quizHelper.shuffle<ChoiceModel>(
        questions[i].choices || []
      );

      /// Assign shuffled choices to the question
      t_data[i].choices = d;
    }

    /// Shuffle all questions
    return this.quizHelper.shuffle<QuestionModel>(t_data);
  }
}

export default QuizController;
