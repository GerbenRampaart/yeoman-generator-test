import { Question } from 'yeoman-generator';
import { ApiLayerAnswer, Key } from './answer';

export const apiLayerQuestion = async (): Promise<Question<ApiLayerAnswer>> => {
    return {
        type: 'list',
        message: 'What type of api are you creating?',
        name: Key,
        choices: [
            {
                name: 'core',
            },
            {
                name: 'system',
            },
            {
                name: 'process',
            },
            {
                name: 'mapper',
            },
            {
                name: 'contract',
            },
        ],
    };
};
