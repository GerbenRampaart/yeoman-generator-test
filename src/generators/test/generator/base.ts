import Generator, { GeneratorOptions } from 'yeoman-generator';
import { Answers } from '../questions/answers';

/**
 * We use a base class for the generator because that way you can have helper methods for the 
 * yeoman run context without them being automatically run. See:
 * https://yeoman.io/authoring/running-context.html
 * 
 * So the base class will be keeping the state 
 */
export class BaseGenerator extends Generator<GeneratorOptions> {
    private _answersInteral: Answers | undefined = undefined;

    get answers(): Answers {
        // Throw an error here because even though we can also return undefined, it would be really 
        // weird if any step requests the answers before the prompting step. Which can only be 
        // the initialization step. This saves any step from doing an undefined check and also prevents bugs.
        if (!this._answersInteral) {
            throw new Error('Answers requested before initialized. Did the prompting step complete?');
        }

        return this._answersInteral;
    }

    set answers(a: Answers) {
        this._answersInteral = a;
    }
}