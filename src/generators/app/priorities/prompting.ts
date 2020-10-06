import { TestGenerator } from '../generator/generator';
import { apiLayerQuestion } from '../questions/apiLayer/question';
import { apiNameQuestion } from '../questions/apiName/question';

export interface Answers {
  apiLayer: string;
  apiName: string;
  apiMajorVersion: number;
  includeGraphQLExample: boolean;
  includeRESTExample: boolean;
}

export const promptingImpl = async (ctx: TestGenerator): Promise<Answers> => {
  const layer = await ctx.prompt(await apiLayerQuestion());
  ctx.log(layer.apiLayer);

  const name = await ctx.prompt(await apiNameQuestion());
  ctx.log(name.apiName);

  return {
    apiLayer: layer.apiLayer,
    apiMajorVersion: 1,
    apiName: name.apiName,
    includeGraphQLExample: true,
    includeRESTExample: true,
  };
};
