// @title Wall Blaster Rainbox Matrix

// @copy
// @example


```gdp:brick:updateEveryFrame 
if ($this.isTouching(ball)) {
    ball.speedY(-ball.speedY());
    $this.remove();
    $this.scene.score += 10;
    lblScore.text(parseInt($this.scene.score));
}
```
```gdp:05-04_Wall_Blaster:initializeWhenSceneStarts
if ($this.scene.state() == "PLAY") {
    var brickX = 4;
    var brickY = 150;
    $this.score = 0;
    
    // This nested for loop produces a "grid". How?
    // The outer loop represents the rows, and the inner loop represents the columns!
    // For every "row", 9 columns, or bricks, are created. Then, the process repeats.
    
    for (var rowCount = 0; rowCount <= 3; rowCount++) {
        for (var brickCount = 0; brickCount <= 9; brickCount++) {
            var nBrick = brick.clone();
            nBrick.fill(`rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`);
            nBrick.x((brickX) + (80*brickCount));
            nBrick.y(brickY);
        }
        brickY -= 40;
    }
}```

