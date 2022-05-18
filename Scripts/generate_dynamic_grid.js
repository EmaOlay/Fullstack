


/*Empiezo la carga de la grilla*/
let chain = "";

let dir2 = "https://api.github.com/repos/EmaOlay/Fullstack/contents/Images/covers";

let data_cod = []
let mangas = []

/*Estadisticas*/

let app = Vue.createApp({

    data: function(){
        return{
            counter: -1,
            info_api:[],
            total_read:-1,
        }
    },
    methods: {
        //Traigo la info de las imagenes
        fetchData(url){
            if(url !== ""){
                fetch(url)
                .then(response => response.json())
                .then(data => {
                    //console.log(data);
                    this.counter= data.length;
                    this.info_api=data;
                    this.crea_grilla();
                })
                .catch(err => console.log(err));

            }else{
                console.log("URL inválida");
            }
        },
        //Crea grilla
        crea_grilla(){
            this.info_api.sort();
            
            for (let i = 0; i < this.info_api.length; i++) {

                chain += `<li class="img_grid_li"><img class="img_grid" src="`+this.info_api[i].download_url+`" alt="` + this.info_api[i].name.split(".")[0] + `"></li>`;
            }
            
            //console.log(chain);

            //lo ingreso al html
            let img_grid_ul = document.getElementById('img_grid_ul');
            img_grid_ul.innerHTML = chain;
        }
    },
    created(){
        this.fetchData(dir2);
    }
    }
)
app.mount('#m-counter')




