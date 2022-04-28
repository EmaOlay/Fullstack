let nav = document.querySelector(".menu-btn")
const nav_rect = nav.getBoundingClientRect();


//Esto realiza la siguiente funcion unicamente sobre el .menu-btn
nav.addEventListener('mousemove', function(e){
  let x = e.clientX;
  let y = e.clientY;
  // console.log("x=",x);
  // console.log("y=",y);
  //console.log("y>nav_rect.top && y<nav_rect.bottom=",y>nav_rect.top && y<nav_rect.bottom);
  //console.log("x>nav_rect.left && x<nav_rect.right=",x>nav_rect.left && x<nav_rect.right);
  /*Agrando el rectangulo en un 20%*/
  if(y>nav_rect.top && y<nav_rect.bottom && x>nav_rect.left && x<nav_rect.right){
    const x = e.pageX - nav_rect.left - nav_rect.width / 2;
    const y = e.pageY - nav_rect.top - nav_rect.height / 2;
    nav.style.transform = "translate3d(" + x + "px, " + y + "px, 0)";
  }
    
 })

 nav.addEventListener('mouseout', function(e){
  //lo devuelvo a su origen al salir
  nav.style.transform = "translate3d(" + 0 + "px, " + 0 + "px, 0)";
})

