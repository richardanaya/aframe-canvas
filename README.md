This is a library for easily allowing canvas in aframe VR.

```html 
<html>
...
<body>
<a-scene>
    <a-plane id="screen" position="0 1.25 -1" color="red" scale="3 3 3" canvas-2d="width:500;height:500"/>
</a-scene>
</body>
<script>
    var ctx = document.querySelector("#screen").getContext("2d")
    function getRandomColor() {
        var r = 255*Math.random()|0,
                g = 255*Math.random()|0,
                b = 255*Math.random()|0;
        return 'rgb(' + r + ',' + g + ',' + b + ')';
    }
    window.setInterval(function(){
        ctx.fillStyle = getRandomColor();
        ctx.fillRect(Math.random()*500,Math.random()*500,50,50);
        ctx.fillStyle = "black";
        ctx.font = "100px serif";
        ctx.fillText("Hello world", 10, 100);
        //this update function says to update the texture in aframe
        ctx.update();
    },100)

</script>
</html>

```
