// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('select');
//     var instances = M.FormSelect.init(elems, options);

// Botón cierre aside

const closeAsideBtn = document.getElementById('close-sidebar-btn');// botón X de cierre sidebar
const aside = document.getElementById('aside'); //etiqueta aside

closeAsideBtn.addEventListener('click', () => {
  aside.classList.add("hidden")
});

// ----------------------------------------IMÁGEN------------------------------------------

//Botón IMÁGEN

const btnImg = document.getElementById('img-btn'); //Botón IMÁGEN del Header
const imgSection = document.getElementById('img-section'); //Section Sidebar Imágen
const txtSection = document.getElementById('txt-section'); //Section Sidebar Texto

btnImg.addEventListener('click', ( )=>{
aside.classList.remove("hidden")
imgSection.classList.remove("hidden")
txtSection.classList.add("hidden")
});

// ----------------------------------------como quiero que inicie-----------------------
aside.classList.remove("hidden") //quiero que se vea el asside
imgSection.classList.remove("hidden") //quiero que no se vea la section imagen
txtSection.classList.add("hidden") //qiuero que se vea la section texto

// URL IMÁGEN

const urlInput = document.getElementById('url-input'); //Input sidebar IMÁGEN para cargar la imágen

const img = document.getElementById('meme-img'); //div en donde se ubica la imágen subida

urlInput.addEventListener('change', () => {
img.style.backgroundImage = `url('${urlInput.value}')`;
})

// background-image: url('../comun/imagenes/icono.gif');

const images = document.querySelectorAll(".img");

images.forEach((image) => {
  let imgsrc = image.getAttribute("src");
  if (imgsrc === "") {
    image.src = "/images/missing.png";
  }
});


// ---------------------------------TEXT SIDEBAR-------------------------------------------

//Botón TEXTO

const btnTxt = document.getElementById('txt-btn');

btnTxt.addEventListener('click', () => {
  aside.classList.remove("hidden")
  imgSection.classList.add("hidden")
  txtSection.classList.remove("hidden")
})


// Ingreso texto superior

const memeTopText = document.getElementById('top-txt-meme'); //texto superior del canvas etiqueta p
const topTxtArea = document.getElementById('top-text-area'); //textarea ingreso texto superior
const memeBottomText = document.getElementById('bottom-txt-meme');// texto inferior del canvas etiqueta p
const bottomTxtArea = document.getElementById('bottom-text-area'); //textarea ingreso texto inferior

topTxtArea.addEventListener('input', ()=>{
  let topTxt = topTxtArea.value;
  memeTopText.innerHTML = topTxt;
})

bottomTxtArea.addEventListener('input', ()=>{
  let bottomTxt = bottomTxtArea.value;
  memeBottomText.innerHTML = bottomTxt;
})



// COLOR DEL TEXTO Y BACKROUND COLOR DEL TXT

const colorInput = document.querySelector('.color-input'); //input type color texto meme
const colorSpan = document.getElementById('color-span'); //span del input color de texto meme
const txtBackgroundColorInput = document.querySelector('.txt-background-color-input'); // input type color fondo texto meme
const txtBackgroundColorSpan = document.getElementById('txt-background-color-span'); //span del imput color fondo texto
const transparentBackground = document.getElementById('no-background'); //input checkbox fondo transparente


colorInput.addEventListener('input', ()=>{
  let color = colorInput.value;
  colorSpan.style.color = color;
  colorSpan.innerHTML = color;
  memeTopText.style.color = color;
  memeBottomText.style.color = color;
})



txtBackgroundColorInput.addEventListener('input', ()=>{
  fondo = txtBackgroundColorInput.value;
  txtBackgroundColorSpan.style.color = fondo;
  txtBackgroundColorSpan.innerHTML = fondo;
  memeTopText.style.backgroundColor = fondo;
  memeBottomText.style.backgroundColor = fondo;
  
})



// transparentBackground.addEventListener('click', ()=>{
//   if(transparentBackground.checked){
//   memeTopText.classList.add("transparent");
//   memeBottomText.classList.add("transparent");
//   // urlInput.style.backgroundSize = 'cover';
//   // memeTopText.style.position = 'absolute';
//   // memeBottomText.style.position = 'absolute';
  
// }else{
//   memeTopText.classList.remove("transparent");
//   memeBottomText.classList.remove("transparent");
//   // memeTopText.style.position = 'static';
//   // memeBottomText.style.position = 'static';
// }
// })


transparentBackground.addEventListener('change', (event) => {
 

  if (event.target.checked) {
    memeTopText.style.backgroundColor = 'transparent';
    memeBottomText.style.backgroundColor = 'transparent';
    memeTopText.style.position = 'absolute';
    memeBottomText.style.position = 'absolute';
    memeBottomText.style.bottom = "8px";
  }else {
    memeTopText.style.backgroundColor = fondo ;
    memeBottomText.style.backgroundColor = fondo ;
    memeBottomText.style.bottom = "0px";
    memeTopText.style.position = 'static';
    memeBottomText.style.position = 'static';
  }   
});


//checkbox "sin texto sup"

const noTopText = document.getElementById('top-txt-non'); //input "sin texto superior"

noTopText.addEventListener('click', ()=>{
  memeTopText.classList.toggle("hidden")

})

//checkbox "sin texto sup"
const noBottomText = document.getElementById('bottom-txt-non'); //input "sin texto inferior"
noBottomText.addEventListener('click', ()=>{
  memeBottomText.classList.toggle("hidden")
})

// Fuentes - Selección font-family

const fontsOptions = document.getElementById('fonts'); //Tre etiqueta select con todas las options

// let arial = document.getElementById('arial');
// let arima =  document.getElementById('arima');
// let titan = document.getElementById('titan-one');
// let openSans = document.getElementById('open-sans');
// let hevetica = document.getElementById('helvetica');
// let impact = document.getElementById('impact');
// let verdana = document.getElementById('verdana');

// const fonts = () => {
//   memeTopText.style.fontFamily = `${fontFamily.value}`

// };

fontsOptions.addEventListener('change', ()=>{
  memeTopText.style.fontFamily = `${fontsOptions.value}`
  memeBottomText.style.fontFamily = `${fontsOptions.value}`
})


// Fuentes - Selección font-size

const fSize = document.getElementById('font-size'); //Trae imput tipe number

fSize.addEventListener('change', ()=>{
  memeTopText.style.fontSize = `${fSize.value}px`
  memeBottomText.style.fontSize = `${fSize.value}px`
})
fSize.onkeyup = ()=>{
  memeTopText.style.fontSize = `${fSize.value}px`
  memeBottomText.style.fontSize = `${fSize.value}px`
}

// Fuentes - Alineación texto

const alignLeft = document.getElementById('left-align'); //Botón align left
const alignCenter = document.getElementById('align-center'); //Botón align center
const alignRight = document.getElementById('right-align'); //Botón align right

alignLeft.addEventListener('click', () => {
  memeTopText.style.textAlign = 'left'
  memeBottomText.style.textAlign = 'left'
})

alignCenter.addEventListener('click', () => {
  memeTopText.style.textAlign = 'center'
  memeBottomText.style.textAlign = 'center'
})

alignRight.addEventListener('click', () => {
  memeTopText.style.textAlign = 'right'
  memeBottomText.style.textAlign = 'right'
})

// Botones borde texto

const noBorder = document.getElementById('no-outline-btn'); //Botón NINGUNO
const lightBorder = document.getElementById('jedi-outline-btn'); //Botón CLARO
const darkBorder = document.getElementById('sith-outline-btn'); //Botón OSCURO

noBorder.addEventListener('click', ()=>{
  memeTopText.style.webkitTextStroke  = 'transparent'
  memeBottomText.style.webkitTextStroke  = 'transparent'
})

lightBorder.addEventListener('click', ()=>{
  memeTopText.style.webkitTextStroke = '1px white';
  memeBottomText.style.webkitTextStroke = '1px white';
})

darkBorder.addEventListener('click', ()=>{
  memeTopText.style.webkitTextStroke = '2px black';
  memeBottomText.style.webkitTextStroke = '2px black';
})

// Espaciado - Padding top y bottom etiquetas p del canvas

const paddingTxt = document.getElementById('padding-input'); //Trae imput tipe number espaciado

paddingTxt.addEventListener('change', ()=>{
  memeTopText.style.paddingTop = `${paddingTxt.value}px`;
  memeTopText.style.paddingBottom = `${paddingTxt.value}px`;
  memeBottomText.style.paddingTop = `${paddingTxt.value}px`;
  memeBottomText.style.paddingBottom = `${paddingTxt.value}px`;
});

// Interlineado

const lineHeight = document.getElementById('line-height-input'); //Trae el select con las option de interlineado

lineHeight.addEventListener('change', ()=>{
  memeTopText.style.lineHeight = `${lineHeight.value}`;
  memeBottomText.style.lineHeight = `${lineHeight.value}`;
})


// ---------------------------------IMG SIDEBAR-------------------------------------------




