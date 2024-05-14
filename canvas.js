var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

// c.fillStyle = "red";
// c.fillRect(100,100,100,100);
// c.fillStyle = "blue"
// c.fillRect(400,100,100,100);
// c.fillStyle = "green";
// c.fillRect(300,300,100,100);
// console.log(canvas);

//Line
// c.beginPath();
// c.moveTo(50,300);
// c.lineTo(300, 100);
// c.lineTo(400, 300);
// c.strokeStyle = "hotpink";
// c.stroke();

//Arc/Circle
// c.beginPath();
// c.arc(300,300,30,0, Math.PI * 2, false);
// c.strokeStyle = "blue";
// c.stroke();

// for (var i = 0; i < 10; i++){
//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;
//     c.beginPath();
//     c.arc(x,y,30,0, Math.PI * 2, false);
//     c.strokeStyle = "blue";
//     c.stroke();
// }

var x = Math.random() * innerWidth;
var dx = (Math.random() - 0.5) * 40;
var y = Math.random() * innerHeight;
var dy = (Math.random() - 0.5) * 40;
var radius = 30;
function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);
    c.beginPath();
    c.arc(x,y,50,0, Math.PI * 2, false);
    c.strokeStyle = "blue";
    c.stroke();
    if(x + radius > innerWidth || x - radius < 0){
        dx = -dx;
    }
    if(y + radius > innerHeight || y - radius < 0){
        dy = -dy;
    }
    x+=dx;
    y+=dy;
}

animate();