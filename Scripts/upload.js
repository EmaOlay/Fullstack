/*Declaro la clase para el tipo de dato Manga*/
class Manga {
    Title = "";
    Last_read = 0;
    //Metodos
    constructor(title, l_read) {
        this.Title = title;
        this.Last_read = l_read;
    }
    getInfo() {
        console.log(this.Title + ' ' + this.Last_read);
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
    newManga(title, l_read) {
        let nuevo_manga = new Manga(title, l_read);
        this.Mangas.push(nuevo_manga);
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
            console.log('Lo encontre el cap es:' + this.Mangas[encontrado].Last_read);
        } else {
            console.log('No lo encontre genero un nuevo Manga');
        }
    }
    /*hace update al last_read del manga que me pasen como parametro
    */
    updateManga(title, l_read) {
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
                console.log("Removed element: " + spliced[0].Title +' '+ spliced[0].Last_read);
            }
        }
    }
}

const saveForm = document.getElementById("saveForm");

saveForm.addEventListener('click', (e) => {
    checkInputs();
})

/*declaro las variables y las funciones para la implementacion */
let dir2 = "https://api.github.com/repos/EmaOlay/Fullstack/contents/Images/covers";
let vec_title = [];
let vec_l_read = [];
let Libreria = new library;
axios.get(dir2)
    .then(
        response => {
            //console.log(response.data);
            for (let index = 0; index < response.data.length; index++) {
                
                vec_title.push(response.data[index].name)

            }
            for (let i = 0; i < vec_title.length; i++) {
                //console.log(data[i].split(".")[0]);
                vec_title[i] = vec_title[i].split(".")[0];
            }
            //Ahora que tengo el vector de strings lo ordeno
            vec_title.sort();
            //pongo numeros al azar del 0 al 200 para las pruebas
            for (let i = 0; i < vec_title.length; i++) {
                vec_l_read[i] = Math.floor(Math.random() * 200);
            }
            /*Por ultimo genero la libreria*/
            for (let i = 0; i < vec_title.length; i++) {
                Libreria.newManga(vec_title[i], vec_l_read[i]);
            }

        }
    )




const manga = document.getElementById("manga");
const l_read = document.getElementById("l_read");
function checkInputs() {
    /*Get values */
    const mangaValue = manga.value;
    const l_readValue = l_read.value;

    /*Pregunto si quiere borrar*/
    if (l_readValue == -1) {
        Libreria.deleteManga(mangaValue);
    } else {
        //Si no quiso borrar update
        if (Libreria.updateManga(mangaValue, l_readValue) == -1) {
            console.log('Creo un nuevo Manga');
            Libreria.newManga(mangaValue, l_readValue);
        }

    }
}