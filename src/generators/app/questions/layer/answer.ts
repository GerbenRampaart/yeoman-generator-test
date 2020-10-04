export const LayerChoiceKey = 'apiLayer';

export class LayerAnswer implements Record<string, string> {
    [x: string]: string;

    get layerChoice(): string | undefined {
        return this[LayerChoiceKey];
    }
}
