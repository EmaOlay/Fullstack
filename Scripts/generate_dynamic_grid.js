


/*Empiezo la carga de la grilla*/
let chain = "";

let dir2 = "https://api.github.com/repos/EmaOlay/Fullstack/contents/Images/covers";

let data_cod = []
let mangas = []

axios.get(dir2)
    .then(
        response => {
            //console.log(response.mangas);
            for (let index = 0; index < response.data.length; index++) {
                //console.log(response.data[index].name);
                let codificado = encodeURIComponent(response.data[index].name)
                data_cod.push(codificado)
                mangas.push(response.data[index].name)

            }
            //Ahora que tengo ambos vectores de strings los ordeno
            data_cod.sort();
            mangas.sort();
            //console.log(data);
            for (let i = 0; i < data_cod.length; i++) {

                chain += `<li class="img_grid_li"><img class="img_grid" src="https://raw.githubusercontent.com/EmaOlay/Fullstack/master/Images/covers/` + data_cod[i] + `" alt="` + mangas[i] + `"></li>`;
                //console.log(chain);
            }
            //lo ingreso al html
            let img_grid_ul = document.getElementsByClassName('img_grid_ul');
            img_grid_ul[0].innerHTML = chain;
            //console.log('Antes del then');
            
        }
    )

    
/*Termino la carga de la grilla */



/*Estadisticas*/

let app = Vue.createApp({

    data: function(){
        return{
            Fetched: false,
            counter: -1,
        }
    },
    methods: {
        fetchData(url){
            if(url !== ""){
                fetch(url)
                .then(response => response.json())
                .then(data => {
                    //console.log(data);
                    this.counter= data.length;
                    this.Fetched = true;
                    
                })
                .catch(err => console.log(err));

            }else{
                console.log("URL inválida");
            }
        }
    },
    created(){
        this.fetchData(dir2);

    }
    }
)

app.mount('#m-counter')
//app.onMounted(function () => {app.counter = mangas.length;})

