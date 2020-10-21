// console.log(document)


// setInterval(() => {
//     let texto = "ya vete" ;

//     const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
//     hablar(texto);

// }, 3000)();


console.log("****************Elementos del Documento****************")

// console.log(document)
// console.log(document.head)
// console.log(document.body)
// console.log(document.documentElement)
// console.log(document.doctype)
// console.log(document.charset)
// console.log(document.links)
// console.log(document.images)
// console.log(document.scripts)


// setTimeout(() => {
//     console.log(document.getSelection().toString())
// }, 3000);

// estos ya no se utilizan 
// console.log(document.getElementsByTagName("li"))
// console.log(document.getElementsByClassName("card"))
// console.log(document.getElementsByName("nombre"))
// //

// console.log(document.getElementById("que-es"))
// console.log(document.querySelector("a"))
// console.log(document.querySelectorAll("a"))
// console.log(document.querySelectorAll(".card"))


// document.querySelectorAll("a").forEach((el) => console.log(el))
// console.log(document.documentElement.lang)
// console.log(document.querySelector(".link-dom").href)
// console.log(document.querySelector(".link-dom").getAttribute("href"))
// console.log(document.querySelector("menu").id)
// console.log(document.querySelector("#menu").getAttribute("id"))

// console.log(document.documentElement.setAttribute("lang","es-co"));

// const $linkDom = document.querySelector(".link-dom");

// $linkDom.setAttribute("target",'_blank')
// $linkDom.setAttribute("rel","noopener")
// $linkDom.setAttribute("href","https://www.google.com")
// console.log($linkDom.hasAttribute("rel"))
// $linkDom.removeAttribute("rel");
// console.log($linkDom.hasAttribute("rel"))


// // Data Attribute

// console.log($linkDom.getAttribute("data-description"))
// console.log($linkDom.dataset)
// console.log($linkDom.setAttribute("data-id","15"))
// console.log($linkDom.getAttribute("data-id"))
// console.log($linkDom.dataset.description)
// $linkDom.dataset.description ="Hola soy sergio Redondo estoy bien"
// console.log($linkDom.dataset.description)
// console.log($linkDom.hasAttribute("data-id"))
// console.log($linkDom.style)
// console.log($linkDom.getAttribute("style"))
// console.log($linkDom.style.color)
// console.log($linkDom.style.backgroundColor)

// console.log(getComputedStyle($linkDom))

// console.log(getComputedStyle($linkDom).getPropertyValue("color"))
// $linkDom.style.setProperty("text-decoration","none");
// $linkDom.style.setProperty("display","block")
// $linkDom.style.width ="50%"
// $linkDom.style.textAlign = "center"
// $linkDom.style.marginLeft ="auto"
// $linkDom.style.marginLeft= "auto"
// $linkDom.style.padding="1rem"
// $linkDom.style.borderRadius="5rem"
// console.log(getComputedStyle($linkDom).getPropertyValue("text-decoration"))



// // CSC  CUstom Property CSS

// const $html = document.documentElement,
// $body = document.body;

// let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
// varYellowColor = getComputedStyle($body).getPropertyValue("--yellow-color");


// $body.style.backgroundColor = varDarkColor;
// $body.style.color = varYellowColor;

// $html.style.setProperty("--dark-color","pink")
// varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");

// //$body.style.backgroundColor = varDarkColor;

// $body.style.setProperty("background-color",varDarkColor);


// //console.log(document.querySelectorAll("li"))
// //console.log(document.querySelector("a").style.setProperty("text-decoration","none"))


//// Manipulacion de las clases 
// let $card = document.querySelector(".card");
// console.log($card)
// console.log($card.classList)
// console.log($card.classList.contains("rotate-45"))
// $card.classList.add("rotate-45");
// console.log($card.classList.contains("rotate-45"))
// console.log($card.className)
// console.log($card.classList)
// $card.classList.remove("rotate-45");
// console.log($card.className)
// $card.classList.toggle("rotate-45")
// console.log($card.classList.contains("rotate-45"))
// $card.classList.add("opacity-80", "sepia")



// document.querySelector("#card-nature").classList.add("opacity-80", "sepia")
// let $nature = document.querySelector("#card-nature")
// console.log($nature.classList.add("rotate-45"));


$whatIsDom = document.getElementById("que-es");

// let texto = `

//     <p>
//         Modelo  de Objetos  del documento (<b><i>DOM  DOCUMENT OBJECT MODEL </i></b> es una api  para documento HTML Y XML)
//     </p>
//     <p>
//             este proevee una representacion estructural del documento  , permimiento modificar su contenido
//             y presentacion visual median codigo js
//     </p>

//     <p>
//             <mark>
//                 EL DOM   es la parte  de la especificaciones  de JavaScript , es una api para los navegadores
//             </mark>
//     </p>
// `;
// innerText ya no hace parte del estandar utilizado para inyectar texto en el documento
//$whatIsDom.innerText = texto;

// $whatIsDom.textContent = texto;
// $whatIsDom.innerHTML = texto;


// const $card = document.querySelector(".cards");

// console.log($card.children)
// console.log($card.children[2])
// console.log($card.lastElementChild);
// console.log($card.firstElementChild)
// console.log($card.parentElement);
// console.log($card.children[2].closest("section"))


document.write("<h1>Creando elementos </h1>");

// const $figure  = document.createElement("figure");
// const $img  = document.createElement("img");
// const $figcaption = document.createElement("figcaption");
// const $figCaptionText = document.createTextNode("Animals")


// const $card = document.querySelector(".cards");

// $img.setAttribute("src","https://placeimg.com/200/200/animals")
// $img.setAttribute("alt","Animal")
// $figure.classList.add("card")
// $figcaption.appendChild($figCaptionText)
// $figure.appendChild($img)
// $figure.appendChild($figcaption)
// $card.appendChild($figure);


// document.write("<h1>Inserccion continentes del año al DOM </h1>");

// const continentes = ['america','oceania','africa','asia','europa'];

// let $ul2 = document.createElement("ul");
// document.body.appendChild($ul2)
// $ul2.innerHTML = "";

// continentes.forEach((el) => ($ul2.innerHTML +=`<li> ${el}</li>` ));

// document.write("<h1>Inserccion meses del año al DOM </h1>");


// const meses = ['enero',
// 'febrero',
// 'marzo',
// 'abril',
// 'mayo',
// 'junio',
// 'julio',
// 'agosto',
// 'septiembre',
// 'octubre',
// 'noviembre',
// 'diciembre'];

// $ul3 = document.createElement("ul");
// let $fragmen = document.createDocumentFragment();

// meses.forEach((el) => {
//     const $li = document.createElement("li");
//     $li.textContent = el;
//     $fragmen.appendChild($li);  
// });


// $ul3.appendChild($fragmen);
// document.body.appendChild($ul3);


//  const $template = document.getElementById("template-card").content,
//         $fragmen = document.createDocumentFragment(),
//         $card = document.querySelector(".cards"),
//         cardContent = [
//             {
//                 title:"Teconologia",
//                 url :"https://placeimg.com/200/200/tech"
//             },
//             {
//                 title:"Animales",
//                 url:"https://placeimg.com/200/200/animals"
//             },
//             {
//                 title:"Arquitectura",
//                 url :"https://placeimg.com/200/200/arch"
//             },
//             {
//                 title:"Gente",
//                 url :"https://placeimg.com/200/200/people"
//             }, {
//                 title:"Naturaleza",
//                 url :"https://placeimg.com/200/200/nature"
//             }
//         ];


//         cardContent.forEach((el) => {
//             $template.querySelector("img").setAttribute("src",el.url);
//             $template.querySelector("img").setAttribute("alt",el.title);
//             $template.querySelector("figcaption").textContent = el.title;


//             let $clone = document.importNode($template,true);
//             $fragmen.appendChild($clone);


//             $card.appendChild($fragmen);

//         })



document.write("Manejadores de eventos");


function holamundo(event) {
    alert(" Hola Desde el manejador de evento como atributo");
    console.log(event)
    console.log("Accedio")
    console.log(new Date())
}

function saludar(nombre = "deconocido") {
    alert(`hola des saludar a ${nombre}`);
    console.log(event);
}


const btn_semantico = document.getElementById("btn_semantico");

btn_semantico.onclick = holamundo;
btn_semantico.onclick = function () {
    alert("Hola desde el manejador de evento semantico")

    const dato = () => {
        console.log(Math.round(Math.random() * 100));
    }
    console.log(Math.round(Math.random() * 10))

    dato();
}

const btn_multiple = document.getElementById("btn_multiples");

btn_multiple.addEventListener("click", holamundo);
btn_multiple.addEventListener("click", (e) => {
    console.log("hola desde el manejador de eventos multiples")
    alert("hola desde el manejador de eventos multiples")
    console.log(e);
    console.log("prueba")
    console.log(event)
})
btn_multiple.addEventListener("click", () => {
    saludar('sergio');
});


const $remove_evento = document.getElementById("remove_evento");
const $prueba = document.getElementById("prueba");




const removerDobleClick = (e) => {
    alert("Removiendo evento desde Removedor de eventos");
    console.log(e.type);
    $remove_evento.removeEventListener("dblclick", removerDobleClick);
    $remove_evento.disabled = true;
}

$remove_evento.addEventListener("dblclick", removerDobleClick);
$remove_evento.addEventListener("click", () => {
    $remove_evento.disabled = false;
    console.log('entro')

})


$prueba.addEventListener("click", () => {
    $remove_evento.disabled = false;

})


const $section_div = document.querySelectorAll(".section_div div");

const $link_div = document.querySelector("#link-div");
console.log($link_div)
console.log($section_div)


function flujoEventos(event) {
    console.log(`Hola desde ${this.className}, y el click lo origino ${event.target.className}`)

}

// $section_div.forEach((div) => {
//     div.addEventListener("click",flujoEventos)

// })
// $section_div.forEach((div) =>{
//     div.addEventListener("click",flujoEventos,{
//         capture:true,
//         once:true,
//     });
// })


$link_div.addEventListener("click", (event) => {
    alert("Hola te saluda Sergio Redondo");
    event.preventDefault();

})


document.addEventListener("click", (e) => {

    console.log("click desde", e.target)
    // if(event.target.matches())

    if (e.target.matches(".section_div div")) {
        flujoEventos(event);
    }

    if (e.target.matches("#prueba")) {
        document.getElementById("btn_multiples").disabled = true;
    }
})



window.addEventListener("resize", (e) => {
    console.clear();
    console.log("************ Event resize *************")
    console.log(window.innerHeight);
    console.log(window.innerWidth);
    console.log(window.outerHeight);
    console.log(window.outerWidth)

})


window.addEventListener("scroll",(e)=> {
    console.log("************ Event Scroll *************")
    console.log(window.scrollY);
    console.log(window.scrollX);
})


window.addEventListener("DOMContentLoaded",(e)=>{
   
    console.log("************ Event DOMdocumentLoad *************")
    console.log(window.innerHeight);
    console.log(window.innerWidth);
    console.log(window.outerHeight);
    console.log(window.outerWidth)
});


window.addEventListener("load",(e)=> {
    
    console.log("************ Event load *************")
    console.log(window.innerHeight);
    console.log(window.innerWidth);
    console.log(window.outerHeight);
    console.log(window.outerWidth)
})



const $btnOpen = document.getElementById("btn-open"),
$btnClose = document.getElementById("btn-close"),
$btnOtro = document.getElementById("btn-otro");

let ventana;
$btnOpen.addEventListener("click",(e)=>{

   ventana   = window.open("https://www.google.com");
})

$btnClose.addEventListener("click",(e)=>{
    ventana.close();
})

$btnOtro.addEventListener("click",(e)=>{
    window.print()
})


console.log(navigator.connection)




