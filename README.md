# eleventy-plugin-drawio

This eleventy (`@11ty/eleventy`) plugin allows you to embed interactive diagrams from from local `.drawio` files into your website pages. It does this by adding a simple <a href="https://www.11ty.dev/docs/shortcodes/" target="_blank">shortcode</a> that you can compose into your templates. First add the plugin to your **.eleventy.js** file:

## Installation

```sh
npm i --save eleventy-plugin-drawio
```

## Usage

This package is built primarily as a [plugin](#plugin) to the eleventy site generator, but it also exposes a [standalone API](#api) that you can call directly in your scripts.

### `eleventy` Plugin <span id="plugin"></span>

```js
const drawio = require('eleventy-plugin-drawio');

// add the plugin to your eleventy config
module.exports = function(eleventyConfig){
    eleventyConfig.addPlugin(drawio);
    /** other code here */
    return {
        // your config
    }
}
```

Now you can use the `drawio` shortcode in your template files as such:

```html
<!-- nunjucks syntax -->
<iframe src="{% drawio <pathToDrawioFile> [, enableEdit] [, page] %}" />
```

The shortcode **requires** the argument `<pathToDrawioFile>` which must be: 
- relative to your _project root_ (where the `.eleventy.js` file lives), and
- must include the _.drawio_ file suffix

Optional args: 

Arg | Type | Default | Description
--|--|--|--
`enableEdit` | boolean | `false` | when true, passes path param `'edit=_blank&'` which allows viewers to edit a new copy of your diagram
`page` | integer | `undefined` | when provided, passes path param `page=<page>` which tells drawio to automatically render the diagram at the given page

### Programmatic API <span id="api"></span>
You can call the internal package API in your scripts directly by using a subpath require:

```js
const drawio = require('eleventy-plugin-drawio/api');
// ...
```

Currently the API exposes a single function. 

### `generateAddress(relPath, edit=false, page)`
Call this function to generate a URL from your draw.io diagram that can be used as an `iframe src` or as a direct link.

