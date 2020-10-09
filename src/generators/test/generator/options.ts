import { GeneratorOptions } from 'yeoman-generator';

export class TestGeneratorOptions implements GeneratorOptions {
    bla(): void {
        console.log();
    }

    private v = 'bla';

    get prop1(): string {
        return this.v;
    }

    set prop1(v: string) {
        this.v = v;
    }
}
