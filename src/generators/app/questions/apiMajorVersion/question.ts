import { Question } from 'yeoman-generator';
import { ApiMajorVersionAnswer, Key } from './answer';

export const apiMajorVersion = async (): Promise<Question<ApiMajorVersionAnswer>> => {
  return {
    type: 'number',
    message: 'What will be the major version of the api?',
    name: Key,
    validate: async (input: number): Promise<string | boolean> => {
      if (input < 1) {
        return 
      }

      return true;
    },
  };
};
