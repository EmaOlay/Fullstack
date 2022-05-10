let dir = "./Images/covers/";
let vec = [];
let chain = "";

let ul = document.getElementById("ul_grid");

window.addEventListener('load',carga_imagenes());
function carga_imagenes(){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', dir,true);

    xhr.onload = function(){
        if (this.status== 200) {
            //console.log(this.responseText);
            let texto = this.responseText;
            
            let searchStr_i = "<li><a href=\"/Images/covers/";
            let searchStrLen_i = searchStr_i.length;
            if (searchStrLen_i == 0) {
                return [];
            }
            let startIndex = 0, index, indices_principio = [];
            //busco comienzo
            while ((index = texto.indexOf(searchStr_i, startIndex)) > -1) {
                indices_principio.push(index);
                startIndex = index + searchStrLen_i;
            }
            //busco fin
            startIndex = 0
            let searchStr_f = "\" class=\"icon icon icon-";
            let searchStrLen_f = searchStr_f.length;
            let indices_fin = [];
            while ((index = texto.indexOf(searchStr_f, startIndex)) > -1) {
                indices_fin.push(index);
                startIndex = index + searchStrLen_f;
            }
            //los meto en un array
            for (let index = 0; index < indices_principio.length; index++) {
                img_string=texto.substring(indices_principio[index]+searchStrLen_i,
                    indices_fin[index]);
                img_string = decodeURI(img_string);
                //console.log(img_string)
                vec.push(img_string);
                //console.log(vec[index]);
            }
            //console.log(vec.length);
            //genero el html
            for(let i = 0; i<vec.length;i++){
                //console.log(vec[i]);
                chain+= `<li class="img_grid_li"><img class="img_grid" src="./Images/covers/`+vec[i]+`" alt=""></li>`;
                //console.log(chain);
            }
            //lo ingreso al html
            let img_grid_ul =document.getElementsByClassName('img_grid_ul');
            img_grid_ul[0].innerHTML= chain;
        }
    }
    xhr.send();
}

