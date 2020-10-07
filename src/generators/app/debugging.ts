import { join } from 'path';
import { TestGenerator } from './generator/generator';

(async () => {
    const args = [
        'test1',
        'test2'
    ];

    const opts = {
        bla: 'bla',
    }

    const ctx = new TestGenerator(args, opts);

    ctx.log('DEBUGGING');

    // Set the sourceRoot just for debugging.
    const sourceRoot = join(__dirname, "templates");

    ctx.sourceRoot(sourceRoot);
    ctx.destinationRoot(join(ctx.destinationRoot(), "output"));
    ctx.fs.delete("**");

    ctx.log(`sourceRoot:        "${ctx.sourceRoot()}"`);
    ctx.log(`appname:           "${ctx.appname}"`);
    ctx.log(`destinationPath:   "${ctx.destinationPath()}"`);
    ctx.log(`destinationRoot:   "${ctx.destinationRoot()}"`);

    try {
        await ctx.run();
        console.log('DEBUGGING DONE')
    } catch (err: unknown) {
        console.error(err);
    }

})();




