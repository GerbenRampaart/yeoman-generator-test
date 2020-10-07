import { TestGenerator } from '../generator/generator';

export const writingImpl = async (ctx: TestGenerator): Promise<void> => {
    ctx.log('writing');

    ctx.fs.copyTpl(
        ctx.templatePath("index.html"),
        ctx.destinationPath("some-path/index.html"), {
            name: ctx.answers.apiName
        }
    )
};
