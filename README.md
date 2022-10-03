# eleventy-plugin-drawio

This unofficial plugin allows you to generate URLs for your local `.drawio` files to use in eleventy sites. It does this by adding a simple <a href="https://www.11ty.dev/docs/shortcodes/" target="_blank">shortcode</a> that you can compose into your templates. First add the plugin to your **.eleventy.js** file: 

```js
// make sure to `npm install` the library
const drawio = require('eleventy-plugin-drawio');

// add the plugin to your config
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

The shortcode **requires** the argument `<pathToDrawioFile>`. This is a relative file path which: 
- must include the **.drawio** file suffix, and
- is relative to your _project root_ (where your `.eleventy.js` file lives)

Optional args are as follows: 

Arg | Type | Default | Description
--|--|--|--
`enableEdit` | boolean | `false` | when true, passes path param `'edit=_blank&'` which allows viewers to edit a new copy of your diagram
`page` | integer | `undefined` | when provided, passes path param `page=<page>` which tells drawio to automatically render the diagram at the given page
