import { join } from 'path';
import { TestGenerator } from './generator/generator';
import del from "del";

(async () => {
    if (process.env.NODE_ENV !== "development") {
        throw new Error("Only to be used in development");
    }

    const args = [
        'test1',
        'test2'
    ];

    const opts = {
        bla: 'bla',
    }

    const ctx = new TestGenerator(args, opts);

    ctx.log('DEBUGGING');

    // Set the sourceRoot and destinationRoot just for debugging.
    const sourceRoot = join(__dirname, "templates");
    const destinationRoot = join(ctx.destinationRoot(), "output");

    ctx.sourceRoot(sourceRoot);
    ctx.destinationRoot(destinationRoot);

    const files = await del(join(destinationRoot, "**"));
    ctx.log(`Deleted ${files.length} files from "${destinationRoot}"`);
    
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




