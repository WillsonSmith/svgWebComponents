#SVG Web Components
An SVG element on an html page with the standard `<svg>` tag does not use scoped styles.
This means that any styles you set within the svg will apply to the whole document.
However if you use an svg with the `<object>` tag, you can scope styles to an svg item.
Using this in conjunction with a `<foreignObject>` tag, you can style HTML within svg.
You can also use javascript.


##Usage
  1. make your component as an `svg` file using "component.svg" as a template.
  2. Put your component html on your web page (ie. `<blue-paragraph>`).
  3. include `Component.js` in your web page you want your component on.
  4. Call `Component('tagname', 'component-directory')`

  This will inject your svg component as an object

  alternatively you can just put `<object data='component.svg' type='image/svg+xml'>`
  instead of using custom tags or the javascript.


###Tuesday 12 August 2014
- Added a component like my polymer `<futurama-quotes>` element seen here https://github.com/WillsonSmith/polymer-futurama-quotes
  - screenshot: https://www.dropbox.com/s/qvd5vth9msq24i6/Screenshot%202014-08-12%2019.38.49.png
