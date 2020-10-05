import { Question } from 'yeoman-generator';
import { LayerAnswer, LayerChoiceKey } from './answer';

export const apiLayerQuestion = async (): Promise<Question<LayerAnswer>> => {
    return {
        type: 'list',
        message: 'What type of api are you creating?',
        name: LayerChoiceKey,
        choices: [
            {
                name: 'core',
            },
            {
                name: 'system',
            },
        ],
    };
};
