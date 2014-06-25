/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
    // Task configuration.
    bower: {
      install: {
        options: {
          targetDir: "./lib",
          cleanBowerDir: true
        }
      }
    },
    karma: {
      unit: {
        configFile: 'test/karma.conf.js'
      }
    },
    gitclone: {
      vextab: {
        options: {
          repository: 'https://github.com/0xfe/vextab.git',
          branch: 'master',
          directory: 'lib/vextab'
        }
      },
    },
    exec: {
      vextab_npm_install: {
        cwd: 'lib/vextab',
        command: 'npm install'
      },
      vextab_bundle_install: {
        cwd: 'lib/vextab',
        command: 'bundle install'
      },
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-git');
  grunt.loadNpmTasks('grunt-exec');

  // Default task.
  grunt.registerTask('default', ['bower', 'gitclone', 'exec', 'karma']);

};
