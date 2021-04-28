// @title comment

// @copy

JavaScript comments can be used to explain JavaScript code, and to make it more readable.

A comment might also be used to organize my code, by splitting it into various "sections".

Comments can also be used to prevent execution when testing alternative code.

// @example
```gdp:shootingStar:updateEveryFrame
// This code checks to see if my object has an x location below the value of 0
// or above the value of 200, and reverses direction if either is true.

if ($this.x() > 200 || $this.x() < 0) {
    $this.moveX(-$this);
}
```

```gdp:shootingStar:initializeWhenSceneStarts
// some old code commented out while I test my new code:

// $this.x(-200)
```
