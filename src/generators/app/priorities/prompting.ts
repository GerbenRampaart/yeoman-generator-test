import { TestGenerator } from '../generator/generator';
import { apiLayerQuestion } from '../questions/layer/question';

export const promptingImpl = async (ctx: TestGenerator): Promise<void> => {
    const layer = await ctx.prompt(await apiLayerQuestion());
    ctx.log(layer.layerChoice);
};
