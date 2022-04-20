var nav = document.querySelector('.menu-btn')
var nav_rect = nav.getBoundingClientRect();
var centro_x=(nav_rect.right - nav_rect.left)/2;
var centro_y=(nav_rect.bottom -nav_rect.top)/2;
var hip=Math.sqrt(centro_x**2 + centro_y**2);

console.log(centro_x,centro_y)
document.addEventListener('mousemove', function(ev){
     var x = ev.clientX;
     var y = ev.clientY;
     var offset_x = x-nav_rect.right;
     var offset_y =y-nav_rect.top;
     
    //  console.log("y=",(nav_rect.top<y && y<nav_rect.bottom))
    //  console.log("x=",(nav_rect.left<x && x<nav_rect.right))
      if ((nav_rect.left<x && x<nav_rect.right) && (nav_rect.top<y && y<nav_rect.bottom)) {
        // console.log("x=",x,"y=",y)
        // console.log("nav_rect.left=",nav_rect.left,"nav_rect.top=",nav_rect.top)
        nav.style.transform = "translate3d(" + offset_x + "px, " + offset_y + "px, 0)"
      } else {
            nav.style.transform = "translate3d(" + -centro_x + "px, " + -centro_y + "px, 0)"
      }
     
 })

