import { ApiMajorVersionAnswer, Key } from './answer';
import { InputQuestion } from "inquirer";

export const apiMajorVersionQuestion = async (): Promise<InputQuestion<ApiMajorVersionAnswer>> => {
  return {
    type: 'input',
    message: 'What will be the major version of the api?',
    name: Key,
    validate: async (input: any): Promise<string | boolean> => {
      if (isNaN(input)) {
        return 'Has to be a number!';
      }

      const num = parseInt(input);

      if (num < 1 || num > 20) {
        return "Must be 1-20";
      }

      return true;
    },

  };
};
