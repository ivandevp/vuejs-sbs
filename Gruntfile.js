module.exports = function (grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			build: {
				src: ['src/**/*.js'],
				options: {
					jshintrc: './.jshintrc'
				}
			}
		},
		componentbuild: {
			build: {
				output: './dist/',
				name: 'element',
				styles: false,
				scripts: true,
				verbose: true
			}
		},
		mocha: {
			build: {
				src: ['test/test.html'],
				options: {
					reporter: 'Spec',
					run: true
				}
			}
		},
		watch: {
			component: {
				files: ['src/**/*.js', 'component.json'],
				tasks: 'componentbuild'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-component-build');
	grunt.loadNpmTasks('grunt-mocha');
	grunt.registerTask('test', ['mocha']);
	grunt.registerTask('default', ['jshint', 'componentbuild', 'mocha']);

};