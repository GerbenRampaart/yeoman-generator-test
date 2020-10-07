import { Question } from 'yeoman-generator';
import { ApiNameAnswer, Key } from './answer';

export const apiNameQuestion = async (): Promise<Question<ApiNameAnswer>> => {
  return {
    type: 'input',
    message: 'What will be the name of the api (like "awesome-customer")?',
    name: Key,
    validate: async (input: string): Promise<string | boolean> => {
      if (input.length < 3) {
        return 'At least a name of length 3 plz. Think of something good';
      }

      if (input.startsWith('api')) {
        return "You don't need to start the name with 'api'. We'll prefix it :)";
      }

      const re = new RegExp('([a-z\\-]+)');

      if (!re.test(input)) {
        return 'Make sure you only use lowercase letters and dashes ("-")';
      }

      if (input.indexOf('--') > -1) {
        return 'Whoa there old sport. Only one dash in sequence. Not "--"';
      }

      if (input.startsWith('-') || input.endsWith('-')) {
        return 'Can\'t start or end with a dash "-". Sorry';
      }

      const segments = input.split('-');
      const last = segments[segments.length - 1];
      const lastInt = parseInt(last);

      if (!isNaN(lastInt)) {
        return "Don't make the last character a number, we'll use the version for that";
      }

      return true;
    },
  };
};
