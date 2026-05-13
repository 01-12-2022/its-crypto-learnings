export interface Lesson {
  id: string;
  title: string;
  description: string;
  component: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}
