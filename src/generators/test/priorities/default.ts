import { TestGenerator } from '../generator/generator';

export const defaultImpl = async (ctx: TestGenerator): Promise<void> => {
    ctx.log('default');
};
