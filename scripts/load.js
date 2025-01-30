const $header = document.querySelector("#header"),
      $container = document.querySelector("#container");
var langSet = localStorage.getItem("lang");

let otherElements = document.querySelectorAll(".container");

setLang(langSet);

console.log("Menu Version:", localStorage.getItem("menuVersion"))

async function setLang(language) {

    localStorage.removeItem("lang");// remueve 
    localStorage.setItem("lang", language); // establece el lenguaje recibido
    let langSet = localStorage.getItem("lang");

    //Correguir efecto blur si es necesario:
    otherElements.forEach(element => {
        element.classList.remove("with-blur")
    });

    if(langSet.indexOf('en') !== -1){
        let respuesta = await writeHeaderPage("en");
        $container.innerHTML = langContent.en;
        await addToArticles(language)
    }
    else if(langSet.indexOf('pt') !== -1){
        $header.innerHTML = await writeHeaderPage("pt");
        $container.innerHTML = langContent.pt;
        await addToArticles(language)
    }
    else if(langSet.indexOf('es') !== -1){
        $header.innerHTML = await writeHeaderPage("es");
        $container.innerHTML = langContent.es;
        await addToArticles(language)
    } 
	else { // Default
        $header.innerHTML = await writeHeaderPage("en");
        $container.innerHTML = langContent.en;
        await addToArticles(language)
	}
	
}