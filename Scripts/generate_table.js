
let chain = "";

//let dir2 = "https://api.github.com/repos/EmaOlay/Fullstack/contents/Images/covers";
let dir2 = "http://127.0.0.1:5000/api/mangas/"
//let data_cod = []
let data = []
let nombre=[]
let l_read = []
let log_date = []
axios.get(dir2)
    .then(
        response => {
            //console.log(response.data);
            for (let index = 0; index < response.data.length; index++) {
                //console.log(response.data[index].name);
                //let codificado = encodeURIComponent(response.data[index].name)
                //data_cod.push(codificado)
                nombre.push(response.data[index].name);
                //console.log(response.data[index].name);
                l_read.push(response.data[index].last_read);
                //console.log(response.data[index].last_read);
                log_date.push(response.data[index].log_date);
                //console.log(response.data[index].log_date);

            }
            /*
            for (let i = 0; i < response.data.length; i++){
                
                console.log(nombre[i]);
                console.log(l_read[i]);
                console.log(log_date[i]);
                
            }
            */
            //console.log(data);
            for (let i = 0; i < response.data.length; i++) {

                chain += `<div class="row">
                <div class="cell" data-title="Name">
                    `+nombre[i]+`
                </div>
                <div class="cell" data-title="Last Read">
                    `+l_read[i]+`
                </div>
                <div class="cell" data-title="URL">
                    <a href="#">Algun Sitio</a>
                </div>
                <div class="cell" data-title="Log Date">
                    `+log_date[i]+`
                </div>
            </div>`;
                //console.log(chain);
            }
            //lo ingreso al html
            let table = document.getElementsByClassName('table');
            table[0].innerHTML += chain;
        }
    )

