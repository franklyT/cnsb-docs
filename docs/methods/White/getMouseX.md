// @title getMouseX

// @copy

Returns the current x position of the mouse. The x-axis starts at 0 on the __left__ of the screen.

// @example

```gdp:rect:updateEveryFrame
if (getMouseX() < 400) { 
    $this.visible(false); 
} 
else { 
    $this.visible(true);
}
```

This code uses the ```getMouseX()``` command to get the x location of our mouse and compares it to the midpoint x-value of our game screen, approximately 400.
In the above example, the object will be hidden if the mouse x location value is a lower value than 400 (meaning that it is on the left side of our game screen), and visible otherwise, or ```else```.
