import { TestGenerator } from '../generator/generator';
import { Answers } from '../questions/answers';
import { apiLayerQuestion } from '../questions/apiLayer/question';
import { apiNameQuestion } from '../questions/apiName/question';

export const promptingImpl = async (ctx: TestGenerator): Promise<void> => {
  const layer = await ctx.prompt(await apiLayerQuestion());
  ctx.log(layer.apiLayer);

  const name = await ctx.prompt(await apiNameQuestion());
  ctx.log(name.apiName);

  ctx.answers = {
    apiLayer: layer.apiLayer,
    apiMajorVersion: 1,
    apiName: name.apiName,
    includeGraphQLExample: true,
    includeRESTExample: true,
  };
};
