
# ivh.autoFocus

[![Build Status](https://secure.travis-ci.org/iVantage/angular-ivh-auto-focus.png?branch=master)](https://travis-ci.org/iVantage/angular-ivh-auto-focus)

> Silly directive to give an element focus when it is created.


## Installation

Install with bower:

```
bower install --save angular-ivh-auto-focus
```


## Usage

Add this module as a dependency to your app:

```
angular.module('myApp', ['ivh.autoFocus']);
```

Go forth and apply the `ivh-auto-focus` directive to your input controls:

```html
<input type="text" ivh-auto-focus />
```


## Testing

Use `npm test` to run the full suite of linting, style checks, and unit tests.

Or, run each individually:

- Use `grunt jshint` for linting
- Use `grunt jscs` for coding style checks
- Use `grunt jasmine` to unit tests

For ease of development the `grunt watch` task will run each of the above as
needed when you make changes to source files.


## Changelog

*(nothing yet)*


## License

MIT
