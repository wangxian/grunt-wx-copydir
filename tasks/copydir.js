/*
 * grunt-wx-copydir
 * https://github.com/wangxian/grunt-wx-copydir
 *
 * Copyright (c) 2013 wangxian
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('copydir', 'Copy directoriy.', function() {

    // Current config
    var option = this.data;
    grunt.file.recurse(option.src, function(abspath, rootdir, subdir, filename){
      var _exclude = option.exclude.filter(function(vt){
        return abspath.indexOf(vt) !== -1;
      });
      // console.log(abspath);

      // exclude files
      if(_exclude.length < 1){
        grunt.file.copy(abspath, option.dist+abspath);
      }
    });

    grunt.log.ok('finish copy directoriy:'+ this.target);

  });

};
