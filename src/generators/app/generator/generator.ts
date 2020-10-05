import Generator, { GeneratorOptions } from 'yeoman-generator';
import { configuringImpl } from '../priorities/configuring';
import { conflictsImpl } from '../priorities/conflicts';
import { defaultImpl } from '../priorities/default';
import { endImpl } from '../priorities/end';
import { initializingImpl } from '../priorities/initializing';
import { installImpl } from '../priorities/install';
import { promptingImpl } from '../priorities/prompting';
import { writingImpl } from '../priorities/writing';

export class TestGenerator extends Generator<GeneratorOptions> {
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
        await initializingImpl(this);
    }

    /**
     * Where you prompt users for options (where you’d call this.prompt())
     */
    async prompting(): Promise<void> {
        await promptingImpl(this);
    }

    /**
     * Saving configurations and configure the project (creating .editorconfig files and other metadata files)
     */
    async configuring(): Promise<void> {
        await configuringImpl(this);
    }

    /**
     * If the method name doesn’t match a priority, it will be pushed to this group.
     */
    async default(): Promise<void> {
        await defaultImpl(this);
    }

    /**
     * Where you write the generator specific files (routes, controllers, etc)
     */
    async writing(): Promise<void> {
        await writingImpl(this);
    }

    /**
     * Where conflicts are handled (used internally)
     */
    async conflicts(): Promise<void> {
        await conflictsImpl(this);
    }

    /**
     * Where installations are run (npm, bower)
     */
    async install(): Promise<void> {
        await installImpl(this);
    }

    /**
     * Called last, cleanup, say good bye, etc
     */
    async end(): Promise<void> {
        await endImpl(this);
    }
}
