// @title Coconut Chaos Autoplayer

// @copy
// @example


```gdp:04-01_Coconut_Chaos:initializeWhenSceneStarts 
if ($this.scene.state() === "PLAY") {
    ninjas.direction = "LEFT";
}
```
```gdp:04-01_Coconut_Chaos:updateEveryFrame
// Sets the base speed
var speed = 3900;


// Checks to see if the ninja is on the far right of the screen
// if so, set the direction to left
if (ninjas.x() > 700) {
    ninjas.direction = "LEFT";
}

// Checks to see if the ninja is on the far left of the screen
// if so, set the direction to right
else if (ninjas.x() < 0) {
    ninjas.direction = "RIGHT";
}

// If the direction is left, go left
// If the direction is right, go right
switch (ninjas.direction) {
    case "LEFT": 
        moveX(ninjas, (speed * -1));
        break;
        
    case "RIGHT":
        moveX(ninjas, speed);
        break;
}
```
