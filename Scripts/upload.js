/*Declaro la clase para el tipo de dato Manga*/
class Manga {
    Title = "";
    Last_read = 0;
    id=0;
    v_url="";
    //Metodos
    constructor(title, l_read, id, p_url) {
        this.Title = title;
        this.Last_read = l_read;
        this.id = id;
        this.v_url=p_url;
    }
    getInfo() {
        console.log(this.Title + ' ' + this.Last_read + ' ' + this.id);
    }
    to_JSON(){
        return({"title":this.Title , "last_read":this.Last_read , "id": this.id , "url":this.v_url})
    }
}

/*
Creo una "libreria" de mangas para probar en el futuro
esto deberia venir de una BD
*/

class library {

    //methods
    constructor(libreria) {
        //Un array de mangas
        this.Mangas = []
    }
    //crea un nuevo manga en la libreria
    newManga(title, l_read, id, p_url) {
        let nuevo_manga = new Manga(title, l_read, id,p_url);
        this.Mangas.push(nuevo_manga);
        //console.log(nuevo_manga);
        /*Devuelvo la referencia en caso de querer hacer algo
        a continuacion...
         por ejemplo verificar que se genero correctamente */
        return nuevo_manga;
    }
    //me devuelve todos los mangas
    getAllMangas() {
        return this.Mangas;
    }
    //Me devuelve info del title en particular
    getMangaInfo(title) {
        let encontrado = -1;
        //recorro todos los mangas cargados
        for (let i = 0; i < this.Mangas.length; i++) {
            //si lo encuentro me guardo el indice
            if (this.Mangas[i].Title == title) {
                encontrado = i;
            }
        }
        //si lo encontre muestro los otros items
        if (encontrado != -1) {
            //console.log('Lo encontre el cap es:' + this.Mangas[encontrado].Last_read);
        } else {
            //console.log('No lo encontre genero un nuevo Manga');
        }
    return this.Mangas[encontrado];
    }
    /*hace update al last_read del manga que me pasen como parametro
    */
    updateManga(title, l_read, p_url) {
        //-1 no exisistia
        //-2 no me pasaron un l_read valido
        let encontrado = -1;
        //recorro todos los mangas cargados
        for (let i = 0; i < this.Mangas.length; i++) {
            //si lo encuentro me guardo el indice
            if (this.Mangas[i].Title == title) {
                encontrado = i;
            }
        }
        //si lo encontre lo actualizo
        if (encontrado != -1) {
            /*verifico que el numero sea mayor
            No puede "des"-leer*/
            if (l_read > this.Mangas[encontrado].Last_read) {
                this.Mangas[encontrado].Last_read = l_read;
                this.Mangas[encontrado].url = p_url;
                console.log('Lo encontre actualizo');
            } else {
                console.log('No es un Last Read valido para este Manga');
                return -2;
            }

        } else {
            console.log('No lo encontre');
            return encontrado;
        }
    }
    deleteManga(title) {
        //recorro todos los mangas cargados
        for (let i = 0; i < this.Mangas.length; i++) {
            if (this.Mangas[i].Title == title) {
                let spliced = this.Mangas.splice(i, 1);
                //console.log("Removed element: " + spliced[0].Title +' '+ spliced[0].Last_read);
            }
        }
    }
}

const saveForm = document.getElementById("saveForm");

saveForm.addEventListener('click', (e) => {
    let aux =checkInputs()
    if(aux!= -2){
        if (aux == 1){
            console.log('Entre a enviar new')
            envio_manga_new(Libreria.getMangaInfo(manga.value).to_JSON());
        }else{
            envio_manga_update(Libreria.getMangaInfo(manga.value).to_JSON());
        }
        
    }
})

const DeleteForm = document.getElementById("DeleteForm");

DeleteForm.addEventListener('click', (e) => {
    if(checkInputs()!= -2){
        envio_manga_update_delete(Libreria.getMangaInfo(manga.value).to_JSON());
    }
})

/*declaro las variables y las funciones para la implementacion */
//let dir2 = "https://api.github.com/repos/EmaOlay/Fullstack/contents/Images/covers";
let dir2 = "https://testheroku-ema.herokuapp.com/api/mangas/"
let vec_title = [];
let vec_l_read = [];
let vec_id=[];
let vec_url = [];
let max_id =-1;
let Libreria = new library;
axios.get(dir2)
    .then(
        response => {
            //console.log(response.data);
            for (let index = 0; index < response.data.length; index++) {
                vec_title.push(response.data[index].name);
                vec_l_read.push(response.data[index].last_read);
                vec_id.push(response.data[index].id);
                if (response.data[index].id>max_id) {
                    max_id=response.data[index].id;
                }
                vec_url.push(response.data[index].url);
            }
            
            /*Por ultimo genero la libreria*/
            for (let i = 0; i < response.data.length; i++) {
                Libreria.newManga(vec_title[i], vec_l_read[i],vec_id[i],vec_url[i]);
            }
            for (let i = 0; i < response.data.length; i++) {
                var option = document.createElement("option");
                let datalist = document.getElementById("mi_datalist");
                //option.text = vec_title[i];
                option.value = vec_title[i];
                datalist.appendChild(option);
            }
        }
    )
function envio_manga_new(json) {
        let dir5 = "https://testheroku-ema.herokuapp.com/api/mangas/add"
        console.log(json);
        axios.post(dir5, json)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}
function envio_manga_update(json) {
    let dir3 = "https://testheroku-ema.herokuapp.com/api/mangas/update"
    //console.log(json);
    axios.post(dir3, json)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
}
function envio_manga_update_delete(json) {
    let dir4 = "https://testheroku-ema.herokuapp.com/api/mangas/delete"
    axios.post(dir4, json)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
}

const manga = document.getElementById("manga");
const l_read = document.getElementById("l_read");
const url = document.getElementById("url");
function checkInputs() {
    /*Get values */
    const mangaValue = manga.value;
    const l_readValue = l_read.value;
    const urlValue = url.value;
    //console.log(urlValue);
    /*Pregunto si quiere borrar*/
    if (l_readValue == -1) {
        //Libreria.deleteManga(mangaValue);
    } else {
        //Si no quiso borrar update
        if (Libreria.updateManga(mangaValue, l_readValue,urlValue) == -1) {
            console.log('Creo un nuevo Manga');
            //console.log('Los valores son:'+mangaValue+ ','+l_readValue+','+(max_id+1)+','+urlValue);
            Libreria.newManga(mangaValue, l_readValue,max_id+1, urlValue);
            return 1;
        } else { return -1; }
        return -2;
    }
}


function validateUrl(value) {
    return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value);
  }
