var Generator = require("yeoman-generator");

module.exports = class extends Generator {

    constructor(args, opts) {
        super(args, opts);

        this.option("babel");
    }

    async test1() {
        const layer = await this.prompt({
            
            choices: [
                "core", "system", "process", "system", "contract"
            ]
        })

        this.config.set(layer);
        this.config.save();
        this.log("test1");
    }

    test2() {
        this.log("test2");
    }
};