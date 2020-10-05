import { TestGenerator } from '../generator/generator';

export const endImpl = async (ctx: TestGenerator): Promise<void> => {
    ctx.log('end');
};
