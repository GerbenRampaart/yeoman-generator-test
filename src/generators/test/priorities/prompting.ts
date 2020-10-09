import { TestGenerator } from '../generator/generator';
import { Answers } from '../questions/answers';
import { apiLayerQuestion } from '../questions/apiLayer/question';
import { apiMajorVersionQuestion } from '../questions/apiMajorVersion/question';
import { apiNameQuestion } from '../questions/apiName/question';
import { includeGraphQLQuestion } from '../questions/includeGraphQL/question';

export const promptingImpl = async (ctx: TestGenerator): Promise<void> => {

  const layerAnswer = await ctx.prompt(await apiLayerQuestion());
  const nameAnswer = await ctx.prompt(await apiNameQuestion());
  const versionAnswer = await ctx.prompt(await apiMajorVersionQuestion());
  const includeGraphQLAnswer = await ctx.prompt(await includeGraphQLQuestion());
  
  ctx.answers = {
    apiLayer: layerAnswer.apiLayer,
    apiMajorVersion: versionAnswer.apiMajorVersion,
    apiName: nameAnswer.apiName,
    includeGraphQL: includeGraphQLAnswer.includeGraphQL,
    includeREST: true,
  };
};
