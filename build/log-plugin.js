'use strict';
// Const chalk = require('chalk');

// This plugin if for loggin url after each time the compilation is done.
module.exports = class LogPlugin {
	constructor(options) {
		this.options = options;
	}

	apply(compiler) {
		compiler.plugin('done', () => {
			console.log(`> VuePack is running at http://${this.options.host}:${this.options.port}\n`);
		});
	}
};
