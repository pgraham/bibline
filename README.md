# Bibline

Conference app.

[Attributions](docs/attrib.md).

## Usage

The app has been developed for Android 4.4. It should work on iOS with one
change, the base href in [app.js](client/www/js/app.js), but has not been
tested. The PG client is contained in [client/](client/).

To build/run the client the desired platform will first need to be added with
`$ cordova platform add <platform>`.

### Phonegap/Cordova

This is a Phonegap application. A Phonegap development environment is expected.

### Grunt

There is a grunt build for this project. To use the grunt build you will first
need to [install Grunt](http://gruntjs.com/installing-grunt) and run `npm
install`. View the [Gruntfile.js](Gruntfile.js) for more details.
