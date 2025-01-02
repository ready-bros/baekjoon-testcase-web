import axios from 'axios';
import { AlgorithmProblem, TestResult } from '../models';

export const testCodeAPI = async ({ ...payload }: AlgorithmProblem) => {
  const { data } = await axios.post<TestResult>(`${import.meta.env.VITE_BASE_URL}/code-runner`, payload);

  return data;
};
