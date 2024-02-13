class QuizHelper {
  private static instance: QuizHelper;

  static getInstance(): QuizHelper {
    if (!QuizHelper.instance) {
      QuizHelper.instance = new QuizHelper();
    }
    return QuizHelper.instance;
  }

  shuffle<T>(data: T[]): T[] {
    let counter = 0;
    const t_data: T[] = [];
    while (counter < data.length) {
      /**
       * Shuffled all data
       * Break
       */
      if (t_data.length === data.length) {
        break;
      }

      /**
       * Random index between 0 and data.length
       */
      const randomIndex = Math.floor(Math.random() * data.length);

      /**
       *  The items that will be shuffled should not exist in t_data.
       */
      const exist = t_data.includes(data[randomIndex]);

      if (exist) {
        continue;
      }

      t_data.push(data[randomIndex]);
      counter++;
    }

    return t_data;
  }
}

export default QuizHelper;
