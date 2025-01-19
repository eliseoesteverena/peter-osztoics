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
    let itemsMenu = {
        "es": [
            {
                "solutions" : "Soluciones",
                "services" : "Servicios",
                "tecnologies" : "Tecnologias",
                "about_us": "Acerca de",
                "contact" : "Contacto",
                "blog" : "Blog",
                "selectLang" : "Selecciona tu idioma: "
            }
        ],
        "en": [
            {
                "solutions" : "Solutions",
                "services" : "Services",
                "tecnologies" : "Tecnologies",
                "about_us": "About Us",
                "contact" : "Contact",
                "blog" : "Blog",
                "selectLang" : "Select your language: "
            }
        ],
        "pt": [
            {
              "solutions" : "Soluções",
              "services" : "Serviços",
              "tecnologies" : "Tecnologias",
              "about_us": "Sobre",
              "contact" : "Contato",
              "blog" : "Blog",
              "selectLang" : "Selecione seu idioma: "
            }
        ]
    };
    dataJson = itemsMenu;
    if(language.indexOf('es') !== -1) { let es = dataJson["es"]; $header.innerHTML = write(es, "es");  }
    else if(language.indexOf('pt') !== -1) { let pt = dataJson["pt"]; $header.innerHTML = write(pt, "pt") } // portugues aún no establecido
    else if(language.indexOf('en') !== -1) { let en = dataJson["en"]; $header.innerHTML = write(en, "en")}
    else { let es = dataJson["es"]; $header.innerHTML = write(es, "es") }

}

function write(text, lang) {
    let dom = document.getElementsByTagName("html");
    dom[0].setAttribute("lang", lang);
    let data = {
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
                                    "es": "Soluciones industriales disruptivas en áreas de vacío, enhebrado de hoja, estabilización de la hoja en la primera batería y deshidratación en las prensas.",
                                    "en": "Disruptive industrial solutions in the areas of vacuum, sheet threading, sheet stabilization in the first battery and dehydration in the presses.",
                                    "pt": "Soluções industriais disruptivas nas áreas de vácuo, rosqueamento de chapas, estabilização de chapas na primeira bateria e desidratação nas prensas."
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
                                "es": "Tecnologías innovadoras para explorar energía residual. Sistemas de vapor y condensado, campanas y ventilación de edificios en una fábrica de papel y todas las industrias donde se utiliza vapor en el proceso.",
                                "en": "Innovative technologies to explore waste energy. Steam and condensate systems, hoods and building ventilation in a paper mill and all industries where steam is used in the process.",
                                "pt": "Tecnologias inovadoras para explorar resíduos de energia. Sistemas de vapor e condensado, exaustores e ventilação predial em uma fábrica de papel e em todas as indústrias onde o vapor é utilizado no processo."
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
                            "id": "tasowheel",
                            "title": {
                                "es": "Tasowheel",
                                "en": "Tasowheel",
                                "pt": "Tasowheel"
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
                                "es": "Proporciona una medición continua y no destructiva de la calidad del papel. Revolucionando la forma en que la industria papelera puede producir papel y controlar su calidad con sistemas de medición no destructivos en tiempo real. Un sistema absolutamente novedoso para el control de calidad de los valores físicos del papel online.",
                                "en": "Provides continuous, non-destructive measurement of paper quality. Revolutionizing the way the paper industry can produce paper and control its quality with real-time non-destructive measurement systems. A completely new system for online quality control of physical paper values.",
                                "pt": "Fornece medição contínua e não destrutiva da qualidade do papel. Revolucionando a maneira como a indústria papeleira pode produzir papel e controlar sua qualidade com sistemas de medição não destrutivos e em tempo real. Um sistema absolutamente novo para controle de qualidade dos valores físicos do papel online."
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
                                "es": "Sensores innovadores con fibra óptica robusta para reconocimiento de material/humedad/objetos. Particularmente útil a la salida de la prensa y entrada de la prensa de encolado en una máquina de papel",
                                "en": "Innovative sensors with robust optical fibre for material/moisture/object recognition. Particularly useful at the press exit and inlet of the size press on a paper machine.",
                                "pt": "Sensores inovadores com fibra óptica robusta para reconhecimento de materiais/umidade/objetos. Particularmente útil na saída da prensa e entrada da prensa de colagem numa máquina de papel."
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
                        },
                        {
                            "id": "tm-systems",
                            "title": {
                                "es": "TM Systems",
                                "en": "TM Systems",
                                "pt": "TM Systems"
                            },
                            "subtitle": {
                                "es": "Flujos secundarios y subproductos, cómo lodos de industrias, subproductos de plantas de biogás y de fibras recicladas, lodos de destilerías y cervecerías, así como residuos municipales del tratamiento de aguas: se pueden secar y utilizar, entre otras cosas.",
                                "en": "Secondary streams and by-products, such as industrial sludge, by-products from biogas plants and recycled fibres, sludge from distilleries and breweries, as well as municipal waste from water treatment: these can be dried and used, among other things.",
                                "pt": "Fluxos secundários e subprodutos, como lamas industriais, subprodutos de fábricas de biogás e fibras recicladas, lamas de destilarias e cervejarias, bem como resíduos municipais provenientes do tratamento de águas: podem ser secos e utilizados, entre outras coisas."
                            }
                        },
                        {
                            "id": "bvg",
                            "title": {
                                "es": "BVG",
                                "en": "BVG",
                                "pt": "BVG"
                            },
                            "subtitle": {
                                "es": "Conversión enzimática continúa patentada de almidón nativo. Almidón procesado con viscosidad final optimizada y distribución de peso molecular. Se han vendido más de 200 Super-ECC® en todo el mundo.",
                                "en": "Patented continuous enzymatic conversion of native starch. Processed starch with optimized final viscosity and molecular weight distribution. More than 200 Super-ECC® have been sold worldwide.",
                                "pt": "Conversão enzimática contínua patenteada de amido nativo. Amido processado com viscosidade final e distribuição de peso molecular otimizadas. Mais de 200 Super-ECC® foram vendidos em todo o mundo."
                            }
                        },
                        {
                            "id": "fmw",
                            "title": {
                                "es": "FMW",
                                "en": "FMW",
                                "pt": "FMW"
                            },
                            "subtitle": {
                                "es": "Sistemas de alimentación de pulper, transportadores, estación de pesado, retirada de alambre en línea... Todo tipo de transporte de material.",
                                "en": "Pulper feeding systems, conveyors, weighing stations, in-line wire removal... All types of material transport.",
                                "pt": "Sistemas de alimentação de despolpadores, transportadores, estação de pesagem, remoção de fios em linha... Todo tipo de transporte de materiais."
                            }
                        },
                        {
                            "id": "moveroll",
                            "title": {
                                "es": "Moveroll",
                                "en": "Moveroll",
                                "pt": "Moveroll"
                            },
                            "subtitle": {
                                "es": "Los productos para el uso de rodillos MoveRoll son exclusivos e innovadores. Pueden ser fácilmente integrados a sistemas de manual de manejo de rollos y ofrecer una manera simple e innovadora de transportar o recibir rollos de papel con cuidado.",
                                "en": "MoveRoll roller-based products are unique and innovative. They can be easily integrated into manual roll handling systems and offer a simple and innovative way to transport or receive paper rolls with care.",
                                "pt": "Os produtos de rolos MoveRoll são exclusivos e inovadores. Eles podem ser facilmente integrados em sistemas manuais de manuseio de rolos e oferecem uma maneira simples e inovadora de transportar ou receber rolos de papel com cuidado."
                            }
                        },
                        {
                            "id": "ap_tela",
                            "title": {
                                "es": "AP-Tela",
                                "en": "AP-Tela",
                                "pt": "AP-Tela"
                            },
                            "subtitle": {
                                "es": "Una empresa especializada en la fabricación de piezas largas, soldadas con simetria axial. Como sigue: Tubos, cilindros y conos de acero pesados, soldados y de paredes gruesas. Rodillos para industrias de papel, energía y equipos de elevación.",
                                "en": "A company specializing in the manufacture of long, axially symmetrical welded parts. As follows: Heavy, welded, thick-walled steel tubes, cylinders and cones. Rollers for the paper, energy and lifting equipment industries.",
                                "pt": "Empresa especializada na fabricação de peças longas, soldadas com simetria axial. Como segue: Tubos, cilindros e cones de aço pesados, soldados e de paredes espessas. Rolos para indústrias de papel, energia e equipamentos de elevação."
                            }
                        },
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
                                "es": "Producto muy eficaz para controlar adhesivos y ceras de parafina, llamados stickies, de forma revolucionaria y mantener limpia la máquina papelera. Stickie es un problema creciente en la fabricación de papel.",
                                "en": "Highly effective product to control adhesives and paraffin waxes, called stickies, in a revolutionary way and keep the paper machine clean. Stickie is a growing problem in paper manufacturing.",
                                "pt": "Produto muito eficaz para controlar adesivos e parafinas, chamados stickies, de forma revolucionária e manter a máquina de papel limpa. Stickie é um problema crescente na fabricação de papel."
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
                                "es": "Soluciones industriales disruptivas en áreas de vacío, enhebrado de hoja, estabilización de la hoja en la primera batería y deshidratación en las prensas.",
                                "en": "Disruptive industrial solutions in the areas of vacuum, sheet threading, sheet stabilization in the first battery and dehydration in the presses.",
                                "pt": "Soluções industriais disruptivas nas áreas de vácuo, rosqueamento de chapas, estabilização de chapas na primeira bateria e desidratação nas prensas."
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
                                "es": "Empresa especializada en servicios \"in situ - on sit\" de rectificado, revestimiento y balanceo de rodillos de todo tipo de máquinas papeleras y reparación de piezas grandes en astilleros, acerías, industria pesada en general.",
                                "en": "Company specialized in \"on site\" grinding, coating and balancing of rollers of all types of paper machines and repair of large parts in shipyards, steel mills, heavy industry in general.",
                                "pt": "Empresa especializada em serviços “in situ - on site” de retificação, revestimento e balanceamento de rolos de todos os tipos de máquinas de papel e reparo de peças de grande porte em estaleiros, siderúrgicas, indústria pesada em geral."
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
                        },
                        {
                            "id": "malflo",
                            "title": {
                                "es": "MalFlo SRL",
                                "en": "MalFlo SRL",
                                "pt": "MalFlo SRL"
                                },
                            "subtitle": {
                                "es": "Servicios de Mantenimiento e Instalación, todas las disciplinas...",
                                "en": "Maintenance & Installation Services, all disciplines...",
                                "pt": "Serviços de manutenção e instalação, todas as disciplinas..."
                                },
                        },
                        {
                            "id": "latampaper",
                            "title": {
                                "es": "LatamPaper",
                                "en": "LatamPaper",
                                "pt": "LatamPaper"
                                },
                            "subtitle": {
                                "es": "Organización de eventos del sector",
                                "en": "Industry events organization ",
                                "pt": "Organização de eventos da indústria"
                                },
                        }
                    ]
                },
                "group_six": {
                    "title": {
                    "es": "PM Ingeniería Especializada",
                    "en": "PM Specialized Engineering",
                    "pt": "PM Engenharia Especializada"
                    },
                    "items": [
                        {
                            "id": "orloga",
                            "title": {
                                "es": "Orloga",
                                "en": "Orloga",
                                "pt": "Orloga"
                            },
                            "subtitle": {
                                "es": "Ingeniería especializada en proyectos industriales llave en mano para fábricas de papel.",
                                "en": "Engineering company specialized in turnkey industrial projects for paper mills.",
                                "pt": "Engenharia especializada em projetos industriais chave na mão para fábricas de papel."
                            },
                        }
                    ]
                },
            }
        ],
        "links": {
            "runtech": {
                "link": "/tecnologies/runtech",
                "img": "runtech.png"
            },
            "qualifiber": {
                "link": "/tecnologies/qualifiber",
                "img": "qualifiber.png"
            },
            "pesint": {
                "link": "/tecnologies/pesint",
                "img": "pesint.png"
            },
            "aurelia": {
                "link": "/tecnologies/aurelia",
                "img": "aurelia.png"
            },
            "sensorik": {
                "link": "/tecnologies/sensorik",
                "img": "sensorik.png"
            },
            "wetend": {
                "link": "/tecnologies/wetend",
                "img": "wetend.png"      
            },
            "suntex": {
                "link": "/tecnologies/suntex",
                "img": "suntex.png"      
            },
            "lattina": {
                "link": "/tecnologies/lattina",
                "img": "lattina.png"      
            },
            "prrolls": {
                "link": "/tecnologies/prrolls",
                "img": "prrolls.png"      
            },
            "tecnomeca": {
                "link": "/tecnologies/tecnomeca",
                "img": "tecnomeca.png"      
            },
            "hergen": {
                "link": "/tecnologies/hergen",
                "img": "hergen.png"
            },
            "projet": {
                "link": "/tecnologies/projet-bv",
                "img": "projet.png"
            },
            "tasowheel": {
                "link": "/tecnologies/tasowheel",
                "img": "tashowheel.png"
            },
            "orloga": {
                "link": "/tecnologies/orloga",
                "img": "orloga.png"
            },
            "tm-systems": {
                "link": "/tecnologies/tm-systems",
                "img": "tym-systems.png"
            },
            "malflo": {
                "link": "/tecnologies/malflo",
                "img": "malflo.png"
            },
            "latampaper": {
                "link": "#",
                "img": "latampaper.png"
            },
            "bvg": {
                "link": "/tecnologies/bvg",
                "img": "bvg.png"
            },
            "fmw": {
                "link": "/tecnologies/fmw",
                "img": "fmw.png"
            },
            "moveroll": {
                "link": "/tecnologies/moveroll",
                "img": "moveroll.png"
            },
            "ap_tela": {
                "link": "/tecnologies/ap-tela",
                "img": "ap-tela.png"
            }
        }
    };
    let header = "";
    for(let i=0; i < text.length; i++) {
    header += `
        <a class="logo" href="/">&nbsp;</a>
        <button id="openMenu" class="open-menu" onclick="openMenu('nav')">&#32;</button>
            <nav id="nav" class="nav"> 
                <a href="solutions">${text[i]['solutions']}</a>
                <!--a id="itemSolutions" class="item-solutions with-sub" onclick="openMenu('solutions')" for="itemSolutions${i}">${text[i]['solutions']}&nbsp;&nbsp;</a>
                    <div class="sub menu-solutions" id="menuSolutions">
                        <i>Soluciones ...</i>
                    </div-->
                <!--- -->
                <a class="item-tecnologies with-sub" for="itemTecnologies${i}" onclick="openMenu('tecnologies')">${text[i]['tecnologies']}&nbsp;&nbsp;</a>`;

    header += setMenuTecnologies(data, lang);

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
                                <div class="image"> <img src="..\/img\/${linkData.img}" alt="${item.title[idioma]}"></div>
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

    let html = ``;
    const container = document.getElementById("container")
    const article = container.getElementsByTagName("article");
    console.log(article)
    let footer = document.createElement("section");
    footer.classList.add("msg-article");

    switch(lang){
        case "es":
            html = `<p>¿Te gustaría conocer más de la tecnología de <strong>${langContent.empresa}</strong> o cómo incorporarla a tu empresa?</p><a href="../contact.html">Contáctanos</a>`;
            break;
        case "en":
            html = `<p>Would you like to learn more about <strong>${langContent.empresa}</strong> technology or how to incorporate it into your company?</p><a href="../contact.html">Contact us</a>`;
            break;
        case "pt":
            html = `<p>Gostaria de saber mais sobre a tecnologia <strong>${langContent.empresa}</strong> ou como incorporá-la à sua empresa?</p><a href="../contact.html">Contate-nos</a>`;
            break;
    }
    footer.innerHTML = html;
    if(article !== null && !invalidatePages.includes(pageActual)){
        article[0].appendChild(footer); 
        let title = article[0].getElementsByTagName("h1");
        let span = document.createElement("span");
        title.after(span)
    }
}

function blurElements(element, index, array){
    if(viewport < 500) {
        element.classList.toggle("with-blur")
    }
}

