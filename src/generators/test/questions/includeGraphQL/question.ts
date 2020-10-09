import { Question } from 'yeoman-generator';
import { IncludeGraphQLAnswer, Key } from './answer';

export const includeGraphQLQuestion = async (): Promise<Question<IncludeGraphQLAnswer>> => {
    return {
        type: 'confirm',
        message: 'Do you want the GraphQL configuration and example?',
        name: Key
    };
};
