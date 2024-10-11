const $header = document.querySelector("#header"),
      $container = document.querySelector("#container");
var langSet = localStorage.getItem("lang");

setLang(langSet)
function setLang(language) {
    localStorage.removeItem("lang");// remueve 

    localStorage.setItem("lang", language); // establece el lenguaje recibido

    let langSet = localStorage.getItem("lang");
    console.log(langSet)
    
    if(langSet.indexOf('en') !== -1){
        writeTemplate("en");
        $container.innerHTML = langContent.en;
    }
    else if(langSet.indexOf('pt') !== -1){
        writeTemplate("pt");
        $container.innerHTML = langContent.pt;
    }
    else if(langSet.indexOf('es') !== -1){
        writeTemplate("es");
        $container.innerHTML = langContent.es;
    } 
	else {
        writeTemplate("en");
        $container.innerHTML = langContent.en;
	}
	
}
function writeTemplate(language) {
    fetch('../scripts/data.json')
    .then(response => response.json())
    .then(dataJson => {
            if(language.indexOf('es') !== -1) { let es = dataJson["es"]; $header.innerHTML = write(es, "es");  }
            else if(language.indexOf('pt') !== -1) { let pt = dataJson["pt"]; $header.innerHTML = write(pt, "pt") } // portugues aún no establecido
            else if(language.indexOf('en') !== -1) { let en = dataJson["en"]; $header.innerHTML = write(en, "en")}
            else { let es = dataJson["es"]; $header.innerHTML = write(es, "es") }
    })
    .catch(error => console.error('Error al cargar el archivo JSON: ', error));

}
/*
function write(text) {
    
    let header = "";
    for(let i=0; i < text.length; i++) {
    header += `
    <a class="logo" href="index.html">&nbsp;</a>
        <input type="checkbox" id="openMenu" class="open-menu">
        <nav id="nav"> 
            <a id="itemSolutions" class="item-solutions with-sub" for="itemSolutions${i}">${text[i]['solutions']}&nbsp;&nbsp;</a>
            <label class="item-solutions with-sub" for="itemSolutions${i}">${text[i]['solutions']}&nbsp;&nbsp;</label>
            <input type="checkbox" id="itemSolutions${i}" class="open-menu int">
                <div class="sub menu-solutions">
                    <i>Soluciones ...</i>
                </div>
            <!--- -->
            <a class="item-tecnologies with-sub" for="itemTecnologies${i}">${text[i]['tecnologies']}&nbsp;&nbsp;</a>
            <label class="item-tecnologies with-sub" for="itemTecnologies${i}">${text[i]['tecnologies']}&nbsp;&nbsp;</label>
            <input type="checkbox" id="itemTecnologies${i}" class="open-menu int">
            <div class="sub menu-tecnologies">
                <div class="group-items">
                <a><span>${text[i]['papermaking_equip']}</span></a>
                    <!-- Inicio Bloque -->
                    <div style="display: block;z-index:0;">
                        <!-- Item Interno -->
                        <a class="tecno" href="tec\/runtech.html">
                            <h1>${text[i]['runtech']}<\/h1>
                            <span>${text[i]['papermachine_components']}</span>
                            <div class="image"> <img src="..\/img\/runtech.png"></div>
                        </a>
                        <!-- Fin Item Interno -->
                        <!-- Item Interno -->
                        <a class="tecno" href="tec\/qualifiber.html">
                            <h1>${text[i]['qualifiber']}<\/h1>
                            <span>${text[i]['stock_prep_complete']}</span>
                            <div class="image">
                                <img src="..\/img\/qualifiber.png">
                            </\div>
                        </a>
                        <!-- Fin Item Interno -->
                        <!-- Item Interno -->
                        <a class="tecno" href="tec\/runtech.html">
                            <h1>${text[i]['runtech']}<\/h1>
                            <span>${text[i]['papermachine_components']}</span>
                            <div class="image"> 
                                <img src="..\/img\/runtech.png">
                            </div>
                        </a>
                        <!-- Fin Item Interno -->
                    </div>
                    <!-- Fin Bloque -->
                </div>
                <div class="group-items"> <a><span>${text[i]['pm_auxilieres']}</span></a>
                    <div>Sub Item 2</div>
                </div>
                <div class="group-items">
                    <a><span>${text[i]['paper_pm_chemicals']}</span></a> <a><span>${text[i]['paper_converting']}</span></a>
                    <a><span>${text[i]['services_pm']}</span></a> <a><span>${text[i]['pm_specialized_engineering']}</span></a>
                </div>
            </div>
            </div>
            <a id="itemAbout" class="item-about" href="/about-us.html">${text[i]['about_us']}</a>
            <a href="/contact.html"><span>${text[i]['contact']}</span></a>
            <a href="#"><span>${text[i]['blog']}</span></a>
        </nav>
        <div class="lang-cont">
            <a class="openLangs">&nbsp;</a>
                <div class="flags">
                    <a class="flag en" id="langEn" onclick="setLang('en');">&nbsp;</a>
                    <a class="flag es" id="langEs" onclick="setLang('es');">&nbsp;</a>
                    <a class="flag pt" id="langPt" onclick="setLang('pt');">&nbsp;</a>
                </div>
        </div>`
    }
    return header;
}*/
var data = {
    "tecnologies_items": [
        {
            "group_one": {
                "title": {
                    "es": "Equipos de Fabricación de Papel",
                    "en": "Papermaking Equipment",
                    "pt": "Equipamento para fabricação de papel"
                },
                "items": [
                    {
                        "id": "runtech",
                        "title": {
                            "es": "Runtech",
                            "en": "Runtech",
                            "pt": "Runtech"
                            },
                        "subtitle": {
                            "es": "Soluciones para la industria de pulpa y papel (Finlandia)",
                            "en": "Solutions for the pulp and paper industry (Finland)",
                            "pt": "Soluções para a indústria de celulose e papel (Finlândia)"
                            },
                    },
                    {
                        "id": "qualifiber",
                        "title": {
                            "es": "Qualifiber",
                            "en": "Qualifiber",
                            "pt": "Qualifiber"
                          },
                          "subtitle": {
                            "es": "Máquinas para la preparación de pasta de papel usado (OCC)",
                            "en": "Machines for the preparation of waste paper pulp (OCC)",
                            "pt": "Máquinas para preparação de pasta de papel residual (OCC)"
                          },
                    },
                    {
                        "id": "pesint",
                        "title": {
                            "es": "Pesint",
                            "en": "Pesint",
                            "pt": "Pesint"
                        },
                        "subtitle": {
                            "es": "Máquinas para la preparación de pasta de papel usado (OCC)",
                            "en": "Progressive energy services",
                            "pt": "Serviços de energia progressivos"
                        },
                    },
                    {
                        "id": "hergen",
                        "title": {
                            "es": "Hergen",
                            "en": "Hergen",
                            "pt": "Hergen"
                        },
                        "subtitle": {
                            "es": "Máquinas de papel desde Headbox hasta Rewinder.",
                            "en": "Paper machines from Headbox to Rewinder.",
                            "pt": "Máquinas de papel da Headbox ao Rewinder."
                        },
                    },
                    {
                        "id": "projet",
                        "title": {
                            "es": "ProJet B.V.",
                            "en": "ProJet B.V.",
                            "pt": "ProJet B.V."
                        },
                        "subtitle": {
                            "es": "ProJet ofrece tecnología profesional de chorro de agua a alta presión.",
                            "en": "ProJet delivers professional high-pressure water jet technology.",
                            "pt": "A ProJet oferece tecnologia profissional de jato de água de alta pressão."
                        },
                    },
                    {
                        "id": "tashowheel",
                        "title": {
                            "es": "Tashowheel",
                            "en": "Tashowheel",
                            "pt": "Tashowheel"
                        },
                        "subtitle": {
                            "es": "Sistemas completos de control de calidad.",
                            "en": "Complete quality control systems.",
                            "pt": "Sistemas completos de controle de qualidade."
                        },
                    }
                ]
            },
            "group_two": {
                "title": {
                  "es": "Auxiliares PM",
                  "en": "PM Auxilieries",
                  "pt": "Auxiliares PM"
                },
                "items": [
                    {
                        "id": "aurelia",
                        "title": {
                            "es": "Aurelia",
                            "en": "Aurelia",
                            "pt": "Aurelia"
                          },
                          "subtitle": {
                            "es": "Medición continua y no destructiva de la calidad del papel.",
                            "en": "Continuous, non-destructive measurement of paper quality.",
                            "pt": "Medição contínua e não destrutiva da qualidade do papel."
                          },
                    },
                    {
                        "id": "sensorik",
                        "title": {
                            "es": "Sensorik",
                            "en": "Sensorik",
                            "pt": "Sensorik"
                          },
                          "subtitle": {
                            "es": "Sensores innovadores con fibra óptica robusta para reconocimiento de material/humedad/objetos.",
                            "en": "Innovative sensors with robust optical fiber for material/moisture/object recognition.",
                            "pt": "Sensores inovadores com fibra óptica robusta para reconhecimento de materiais/umidade/objetos."
                          }
                    },
                    {
                        "id": "wetend",
                        "title": {
                            "es": "Wetend",
                            "en": "Wetend",
                            "pt": "Wetend"
                          },
                          "subtitle": {
                            "es": "Sistema de dosificación de productos químicos especializados.",
                            "en": "Specialized chemical dosege system.",
                            "pt": "Sistema de dosagem química especializado."
                          }
                    }
                ]
            },
            "group_three": {
                "title": {
                  "es": "Químicos PM",
                  "en": "PM Chemicals",
                  "pt": "Químicos PM"
                },
                "items": [
                    {
                        "id": "suntex",
                        "title": {
                            "es": "Suntex",
                            "en": "Suntex",
                            "pt": "Suntex"
                          },
                          "subtitle": {
                            "es": "Productos AntiStickie.",
                            "en": "Antistickie products.",
                            "pt": "Produtos AntiStickie."
                          },
                    }
                ]
            },  
            "group_four": {
                "title": {
                  "es": "Conversión de Papel",
                  "en": "Paper Converting",
                  "pt": "Conversão de Papel"
                },
                "items": [
                    {
                        "id": "lattina",
                        "title": {
                            "es": "Lattina SRL",
                            "en": "Lattina SRL",
                            "pt": "Lattina SRL"
                          },
                          "subtitle": {
                            "es": "...",
                            "en": "...",
                            "pt": "..."
                          },
                    }
                ]
            },  
            "group_five": {
                "title": {
                  "es": "PM Servicios",
                  "en": "PM Services",
                  "pt": "Serviços PM"
                },
                "items": [
                    {
                        "id": "runtech",
                        "title": {
                            "es": "Runtech",
                            "en": "Runtech",
                            "pt": "Runtech"
                            },
                        "subtitle": {
                            "es": "Auditorias especializadas de molinos.",
                            "en": "Specialized Mill Audits.",
                            "pt": "Auditorias especializadas de moinhos."
                            },
                    },
                    {
                        "id": "prrolls",
                        "title": {
                            "es": "PR Rolls",
                            "en": "PR Rolls",
                            "pt": "PR Rolls"
                            },
                        "subtitle": {
                            "es": "Servicios &#34;in situ - on site&#34; de rectificado, revestimiento y balanceo de rodillos.",
                            "en": "&#34;on site&#34; grinding, coating and roller balancing services",
                            "pt": "Serviços &#34;in situ - on site&#34; de retificação, revestimento e balanceamento de rodillos."
                            },
                    },
                    {
                        "id": "tecnomeca",
                        "title": {
                            "es": "Tecnomeca",
                            "en": "Tecnomeca",
                            "pt": "Tecnomeca"
                            },
                        "subtitle": {
                            "es": "Todo tipo de equipos/ instrumentos de Laboratorio.",
                            "en": "All types of laboratory equipment/instruments",
                            "pt": "Todos os tipos de equipamentos/instrumentos de laboratório."
                            },
                    }
                ]
            }
        }
    ],
    "links": {
        "runtech": {
            "link": "/articles/runtech",
            "img": "runtech.png"
        },
        "qualifiber": {
            "link": "/articles/qualifiber",
            "img": "qualifiber.png"
        },
        "pesint": {
            "link": "/articles/pesint",
            "img": "pesint.png"
        },
        "aurelia": {
            "link": "/articles/aurelia",
            "img": "aurelia.png"
        },
        "sensorik": {
            "link": "/articles/sensorik",
            "img": "sensorik.png"
        },
        "wetend": {
            "link": "/articles/wetend",
            "img": "wetend.png"      
        },
        "suntex": {
            "link": "/articles/suntex",
            "img": "suntex.png"      
        },
        "lattina": {
            "link": "/articles/lattina",
            "img": "lattina.png"      
        },
        "prrolls": {
            "link": "/articles/prrolls",
            "img": "prrolls.png"      
        },
        "tecnomeca": {
            "link": "/articles/tecnomeca",
            "img": "tecnomeca.png"      
        },
        "hergen": {
            "link": "/articles/hergen",
            "img": "hergen.png"
        },
        "projet": {
            "link": "/articles/projet",
            "img": "projet.png"
        },
        "tashowheel": {
            "link": "/articles/tashowheel",
            "img": "tashowheel.png"
        }
    }
};

function write(text, lang) {
    
    let header = "";
    for(let i=0; i < text.length; i++) {
    header += `
        <a class="logo" href="/">&nbsp;</a>
        <button id="openMenu" class="open-menu" onclick="openMenu('nav')">&#32;</button>
            <nav id="nav" class="nav"> 
                <a id="itemSolutions" class="item-solutions with-sub" onclick="openMenu('solutions')" for="itemSolutions${i}">${text[i]['solutions']}&nbsp;&nbsp;</a>
                    <div class="sub menu-solutions" id="menuSolutions">
                        <i>Soluciones ...</i>
                    </div>
                <!--- -->
                <a class="item-tecnologies with-sub" for="itemTecnologies${i}" onclick="openMenu('tecnologies')">${text[i]['tecnologies']}&nbsp;&nbsp;</a>`;

    header += setMenuTecnologies(data, lang);

    header +=`<a id="itemAbout" class="item-about" href="/about-us.html">${text[i]['about_us']}</a>
                <a href="#"><span>${text[i]['blog']}</span></a>
                <a href="/contact.html"><span>${text[i]['contact']}</span></a>
            </nav>
            <div class="lang-cont">
                <a class="openLangs">&nbsp;</a>
                    <div class="flags">
                        <a class="flag en" id="langEn" onclick="setLang('en');">&nbsp;</a>
                        <a class="flag es" id="langEs" onclick="setLang('es');">&nbsp;</a>
                        <a class="flag pt" id="langPt" onclick="setLang('pt');">&nbsp;</a>
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
            let navClassList = nav.classList;
            navClassList.toggle("active");
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
                                <span>${item.subtitle[idioma]}</span>
                                <div class="image"> <img src="..\/img\/${linkData.img}" alt="${item.title[idioma]}"></div>
                            </a>
                    `;
                });
                
                html += '</div>';
            });
        });
    }
    });
    html += `</div>`;
    return html;
}
