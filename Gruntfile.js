module.exports = function (grunt) {

	var targetPath = 'target';

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
						dest: '<%= buildPath %>'
					}
				]
			}
		},
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.registerTask('default', [ 'clean', 'copy' ]);
};
