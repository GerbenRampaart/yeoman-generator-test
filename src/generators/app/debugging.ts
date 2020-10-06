import { TestGenerator } from './generator/generator';

const gen = new TestGenerator(['test1', 'test2'], {
    bla: 'bla',
});

gen.run()
    .then(() => console.log('done'))
    .catch((err) => console.log(err));
