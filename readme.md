#SVG Web Components
An SVG element on an html page with the standard `<svg>` tag does not use scoped styles.
This means that any styles you set within the svg will apply to the whole document.
However if you use an svg with the `<object>` tag, you can scope styles to an svg item.
Using this in conjunction with a `<foreignObject>` tag, you can style HTML within svg.
You can also use javascript.
