import { TestGenerator } from '../generator/generator';

export const initializingImpl = async (ctx: TestGenerator): Promise<void> => {
    ctx.log('initializing');
};
