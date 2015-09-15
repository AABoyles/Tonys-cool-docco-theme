# liberty-global-docco-theme

Docco layout and css, etc for use with docco generated documentation

## Usage

Install from NPM

```
npm install --save-dev liberty-global-docco-theme
```

Specify the template and css in the call to `docco`, eg.

```
docco -t node_modules/liberty-global-docco-theme/dist/docco.jst -c node_modules/liberty-global-docco-theme/dist/docco.css -o docs/ test.index.js
```

Lastly copy the font and image assets to the `docco` output folder

```
cp -r node_modules/liberty-global-docco-theme/dist/public docs/
```
