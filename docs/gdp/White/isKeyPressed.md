// @title isKeyPressed

// @copy

Accepts a value as an argument by the link:keys object and returns a ```Boolean``` value, ```true``` if the key is currently pressed, or ```false``` if it is not.

The way this works is simple. The ```GDP``` gives us an easy way to refer to the various keys on our keyboard, with the link:keys object.

By passing in the relevant key, we're able to evaluate whether or not the key is currently being pressed, ```true``` or ```false```.

Using this method, we can give our ability to check if we're pressing a key and perform an action!

// @example

```gdp:rect:updateEveryFrame
if (isKeyPressed(Keys.rightArrow)) {
    moveX($this, 300);
}

if (isKeyPressed(Keys.leftArrow)) {
    moveX($this, -300);
}
```

Take note what is being demonstrated here: the ```function isKeypressed``` takes a single "argument", the information between the (), and "passes back" a value, either ```true``` or ```false```;

If ```isKeyPressed(Keys.rightArrow())``` evaluates to ```true``` the action will be performed, moving the object right.

If ```isKeyPressed(Keys.leftArrow())``` evaluates to ```true```, the action will be performed, moving the object left.

Using this technique, we're able to instruct our game to respond in a particular way when it senses that we're pressing on any given key!
