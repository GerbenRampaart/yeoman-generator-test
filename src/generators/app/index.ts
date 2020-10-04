import Generator, { GeneratorOptions } from 'yeoman-generator';
import { apiLayerQuestion } from './questions/layer/question';

export class Options implements GeneratorOptions {
    bla(): void {
        console.log();
    }
}

export default class extends Generator<GeneratorOptions> {
    constructor(args: string[], opts: GeneratorOptions) {
        super(args, opts);

        console.log(args, opts);

        this.option('babel', {
            type: Boolean,
            alias: 'b',
            default: false,
            description: 'use babel?',
            hide: false,
        });
    }

    /**
     * Your initialization methods (checking current project state, getting configs, etc)
     */
    async initializing(): Promise<void> {
        console.log('initializing');
    }

    /**
     * Where you prompt users for options (where you’d call this.prompt())
     */
    async prompting(): Promise<void> {
        
        const layer = await this.prompt(await apiLayerQuestion());
        this.log(layer);
    }

    /**
     * Saving configurations and configure the project (creating .editorconfig files and other metadata files)
     */
    async configuring(): Promise<void> {
        console.log('configuring');
    }

    /**
     * If the method name doesn’t match a priority, it will be pushed to this group.
     */
    async default(): Promise<void> {
        console.log('default');
    }

    /**
     * Where you write the generator specific files (routes, controllers, etc)
     */
    async writing(): Promise<void> {
        console.log('writing');
    }

    /**
     * Where conflicts are handled (used internally)
     */
    async conflicts(): Promise<void> {
        console.log('conflicts');
    }

    /**
     * Where installations are run (npm, bower)
     */
    async install(): Promise<void> {
        console.log('install');
    }

    /**
     * Called last, cleanup, say good bye, etc
     */
    async end(): Promise<void> {
        console.log('end');
    }
}
