import { Answers } from 'inquirer';
export const Key = 'includeGraphQL';

export class IncludeGraphQLAnswer implements Answers {
    includeGraphQL!: boolean;
}
