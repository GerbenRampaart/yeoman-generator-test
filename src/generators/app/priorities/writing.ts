import { TestGenerator } from '../generator/generator';

export const writingImpl = async (ctx: TestGenerator): Promise<void> => {
    ctx.log('writing');
};
