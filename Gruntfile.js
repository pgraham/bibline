module.exports = function (grunt) {

	var targetPath = 'target';

	var copyFilter = (function () {

		var excludePatterns = [
			'client/www/css/**/*.less'
		];

		return function (path) {
			return !grunt.file.isMatch(excludePatterns, path);
		};

	}());

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		targetPath: targetPath,
		buildPath: targetPath + '/build',
		workPath: targetPath + '/work',
		reportsPath: targetPath + '/reports',
		clientPath: 'client',

		clean: {
			build: [ "<%= targetPath %>/" ]
		},
		copy: {
			client: {
				files: [
					{
						expand: true,
						cwd: '<%= clientPath %>/',
						src: [ '**' ],
						dest: '<%= buildPath %>',
						filter: copyFilter
					}
				]
			}
		},
		less: {
			client: {
				options: {
					ieCompat: false,
					cleancss: true
				},
				files: [
					{
						expand: true,
						cwd: '<%= clientPath %>/www/css/',
						src: [ '**/*.less' ],
						dest: '<%= buildPath %>/www/css/',
						ext: '.css'
					}
				]
			}
		},
		processhtml: {
			client: {
				files: {
					'<%= buildPath %>/www/index.html': [ '<%= clientPath %>/www/index.html' ]
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-processhtml');

	grunt.registerTask('default', [ 'clean', 'copy', 'less', 'processhtml' ]);
};
