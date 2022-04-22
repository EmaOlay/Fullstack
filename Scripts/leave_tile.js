let img_li =document.getElementsByClassName('img_grid_li');



for(let i=0; i<10 ; i++){
    
    
}
/*
function alter_sentido(){
    let root=document.documentElement;
    let root_style = getComputedStyle(document.documentElement);
    console.log(root_style.getPropertyValue('--sentido'));
    if(root_style.getPropertyValue('--sentido')==='normal')
        root.style.setProperty('--sentido', 'reverse');
    else if(root_style.getPropertyValue('--sentido')==='reverse')
        root.style.setProperty('--sentido', 'normal');
}
*/

/*
//console.log(img_li);

for(let i=0; i<img_li.length ; i++){
    img_li[i].addEventListener("animationend",function(e){
        
        
     })
}

const element = document.getElementById("watchme");
element.addEventListener("animationstart", listener, false);
element.addEventListener("animationend", listener, false);

function listener(event) {
    switch(event.type) {
      case "animationstart":
        l.textContent = `Started: elapsed time is ${event.elapsedTime}`;
        break;
      case "animationend":
        l.textContent = `Ended: elapsed time is ${event.elapsedTime}`;
        break;
    //   case "animationiteration":
    //     l.textContent = `New loop started at time ${event.elapsedTime}`;
    //     break;
    }
}
*/