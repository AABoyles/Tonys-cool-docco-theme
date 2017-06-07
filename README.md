# tonys-cool-docco-theme

Docco layout and css, etc for use with docco-generated documentation

The general premise is docco, but:

* Hides code by default, to focus on documentation.
* Is usable and looks OK without Javascript.

## Usage

Install from NPM

```
npm install --save-dev tonys-cool-docco-theme
```

Specify the template and css in the call to `docco`, eg.

```
docco -t node_modules/tonys-cool-docco-theme/dist/docco.jst -c node_modules/tonys-cool-docco-theme/dist/docco.css -o docs/ test.index.js
```

Built for [bettermath.js](https://aaboyles.github.io/bettermath)
