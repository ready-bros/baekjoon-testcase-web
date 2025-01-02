export type AlgorithmProblem = {
  code: string;
  input: string;
  answer: string;
  language: string;
  timeLimitSecond: number;
};

export type TestResult = {
  id: string;
  result: boolean;
  runtime: number;
};
