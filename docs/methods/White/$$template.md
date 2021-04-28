// @title $$template

This metadata tag, @title, is used to explicitly declare the title of the element, which is used as the title of the element in the doc and the sidebar, and internally to generate links.

This text is not rendered in the document.

// @copy
## @copy

This metadata tag, @copy, declares a text block that is used to explain the element.

___

### This is a simple guide for the near future, until things are sufficiently self-documented.

### Content Guidelines

Explanations should be concise, short, and heavily favor consistency over cleverness.

The proposed purpose of these docs is not to enable a unilateral source of knowledge for a seasoned engineer, but to enable a general and useful resource for all elements of the GDP.

Excess details/edge cases are low-priority to document, and will likely be added in optional drop-down tags at a later date. That is, complexity is a secondary goal to this project: it will be added, but as an aside and not for some time. 

Kids don't need to know that the return values of various functions are ```void```, for example.

___

### Elements

This is the shorthand used to format an intra-doc link to other elements: link:createTimer


This one doesn't do anything because the String() doesn't match with any element metadata: link:String()


[Of course, you can still use markdown to generate external links, too](https://stackoverflow.com/)


([or internal links, if you desire](/#card_spin))

<h4> HTML </h4>

<div style="background-color: gainsboro; padding: 1rem 1rem 1rem 1rem; font-weight: 700;">
  HTML (and styling) is also valid in the markdown, though <span style="text-decoration: underline; color: red;"> I would suggest avoiding it if you can </span>, as it is less idomatic and, in some cases, less secure.
</div>

Some HTML alternatives to markdown:

<a href="#card_createTimer" style="color: orange;"> createTimer </a>

<a href="#card_random" style="text-decoration: none;"> random </a>

<b> Bold!</b> or <span style="font-weight: 700;"> Bold! </span>

<u> Underlined.</u> or <span style="text-decoration: underline;"> Underlined. </span>

<i> Italic. </i> or <span style="font-style: italic;"> Italic. </span>

<!-- Using text-align is better practice -->
<center> Centered text </center>
<p style="text-align: center;"> or </p>
<p style="text-align: center;"> Centered text </p>

<style>
@keyframes template_blink {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

.template_blinker {
  animation: template_blink 1s linear alternate infinite;
  text-align: center;
}
</style>

<br>
<div class="template_blinker"> You could even use CSS classes... but probably don't do that. If you do, please prepend the class name with your file name, excepted characters like "$", which aren't valid within class names. </div>
<br>

<script>
// nope!
document.body.innerHTML = '';
console.log('abc');
</script>
___

// @example
## @example
This metadata tag, @example, declares a text block that is used to provide examples for the element, usually interspersed with code examples.

___

### Elements


The following is an example of a special block allowing for the reproduction of a fake GDP interface. 

```gdp:arbitraryObject:camelCaseEvent
$this.moveX(100);
```

Use the gdp:object:event syntax to generate the element.

The object is placed into the relevant position.

The event is provided as camelCase, converted to Start Case, and placed into the relevant position.


```gdp:rect:updateEveryFrame
$this.color = "orange";
```


The following is an example of a code block that provides javascript syntax highlighting.
```javascript
// Try writing JavaScript with output using the shell block! 

if ((100 * 100) >= 10000) {
    "It's True!";
}
```

You can also provide a fake "shell" to signify arbitrary output, using the shell block after your code block.

```javascript
if (1 + 1 === 2) {
  "It is!"
}
```
```shell
"It is!"
```

Inline styling, that will apply a code tag and a code-friendly font can be accessed merely by providing no tags to your code block, like so:

 ```$this.red = orange;```


If providing code examples, try to keep them short, but stick to the code conventions of the GDP, e.g. avoid using ES6 and even ES5 features, such as using ```var``` instead of ```let``` or ```const```, and definitely avoid functional programming.


__Bad__:
```javascript
"Can objects decipher email?".split(' ').map(word => word[0]).join('');
```
```shell
"Code"
```

__Good__:
```javascript
var secretMessage = "Can objects decipher email?";
var newMessage = "";

secretMessage = secretMessage.split(' ');

for (var i = 0; i < secretMessage.length; i++) {
  newMessage += secretMessage[i][0];
}

newMessage;
```
```shell
"Code"
```

This may feel counter-intuitive, but keeping to a consistent style is important!


That's it! Feel free to not follow these rules exactly: this can always be fixed later! Don't let the perfect be the enemy of the good!