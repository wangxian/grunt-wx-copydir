# grunt-wx-copydir

> grunt plugin: copy directory

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-wx-copydir --save-dev
```

One the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-wx-copydir');
```


### Usage Examples

```js
grunt.initConfig({
  copydir: {
    localdir1: {src: 'tasks/', dist: 'tmp/webapp/', exclude: ['.svn', '.DS_Store']},
    localdir2: {src: 'tasks/', dist: 'tmp/webapp/assets/', exclude: ['.svn', '.DS_Store']}
  },
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
* 2013/4/12 - v0.2.0 - description mod.
* 2013/4/12 - v0.1.0 - Initial release.
