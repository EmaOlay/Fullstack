var nav = document.querySelector('.menu-btn')
var nav_rect = nav.getBoundingClientRect();
document.addEventListener('mousemove', function(ev){
     var x = ev.clientX;
     var y = ev.clientY;
     offset_x=x-nav_rect.left
     offset_y=y-nav_rect.top
    
    // console.log("y=",(nav_rect.top<y && y<nav_rect.bottom))
    // console.log("x=",(nav_rect.left<x && x<nav_rect.right))
      if ((nav_rect.left<x && x<nav_rect.right) && (nav_rect.top<y && y<nav_rect.bottom)) {
        // console.log("x=",x,"y=",y)
        // console.log("nav_rect.left=",nav_rect.left,"nav_rect.top=",nav_rect.top)
        // nav.style.transform = "translate3d(" + offset_x + "px, " + offset_y + "px, 0)"
      } else {
            // nav.style.transform = "translate3d(" + 0 + "px, " + 0 + "px, 0)"
      }
     
 })

