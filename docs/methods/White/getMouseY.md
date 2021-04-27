// @title getMouseY

// @copy

Returns the current y position of the mouse. The y-axis starts at 0 on the __top__ of the screen.

// @example

```gdp:rect:updateEveryFrame
if (getMouseY() < 400) { 
    $this.visible(false); 
} 
else { 
    $this.visible(true);
}
```
This code uses the ```getMouseY()``` command to get the y location of our mouse and compares it to the midpoint y-value of our game screen, approximately 400.
In the above example, the object will be hidden if the mouse y location value is a lower value than 400 (meaning that it is on the top side of our game screen), and visible otherwise, or ```else```.
