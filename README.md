# aframe-canvas

This is a library for easily allowing canvas in aframe VR.

![hello world in aframe](http://i.imgur.com/2Fw1Ysi.png)

Features
* Transparent canvas background
* Canvas can be resized
* Easily update the 3d texture from canvas with update() function on Canvas2D context

# Installing

```
npm install aframe-canvas
```

#Example

```html 
<html>
...
<body>
<a-scene>
    <a-sky color="#6EBAA7"></a-sky>
    <a-plane id="screen" position="0 1.25 -1" color="red" scale="3 3 3" canvas-material="width:500;height:500"/>
</a-scene>
</body>
<script>
    var component = document.querySelector("#screen").components["canvas-material"];
    var ctx = component.getContext()
    function getRndColor() {
        var r = 255*Math.random()|0,
                g = 255*Math.random()|0,
                b = 255*Math.random()|0;
        return 'rgb(' + r + ',' + g + ',' + b + ')';
    }
    window.setInterval(function(){

        ctx.clearRect(0,0,500,500);
        ctx.fillStyle = getRndColor();
        ctx.fillRect(Math.random()*500,Math.random()*500,50,50);
        ctx.fillStyle = "black";
        ctx.font = "100px serif";
        ctx.fillText("Hello world", 10, 100);
        //this update function says to update the texture in aframe
        component.updateTexture();
    },100)

</script>
</html>

```
