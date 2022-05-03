/*Declaro la clase para el tipo de dato Manga*/
class Manga {
    Title = "";
    Last_read = 0;
    //Metodos
    constructor(title, l_read){
        this.Title = title;
        this.Last_read = l_read;
    }
    getInfo(){
        console.log(this.Title+ ' ' + this.Last_read);
    }
}

/*
Creo una "libreria" de mangas para probar en el futuro
esto deberia venir de una BD
*/

class library {

    //methods
    constructor(libreria){
        //Un array de mangas
        this.Mangas = []
    }
    //crea un nuevo manga en la libreria
    newManga(title, l_read){
        let nuevo_manga = new Manga(title,l_read);
        this.Mangas.push(nuevo_manga);
        /*Devuelvo la referencia en caso de querer hacer algo
        a continuacion...
         por ejemplo verificar que se genero correctamente */
        return nuevo_manga;
    }
    //me devuelve todos los mangas
    getAllMangas(){
        return this.Mangas;
    }
    //Me devuelve info del title en particular
    getMangaInfo(title){
        let encontrado =-1;
       //recorro todos los mangas cargados
        for (let i = 0; i < this.Mangas.length; i++) {
            //si lo encuentro me guardo el indice
            if (this.Mangas[i].Title==title) {
                encontrado = i;
            }             
        }
        //si lo encontre muestro los otros items
        if (encontrado != -1) {
            console.log('Lo encontre el cap es:'+this.Mangas[encontrado].Last_read);
        } else {
            console.log('No lo encontre genero un nuevo Manga');
        }
    }
    /*hace update al last_read del manga que me pasen como parametro
    */
   updateManga(title,l_read){
       //-1 no exisistia
       //-2 no me pasaron un l_read valido
       let encontrado =-1;
       //recorro todos los mangas cargados
        for (let i = 0; i < this.Mangas.length; i++) {
            //si lo encuentro me guardo el indice
            if (this.Mangas[i].Title==title) {
                encontrado = i;
            }             
        }
        //si lo encontre lo actualizo
        if (encontrado != -1) {
            /*verifico que el numero sea mayor
            No puede "des"-leer*/
            if (l_read>this.Mangas[encontrado].Last_read) {
                this.Mangas[encontrado].Last_read=l_read;
                console.log('Lo encontre actualizo');
            }else {
                console.log('No es un Last Read valido para este Manga');
                return -2;
            }
            
        } else {
            console.log('No lo encontre');
            return encontrado;
        }
   }
   deleteManga(title){
    //recorro todos los mangas cargados
     for (let i = 0; i < this.Mangas.length; i++) {
        if (this.Mangas[i].Title==title) {
            let spliced = this.Mangas.splice(i, 1);
            //console.log("Removed element: " + spliced.getInfo());
            //console.log("Removed element: ");
            //console.log(typeof spliced.Title);
            console.log("Removed element: " + spliced[0].Title + spliced[0].Last_read);
        }             
     }
   }
}

const saveForm = document.getElementById("saveForm");

saveForm.addEventListener('click', (e) => {	
	checkInputs();
})

/*declaro las variables y las funciones para la implementacion */
let vec_title = ["A Fairytale for the Demon Lord.jpg",
"A Returner_s Magic should be special.jpg",
"A Wonderful new World.jpg",
"Arachnid.jpg",
"Arifureta .jpg",
"Black Clover.jpg",
"Blue Lock.png",
"Chronicles Of Heavenly Demon.webp",
"Dead Tube.jpg",
"Death March to the Paralled World Rhapsody.jpg",
"Demon Kings Town Planning! The Strongest Dungeon is a Modern City(1).webp",
"Dokumushi.jpg",
"Dr. Stone.webp",
"Dungeon Reset.jpg",
"Fairy King_s Daily Life.jpg",
"Girls Of the wild.jpg",
"Gleipnir.jpg",
"Goblin Slayer.jpg",
"God of Blackfield.jpg",
"Hardcore Leveling Warrior.webp",
"How A Realist hero Rebuilt the kingdom.jpg",
"Infinite Dendrogram.webp",
"Interspecies Reviewers.jpg",
"In_Spectre.jpg",
"Is It Wrong to try to pick up girls in a dungeon.jpg",
"Jujutsu Kaisen.webp",
"Kemono Jihen.jpg",
"Kenja No Mago.jpg",
"Kill The Hero.webp",
"Leveling With The Gods.jpg",
"LV999 No Murabito.jpg",
"Mieruko-chan.jpg",
"Monster Musume no Oisha-san.jpg",
"Monster_8.jpg",
"Muerte no escrita.jpg",
"Mushoku Tensei.webp",
"My Hero Academia.jpg",
"My Wife Is a Demon Queen.jpg",
"Omniscient Reader_s Viewpoint.jpg",
"Overgeared.webp",
"Overlord.jpg",
"Painkiller.jpg",
"Parallel Paradise.webp",
"Past Life Regressor.jpg",
"Record Of Ragnarok.webp",
"Redo Of Healer.webp",
"Reincarnation of the Suicidal Battle God.png",
"Return To Player.webp",
"Second Life ranker.jpg",
"Shikkaku Mon No Saikyou Kenja.webp",
"So I-m a spider so what.jpg",
"SSS-Class Suicide Hunter.webp",
"Survival Story of a Sword King in a Fantasy World.webp",
"Tacit.webp",
"Taming Master.webp",
"That Time I got reincarnated as a slime.jpg",
"The Beginning After the End.jpg",
"The Breaker.jpg",
"The Death Mage who doesn_t want a fourth time.png",
"The Elder Sister-like One.jpg",
"The Eminence In shadow.jpg",
"The Gamer.jpg",
"The God of highschool.jpg",
"The Great Mage Returns After 4000 Years.webp",
"The Lord_s Coins Aren_t Decreasing.jpg",
"The Player that can_t Level Up.jpg",
"The return of the disaster class hero.png",
"The Tower of god.webp",
"The Tutorial Tower of the Advanced Player.webp",
"Tomb Raider King.jpg",
"Tsuki ga Michibiku Isekai Douchuu.webp",
"UQ Holder.jpg",
"Villain To Kill.jpg",
"Warble.webp",
"Your Talent is Mine.jpg"];
let vec_l_read = [];
//pongo numeros al azar del 0 al 200 para las pruebas
for (let i = 0; i < vec_title.length; i++) {
    vec_l_read[i]=Math.floor(Math.random()*200);
}
let Libreria = new library;
/*Por ultimo genero la libreria*/
for (let i = 0; i < vec_title.length; i++) {
    Libreria.newManga(vec_title[i],vec_l_read[i]);
}
/*
for (let index = 0; index < Libreria.getAllMangas().length; index++) {
    console.log('Titulo=' + Libreria.Mangas[index].Title);
    console.log('Last_read=' + Libreria.Mangas[index].Last_read);
    
}*/

const manga = document.getElementById("manga");
const l_read = document.getElementById("l_read");
function checkInputs(){
	/*Get values */
	const mangaValue = manga.value;
	const l_readValue = l_read.value;

    /*Pregunto si quiere borrar*/
    if (l_readValue==-1) {
        Libreria.deleteManga(mangaValue);
    }else{
        //Si no quiso borrar update
        if (Libreria.updateManga(mangaValue,l_readValue)==-1) {
            console.log('Creo un nuevo Manga');
            Libreria.newManga(mangaValue,l_readValue);
        }
        
    }
}