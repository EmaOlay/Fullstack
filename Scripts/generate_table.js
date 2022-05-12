
let chain = "";

let dir2 = "https://api.github.com/repos/EmaOlay/Fullstack/contents/Images/covers";

//let data_cod = []
let data = []
axios.get(dir2)
    .then(
        response => {
            //console.log(response.data);
            for (let index = 0; index < response.data.length; index++) {
                //console.log(response.data[index].name);
                //let codificado = encodeURIComponent(response.data[index].name)
                //data_cod.push(codificado)
                data.push(response.data[index].name)

            }
            for (let i = 0; i < data.length; i++){
                //console.log(data[i].split(".")[0]);
                data[i]=data[i].split(".")[0];
            }
            //Ahora que tengo ambos vectores de strings los ordeno
            //data_cod.sort();
            data.sort();
            //console.log(data);
            for (let i = 0; i < data.length; i++) {

                chain += `<div class="row">
                <div class="cell" data-title="Name">
                    `+data[i]+`
                </div>
                <div class="cell" data-title="Last Read">
                    56
                </div>
                <div class="cell" data-title="URL">
                    <a href="#">Algun Sitio</a>
                </div>
                <div class="cell" data-title="Genre">
                    Algun genero
                </div>
            </div>`;
                //console.log(chain);
            }
            //lo ingreso al html
            let table = document.getElementsByClassName('table');
            table[0].innerHTML += chain;
        }
    )

