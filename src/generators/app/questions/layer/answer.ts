export const LayerChoiceKey = 'appLayer';

export class LayerAnswer implements Record<string, string> {
    [x: string]: string;

    get layerChoice(): string {
        console.log(this);
        return this[LayerChoiceKey];
    }
}
