// Escribir contenido <header>
async function writeHeaderPage(language) {
    let dom = document.getElementsByTagName("html");
    dom[0].setAttribute("lang", language);
    
    let menuItems = await processData("menu");

    const menuVersion = `${language}_0.0.2`; // Versión actual del menú, idioma + version n
    const storedVersion = localStorage.getItem("menuVersion");

    if (storedVersion !== menuVersion) {
        let header = ``;
        header = `
                <a class="logo" href="/" aria-label="Peter's Papers Solutions - Inicio">
                    <img src="../img/logo-pps.svg" alt="Peter's Papers Solutions - Inicio">
                    </a>
                <button id="openMenu" class="open-menu" onclick="openMenu('nav')">&#32;</button>
                    <nav id="nav" class="nav"> 
                        <a href="${menuItems[0].link}">${menuItems[0].title[language]}</a>
                        <!--a id="itemSolutions" class="item-solutions with-sub" onclick="openMenu('solutions')" for="itemSolutions">$${menuItems[0].title[language]}&nbsp;&nbsp;</a>
                            <div class="sub menu-solutions" id="menuSolutions">
                                <i>Soluciones ...</i>
                            </div-->
                        <!--- -->
                        <a class="item-tecnologies with-sub" for="itemTecnologies" onclick="openMenu('tecnologies')">${menuItems[1].title[language]}&nbsp;&nbsp;</a>`;

        header += await processByCategory(language);

        header +=`<a id="itemAbout" class="item-about" href="${menuItems[2].link}">${menuItems[2].title[language]}</a>
                    <a href="${menuItems[3].link}"><span>${menuItems[3].title[language]}</span></a>
                    <a href="${menuItems[4].link}"><span>${menuItems[4].title[language]}</span></a>
                </nav>
                <div class="lang-cont">
                <span class="select-lang-txt">${menuItems[5].title[language]}</span>
                    <a class="openLangs">&nbsp;</a>
                        <div class="flags" id="flags">
                            <a id="langEn" onclick="setLang('en');" aria-label="Change language to english"><img class="flag en" src="../img/gb.svg" alt="Change language to english"></a>
                            <a id="langEs" onclick="setLang('es');" aria-label="Cambiar idioma al español"><img class="flag es" src="../img/es.svg" alt="Cambiar idioma al español"></a>
                            <a id="langPt" onclick="setLang('pt');" aria-label="Mudar idioma para português"><img class="flag pt" src="../img/pt.svg" alt="Mudar idioma para português"></a>
                        </div>
                </div>`
        
        localStorage.setItem("headerCache", header);
        localStorage.setItem("menuVersion", menuVersion)
        return header;
    } else {
        let headerCache = localStorage.getItem("headerCache")
        return headerCache;
    }
}

// ### Complementarias:

// Escribir sub-menu tecnologias
async function processByCategory(language) {
    let datos = await processData("empresas");

    let subMenuTecnologies = `<div class="sub menu-tecnologies" id="menuTecnologies">`;
        subMenuTecnologies += `<div class="group-items">`;
    datos.forEach(categoria => {
        // Categoria/Grupo
        subMenuTecnologies += `<a><span>${categoria.title[language]}</span></a>`;
        subMenuTecnologies += '<div class="group-scroll" style="z-index:0;">';
        categoria.items.forEach(item => {
            // Item
            subMenuTecnologies += `
                            <a class="tecno" href="${item.link}">
                                <h1>${item.title[language]}</h1>
                                <p>${item.subtitle[language]}</p>
                                <div class="image"> <img src="../resources/img/${item.img}" alt="${item.title[language]}"></div>
                            </a>`;
        });
        subMenuTecnologies += `</div>`; // Fin .group-scroll
    });
        subMenuTecnologies += `</div>`; // Fin .group-items

    subMenuTecnologies += `</div>`; // Fin .sub
    
    return subMenuTecnologies;
}

// Header y Footer de los articulos
function validatePages(lang){
    // Validación de pagina con articulo de empresa
    const invalidatePages = ["./", "/index", "/index.html", "/index-2", "/index-2.html", "/contact", "/contact.html", "/about-us", "/about-us.html", "/solutions", "/solutions.html"]; // ecepciones según location
    let pageActual = window.location.pathname;

    const article = container.getElementsByTagName("article");
    if(article !== null && !invalidatePages.includes(pageActual)){
        addToArticles(lang);
    }
}

async function addToArticles(lang) {
    const container = document.getElementById("container")
    const article = container.getElementsByTagName("article");
    let data = await getData();
    let empresas = data.empresas;
    
    const empresaActual = findInObject(langContent.empresa, empresas);
    // Meta-Descriptions
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
        meta = document.createElement('meta');
        meta.name = "description";
        document.head.appendChild(meta);
    }
    meta.setAttribute("content", empresaActual.subtitle[lang]);
    
    // Cabecera Articulo
    let headerArticle = `<header class="header-article">
                            <div>
                                <a class="link-page-empresa"
                                href='${empresaActual.webpage}' target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path fill="#173E00" fill-rule="evenodd" d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0Zm6.9 6H14c-.3-1.3-.8-2.4-1.4-3.6 1.8.7 3.4 1.9 4.3 3.6ZM10 2c.8 1.2 1.5 2.5 1.9 4H8.1c.4-1.4 1.1-2.8 1.9-4ZM2.3 12c-.2-.6-.3-1.3-.3-2s.1-1.4.3-2h3.4c-.1.7-.1 1.3-.1 2s.1 1.3.1 2H2.3Zm.8 2H6c.3 1.3.8 2.4 1.4 3.6-1.8-.7-3.4-1.9-4.3-3.6ZM6 6H3.1c1-1.7 2.5-2.9 4.3-3.6C6.8 3.6 6.3 4.7 6 6Zm4 12c-.8-1.2-1.5-2.5-1.9-4h3.8c-.4 1.4-1.1 2.8-1.9 4Zm2.3-6H7.7c-.1-.7-.2-1.3-.2-2s.1-1.3.2-2h4.7c.1.7.2 1.3.2 2s-.2 1.3-.3 2Zm.3 5.6c.6-1.1 1.1-2.3 1.4-3.6h2.9c-.9 1.7-2.5 2.9-4.3 3.6Zm1.8-5.6c.1-.7.1-1.3.1-2s-.1-1.3-.1-2h3.4c.2.6.3 1.3.3 2s-.1 1.4-.3 2h-3.4Z"/></svg>
                                <span>website
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="feather feather-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3"/></svg>
                                </span> 
                                </a>
                            </div>
                            <div>
                                <span class="country-empresa"> ${empresaActual.country} </span>
                            </div>
                        </header>`;

    let content = article[0].innerHTML
    const modifiedContent = content.replace(
        /(<h1.*?>.*?<\/h1>)/i, 
        '$1' + headerArticle
    );

    // Pie de Articulo
    const messageFind = findInObject("message", data.others) 
    let message = messageFind.content[lang].replace("[empresa]", empresaActual.title.es);
    
    let footer = document.createElement("section");
    footer.classList.add("msg-article");
    footer.innerHTML = message;

    // Escritura
    article[0].innerHTML = modifiedContent;
    article[0].appendChild(footer); 
}

// Agrupar por categorias:
function groupByCategory(datos) {
    // Crear un mapa para las categorías
    const categorias = new Map();
    datos.forEach(item => {
        if (item.parent_id === null) {
            // Agregar categorías al mapa con un array vacío para ítems
            categorias.set(item.id, { ...item, items: [] });
        }
    });

    // Asociar los ítems a sus categorías
    datos.forEach(item => {
        if (item !== null & item.parent_id !== null && categorias.has(item.parent_id)) {
            categorias.get(item.parent_id).items.push(item);
        }
    });
    
    // Convertir el mapa a un array
    return Array.from(categorias.values());
}

async function processData(typeData) {
    const data = await getData(); // Esperar a que getData() termine
    switch (typeData) {
        case "menu":
            return groupByCategory(data.menuItems);
        case "empresas":
            return groupByCategory(data.empresas);
        default:
            throw new Error("Tipo de dato no válido");
    }
}

function findInObject(idToFind, data) {
    // Convertimos la cadena de búsqueda a minúsculas y la dividimos en palabras
    const words = idToFind.toLowerCase().split(" ");

    // Buscamos en el array si alguna palabra coincide con el "id" de un objeto
    return data.find(obj => words.some(word => obj.id.includes(word)));
}

function getData() {
    const url = "../resources/data.json";
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error en la respuesta: ${response.status}`);
            }
            return response.json();
        })
        .catch(error => {
            console.error("Error al obtener los datos:", error.message);
            return {};
        });
}


// Comportamiento UI/UX:
function blurElements(element, index, array){
    let viewport = window.innerWidth;
    if(viewport < 765) {
        element.classList.toggle("with-blur")
    }
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

