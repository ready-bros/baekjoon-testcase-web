import { useMutation } from '@tanstack/react-query';
import { AlgorithmProblem } from '../../models';
import { testCodeAPI } from '../../api/testCode';

export const useTestCodeMutation = () =>
  useMutation({
    mutationFn: (algorithmProblem: AlgorithmProblem) => testCodeAPI(algorithmProblem),
  });
