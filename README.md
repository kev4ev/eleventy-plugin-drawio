# eleventy-plugin-drawio

This unofficial plugin allows you to generate URLs for your local `.drawio` files to use in eleventy sites. It does this by adding a simple shortcode filter that you can compose into your templates. First add the plugin to your **.eleventy.js** file: 

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
<iframe src="{% drawio <pathToDrawioFile> [, enableEdit]  %}" />
```

The shortcode **requires** `<pathToDrawioFile>`. This is a relative file path which: 
- must include the **.drawio** file suffix, and
- is relative to your _project root_ (where your `.eleventy.js` file lives)

The shortcode also accepts an optional boolean argument which is false by default. When true, the link to your diagram will allow the viewer to create an editable copy.
