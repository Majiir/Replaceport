module.exports = function (grunt) {

	var jshint_files = [
		'**/*.js',
		'!**/node_modules/**',
		'!**/bower_components/**',
	];

	var less_files = {
		'static/main.css': 'less/main.less',
	};

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
		less: {
			options: {
				paths: [
					'less',
					'bower_components',
				],
			},
			dev: {
				files: less_files,
				options: {
					sourceMap: true,
					sourceMapFilename: 'static/main.css.map',
					sourceMapURL: 'main.css.map',
				},
			},
			dist: {
				files: less_files,
				options: {
					compress: true,
					cleancss: true,
					report: 'min',
				},
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
			less: {
				files: ['less/**/*.less'],
				tasks: ['less:dev'],
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
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', [
		'jshint',
		'less:dist',
	]);
	grunt.registerTask('dev', ['watch']);

};
