var cursor = document.getElementById('cursor');
var custom_cursor = document.getElementById('custom_cursor');
document.addEventListener('mousemove', function(e){
    var x = e.clientX;
    var y = e.clientY;
    // console.log("x=",x);
    // console.log("y=",y);
    cursor.style.transform = "translate3d(" + x + "px, " + y + "px, 0)"
    custom_cursor.style.transform = "translate3d(" + x + "px, " + y + "px, 0)"
})