let nav = document.querySelector(".menu-btn")
const nav_rect = nav.getBoundingClientRect();


//Esto realiza la siguiente funcion unicamente sobre el .menu-btn
nav.addEventListener('mousemove', function(e){
      const x = e.pageX - nav_rect.left - nav_rect.width / 2;
      const y = e.pageY - nav_rect.top - nav_rect.height / 2;
      nav.style.transform = "translate3d(" + x + "px, " + y + "px, 0)";
 })

 nav.addEventListener('mouseout', function(e){
  //lo devuelvo a su origen al salir
  nav.style.transform = "translate3d(" + 0 + "px, " + 0 + "px, 0)";
})

