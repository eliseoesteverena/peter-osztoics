const $header = document.querySelector("#header"),
      $container = document.querySelector("#container");
var langSet = localStorage.getItem("lang");

//Comportamiento Menu:
let viewport = window.innerWidth;
let otherElements = document.querySelectorAll(".container");

setLang(langSet)

function setLang(language) {
    localStorage.removeItem("lang");// remueve 

    localStorage.setItem("lang", language); // establece el lenguaje recibido

    let langSet = localStorage.getItem("lang");

    //Correguir efecto blur si es necesario:
    otherElements.forEach(element => {
        element.classList.remove("with-blur")
    });

    if(langSet.indexOf('en') !== -1){
        writeTemplate("en");
        $container.innerHTML = langContent.en;
        footerArticle(language)
    }
    else if(langSet.indexOf('pt') !== -1){
        writeTemplate("pt");
        $container.innerHTML = langContent.pt;
        footerArticle(language)
    }
    else if(langSet.indexOf('es') !== -1){
        writeTemplate("es");
        $container.innerHTML = langContent.es;
        footerArticle(language)
    } 
	else {
        writeTemplate("en");
        $container.innerHTML = langContent.en;
        footerArticle(language)
	}
	
}
function writeTemplate(language) {
    if(language.indexOf('es') !== -1) { let es = itemsMenu["es"]; $header.innerHTML = write(es, "es");  }
    else if(language.indexOf('pt') !== -1) { let pt = itemsMenu["pt"]; $header.innerHTML = write(pt, "pt") } 
    else if(language.indexOf('en') !== -1) { let en = itemsMenu["en"]; $header.innerHTML = write(en, "en")}
    else { let es = itemsMenu["es"]; $header.innerHTML = write(es, "es") }

}

function write(text, lang) {
    let dom = document.getElementsByTagName("html");
    dom[0].setAttribute("lang", lang);
    let header = "";
    for(let i=0; i < text.length; i++) {
        header += `
            <a class="logo" href="/">&nbsp;</a>
            <button id="openMenu" class="open-menu" onclick="openMenu('nav')">&#32;</button>
                <nav id="nav" class="nav"> 
                    <a href="../solutions">${text[i]['solutions']}</a>
                    <!--a id="itemSolutions" class="item-solutions with-sub" onclick="openMenu('solutions')" for="itemSolutions${i}">${text[i]['solutions']}&nbsp;&nbsp;</a>
                        <div class="sub menu-solutions" id="menuSolutions">
                            <i>Soluciones ...</i>
                        </div-->
                    <!--- -->
                    <a class="item-tecnologies with-sub" for="itemTecnologies${i}" onclick="openMenu('tecnologies')">${text[i]['tecnologies']}&nbsp;&nbsp;</a>`;

        header += setMenuTecnologies(empresas, lang);

        header +=`<a id="itemAbout" class="item-about" href="/about-us.html">${text[i]['about_us']}</a>
                    <a href="#"><span>${text[i]['blog']}</span></a>
                    <a href="/contact.html"><span>${text[i]['contact']}</span></a>
                </nav>
                <div class="lang-cont">
                <span class="select-lang-txt">${text[i]['selectLang']}</span>
                    <a class="openLangs">&nbsp;</a>
                        <div class="flags" id="flags">
                            <a id="langEn" onclick="setLang('en');"><img class="flag en" src="../img/gb.svg"></a>
                            <a id="langEs" onclick="setLang('es');"><img class="flag es" src="../img/es.svg"></a>
                            <a id="langPt" onclick="setLang('pt');"><img class="flag pt" src="../img/pt.svg"></a>
                        </div>
                </div>`
        }
        return header;
}

function setMenuTecnologies(menuData, idioma) {
    let subMenuTecnologies = `<div class="sub menu-tecnologies" id="menuTecnologies">`;
    subMenuTecnologies += writeSubMenu(menuData, idioma);
    subMenuTecnologies += `</div>`;
    return subMenuTecnologies;
}

function openMenu(clase) {
    let solutions = document.getElementById("menuSolutions");
    let tecnologies = document.getElementById("menuTecnologies");

    switch (clase) {
        case "nav":
            let nav = document.getElementById("nav");
            
            otherElements.forEach(blurElements);
            

            let navClassList = nav.classList;
            navClassList.toggle("active");
            
            let langConteiner = document.querySelector(".lang-cont");
            let langConteinerClassList = langConteiner.classList
            langConteinerClassList.toggle("flex")

            break;
        case "solutions":
            if(solutions.style.display === "block") {
                solutions.style.display = "none"
            } else {
                tecnologies.style.display = "none"
                solutions.style.display = "block"
            }
            break;
        case "tecnologies":

            // Primer elemento en 'active':
            let firstTecnologies = tecnologies.querySelectorAll("div");
            firstTecnologies[1].style.display = "inline-block";
            firstTecnologies[1].style.boxSizing = "border-box";

            if(tecnologies.style.display === "block") {
                tecnologies.style.display = "none"
            } else {
                solutions.style.display = "none"
                tecnologies.style.display = "block"
            }
            break;

    } 
}

function writeSubMenu(menuData, idioma){
    let html = '<div class="group-items">';

    let empresas = []
    // Iterar sobre las propiedades de nivel superior de menuData (como "tecnologies_items")
    Object.keys(menuData).forEach(propiedad => {
        let grupoArray = menuData[propiedad]; // Puede ser un array o un objeto
        // Verificar si el valor es un array (como ..._items)
        if (Array.isArray(grupoArray)) {
        grupoArray.forEach(grupo => {
            Object.values(grupo).forEach(grupoDatos => {
                // Generar título del grupo
                html += `<a><span>${grupoDatos.title[idioma]}</span></a>`;
                html += '<div style="z-index:0;">';
                
                // Iterar sobre los items
                grupoDatos.items.forEach(item => {
                    let linkData = menuData.links[item.id]; // Obtener enlace y imagen
                    html += `
                            <a class="tecno" href="${linkData.link}">
                                <h1>${item.title[idioma]}</h1>
                                <p>${item.subtitle[idioma]}</p>
                                <div class="image"> <img src="../resources/img/${linkData.img}" alt="${item.title[idioma]}"></div>
                            </a>
                    `;
                    
                    empresas.push(item.title[idioma]);
                });
                
                html += '</div>';
            });
        });
    }
    });
    html += `</div>`;
    console.log(empresas);
    return html;
}

function footerArticle(lang) {
    const invalidatePages = ["/contact", "/contact.html", "/about-us", "/about-us.html", "/solutions", "/solutions.html"];
    let pageActual = window.location.pathname;

    let message = ``;
    const container = document.getElementById("container")
    const article = container.getElementsByTagName("article");
    console.log(article)
    let footer = document.createElement("section");
    footer.classList.add("msg-article");

    switch(lang){
        case "es":
            message = `<p>¿Te gustaría conocer más de la tecnología de <strong>${langContent.empresa}</strong> o cómo incorporarla a tu empresa?</p><a href="../contact.html">Contáctanos</a>`;
            break;
        case "en":
            message = `<p>Would you like to learn more about <strong>${langContent.empresa}</strong> technology or how to incorporate it into your company?</p><a href="../contact.html">Contact us</a>`;
            break;
        case "pt":
            message = `<p>Gostaria de saber mais sobre a tecnologia <strong>${langContent.empresa}</strong> ou como incorporá-la à sua empresa?</p><a href="../contact.html">Contate-nos</a>`;
            break;
    }
    footer.innerHTML = message;
    console.log(message)
    let webpage = "";
    let country = "";
    let grupEmpresas = empresas.links;
    let laempresa = langContent.empresa.toLowerCase();  // Convertimos la clave buscada a minúsculas
    
    // Dividimos la búsqueda en palabras (si tiene varias) y verificamos si alguna palabra coincide
    let palabrasBusqueda = laempresa.split(" ");  // Dividimos por espacio si hay varias palabras
    let empresaEncontrada = Object.keys(grupEmpresas).find(key => 
        palabrasBusqueda.some(palabra => key.toLowerCase().includes(palabra))
    );
    
    if (empresaEncontrada !== undefined) {
        // Si encontramos una coincidencia
        webpage = grupEmpresas[empresaEncontrada].webpage;
        country = grupEmpresas[empresaEncontrada].country;
    } else {
        console.log("La propiedad ", langContent.empresa, " no existe.");
    }
console.log(webpage)
    let headerArticle = `
                        <header class="header-article">
                            <div>
                                <a class="link-page-empresa"
                                   href="` + webpage + `" target="_blank">
                                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path fill="#173E00" fill-rule="evenodd" d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0Zm6.9 6H14c-.3-1.3-.8-2.4-1.4-3.6 1.8.7 3.4 1.9 4.3 3.6ZM10 2c.8 1.2 1.5 2.5 1.9 4H8.1c.4-1.4 1.1-2.8 1.9-4ZM2.3 12c-.2-.6-.3-1.3-.3-2s.1-1.4.3-2h3.4c-.1.7-.1 1.3-.1 2s.1 1.3.1 2H2.3Zm.8 2H6c.3 1.3.8 2.4 1.4 3.6-1.8-.7-3.4-1.9-4.3-3.6ZM6 6H3.1c1-1.7 2.5-2.9 4.3-3.6C6.8 3.6 6.3 4.7 6 6Zm4 12c-.8-1.2-1.5-2.5-1.9-4h3.8c-.4 1.4-1.1 2.8-1.9 4Zm2.3-6H7.7c-.1-.7-.2-1.3-.2-2s.1-1.3.2-2h4.7c.1.7.2 1.3.2 2s-.2 1.3-.3 2Zm.3 5.6c.6-1.1 1.1-2.3 1.4-3.6h2.9c-.9 1.7-2.5 2.9-4.3 3.6Zm1.8-5.6c.1-.7.1-1.3.1-2s-.1-1.3-.1-2h3.4c.2.6.3 1.3.3 2s-.1 1.4-.3 2h-3.4Z"/></svg>
                                   <span>website
                                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="feather feather-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3"/></svg>
                                   </span> 
                                   </a>
                            </div>
                            <div>
                                <span class="country-empresa"> ${country} </span>
                            </div>
                        </header>
                        `;

    if(article !== null && !invalidatePages.includes(pageActual)){
        article[0].appendChild(footer); 
        let content = article[0].innerHTML
        const modifiedContent = content.replace(
            /(<h1.*?>.*?<\/h1>)/i, 
            '$1' + headerArticle
          );
        article[0].innerHTML = modifiedContent;
    }
}

function blurElements(element, index, array){
    if(viewport < 500) {
        element.classList.toggle("with-blur")
    }
}

