
let chain = "";

let dir2 = "https://api.github.com/repos/EmaOlay/Fullstack/contents/Images/covers";

let data_cod = []
let data = []
axios.get(dir2)
    .then(
        response => {
            //console.log(response.data);
            for (let index = 0; index < response.data.length; index++) {
                //console.log(response.data[index].name);
                let codificado = encodeURIComponent(response.data[index].name)
                data_cod.push(codificado)
                data.push(response.data[index].name)

            }
            //Ahora que tengo ambos vectores de strings los ordeno
            data_cod.sort();
            data.sort();
            //console.log(data);
            for (let i = 0; i < data_cod.length; i++) {

                chain += `<li class="img_grid_li"><img class="img_grid" src="https://raw.githubusercontent.com/EmaOlay/Fullstack/master/Images/covers/` + data_cod[i] + `" alt="` + data[i] + `"></li>`;
                //console.log(chain);
            }
            //lo ingreso al html
            let img_grid_ul = document.getElementsByClassName('img_grid_ul');
            img_grid_ul[0].innerHTML = chain;
        }
    )

