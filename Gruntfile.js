module.exports = function (grunt) {

	var jshint_files = [
		'**/*.js',
		'!**/node_modules/**',
	];

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			files: jshint_files,
			options: {
				'curly': true,
				'eqeqeq': true,
				'forin': true,
				'freeze': true,
				'immed': true,
				'indent': 4,
				'latedef': true,
				'newcap': true,
				'noarg': true,
				'noempty': true,
				'nonew': true,
				'quotmark': 'single',
				'undef': true,
				'unused': true,
				'trailing': true,
				'node': true,
			},
		},
		watch: {
			jshint: {
				files: jshint_files,
				tasks: ['jshint'],
				options: {
					atBegin: true,
					interrupt: true,
				},
			},
			static: {
				files: [
					'static/**/*',
				],
				options: {
					livereload: true,
				},
			},
		},
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['jshint']);
	grunt.registerTask('dev', ['watch']);

};
