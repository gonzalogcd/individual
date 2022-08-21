let url_autos="https://japceibal.github.io/emercado-api/cats_products/101.json";
//array donde se cargarán los datos recibidos:
let autosArray = [];

//función que recibe un array con los datos, y los muestra en pantalla a través el uso del DOM
function listadeautos(array){
    let htmlContentToAppend = "";
    

    for(let i = 0; i < array.products.length; i++){ 
        let autos = array.products[i];
        htmlContentToAppend += `
        
        <div class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                    <img src="` + autos.image + `" alt="product image" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <div class="mb-1">
                        <h4>`+ autos.name  + "-"+   autos.currency  + autos.cost +`</h4> 
                        <p> `+ autos.description +`</p> 
                        </div>
                        <small class="text-muted">` +  autos.soldCount + ` artículos</small> 
                    </div>

                </div>
            </div>
        </div>
        `
        document.getElementById("colocararray").innerHTML = htmlContentToAppend; 
    }
}
   



document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(url_autos).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            autosArray = resultObj.data;
            listadeautos(autosArray);
        }
    });
});
