interface QuestionProps {
  id?: string | number;
  question?: string;
  choices?: ChoiceModel[];
}

export class QuestionModel {
  id?: string | number;
  question?: string;
  choices?: ChoiceModel[];

  constructor(data: QuestionProps) {
    Object.assign(this, data);
  }
}

interface ChoiceProps {
  choice?: string;
  isCorrect?: boolean;
}

export class ChoiceModel {
  choice?: string;
  isCorrect?: boolean;

  constructor(data: ChoiceProps) {
    Object.assign(this, data);
  }
}
