// @title $this

// @copy
Represents the object that is currently selected.

There are two primary reasons this is useful:
One, because it is often shorter and easier to simply type $this than to keep re-typing the name of the object.
Two, because when we copy an object with the link:clone method, $this will always refer to the clone, whereas the explicit name of the object will continue to refer to the initial object.

// @example

```gdp:rect:updateEveryFrame
$this.moveX(100);
```
In the above example, ```$this``` refers to the ```rect``` object.

```gdp:rect:updateEveryFrame
$this.color = "orange";
```

The above example uses "dot-notation" to associate a "property", in this case, ```color```, with an object, in this case, ```$this```
The value of this property is now accessible - and changeable - as a member of the attached object, like so:

```gdp:rect:updateEveryFrame
$this.color = "orange";
$this.color = "red";
```
This reassigns the value of our ```color```property, attached to our ```rect``` object, from ```"orange"``` to ```"red"```.
