// Botón cierre aside

const closeAsideBtn = document.getElementById("close-sidebar-btn"); // botón X de cierre sidebar
const aside = document.getElementById("aside"); //etiqueta aside

closeAsideBtn.addEventListener("click", () => {
  aside.classList.add("hidden");
});

// ----------------------------------------IMÁGEN------------------------------------------

const btnImg = document.getElementById("img-btn"); //Botón IMÁGEN del Header
const imgSection = document.getElementById("img-section"); //Section Sidebar Imágen
const txtSection = document.getElementById("txt-section"); //Section Sidebar Texto

btnImg.addEventListener("click", () => {
  aside.classList.remove("hidden");
  imgSection.classList.remove("hidden");
  txtSection.classList.add("hidden");
});

// ----------------------------------------como quiero que inicie-----------------------
aside.classList.remove("hidden"); //quiero que se vea el aside
imgSection.classList.remove("hidden"); //quiero que no se vea la section imagen
txtSection.classList.add("hidden"); //qiuero que se vea la section texto

//Modo claro - oscuro (aka jedi-mode/sithmode)
const lightBtn = document.getElementById("jedi-btn"); //Btn modo claro
const darkBtn = document.getElementById("sith-btn"); //Btn modo oscuro
const body = document.getElementById("all");

const jedi = darkBtn.addEventListener("click", () => {
  body.classList.add("jedi-mode");
  body.classList.remove("sith-mode");
  darkBtn.classList.toggle("hidden");
  lightBtn.classList.toggle("hidden");
});
const sith = lightBtn.addEventListener("click", () => {
  body.classList.add("sith-mode");
  body.classList.remove("jedi-mode");
  darkBtn.classList.toggle("hidden");
  lightBtn.classList.toggle("hidden");
});

// URL IMÁGEN

const urlInput = document.getElementById("url-input"); //Input sidebar IMÁGEN para cargar la imágen

const img = document.getElementById("meme-img"); //div en donde se ubica la imágen subida

urlInput.addEventListener("change", () => {
  img.style.backgroundImage = `url('${urlInput.value}')`;
});

const images = document.querySelectorAll(".img");

images.forEach((image) => {
  let imgsrc = image.getAttribute("src");
  if (imgsrc === "") {
    image.src = "/images/missing.png";
  }
});

//--------------FONDO IMÁGEN - Input color y mezcla---------------------------
const imgWrapper = document.getElementById("img-wrapper"); //Contenedor de imágen
const imgBackgroundColorInput = document.getElementById("img-input-color"); //Input  color para fondo img
const colorName = document.getElementById("img-color-span"); //Span que muestra el valor del color elegido

const imgBackgroundColorBlend = document.getElementById("background-blend"); //Select con opciones mezcla fondo

imgBackgroundColorInput.addEventListener("change", () => {
  const imgBkgdColor = imgBackgroundColorInput.value;
  (colorName.innerHTML = imgBkgdColor),
    (img.style.backgroundColor = imgBkgdColor);
});

imgBackgroundColorBlend.addEventListener("change", () => {
  let blend = imgBackgroundColorBlend.value;
  img.style.backgroundBlendMode = blend;
});

//-----------------------FILTROS IMG----------------------------------------------

const brigtnessRange = document.getElementById("brightness"); //Input brillo
const opacityRange = document.getElementById("opacity"); //Input opacidad
const contrastRange = document.getElementById("contrast"); //Input contraste
const blurRange = document.getElementById("blur"); //Input Blur
const grayScaleRange = document.getElementById("grayscale"); //Input Escala de Grises
const sepiaRange = document.getElementById("sepia"); //Input sepia
const hueRange = document.getElementById("hue"); //Input hue
const saturateRange = document.getElementById("saturate"); //Input saturación
const invertRange = document.getElementById("invert"); //Input Negativo

let imgFilter = () => {
  img.style.filter = `brightness(${brigtnessRange.value}) opacity(${opacityRange.value}) contrast(${contrastRange.value}%) blur(${blurRange.value}px) grayscale(${grayScaleRange.value}%) sepia(${sepiaRange.value}%) hue-rotate(${hueRange.value}deg) saturate(${saturateRange.value}%) invert(${invertRange.value})`;
};

brigtnessRange.addEventListener("input", imgFilter);
opacityRange.addEventListener("input", imgFilter);
contrastRange.addEventListener("input", imgFilter);
blurRange.addEventListener("input", imgFilter);
grayScaleRange.addEventListener("input", imgFilter);
sepiaRange.addEventListener("input", imgFilter);
hueRange.addEventListener("input", imgFilter);
saturateRange.addEventListener("input", imgFilter);
invertRange.addEventListener("input", imgFilter);

//---------------------------------Botón Restablecer Filtros-----------------------------

const restart = (e) => {
  e.preventDefault();
  img.style.filter = `brightness(1) opacity(1) contrast(100%) blur(0px) grayscale(0%) sepia(0%) hue-rotate(0deg) saturate(100%) invert(0)`;

  brigtnessRange.value = "1";
  opacityRange.value = "1";
  contrastRange.value = "100";
  blurRange.value = "0";
  grayScaleRange.value = "0";
  sepiaRange.value = "0";
  hueRange.value = "0";
  saturateRange.value = "100";
  invertRange.value = "0";
};

const restartFilterBtn = document.getElementById("default-filter-btn");
restartFilterBtn.addEventListener("click", (e) => {
  restart(e);
});

// ---------------------------------TEXT SIDEBAR-------------------------------------------

//Botón TEXTO

const btnTxt = document.getElementById("txt-btn");

btnTxt.addEventListener("click", () => {
  aside.classList.remove("hidden");
  imgSection.classList.add("hidden");
  txtSection.classList.remove("hidden");
});

// Ingreso texto superior

const memeTopText = document.getElementById("top-txt-meme"); //texto superior del canvas etiqueta p
const topTxtArea = document.getElementById("top-text-area"); //textarea ingreso texto superior
const memeBottomText = document.getElementById("bottom-txt-meme"); // texto inferior del canvas etiqueta p
const bottomTxtArea = document.getElementById("bottom-text-area"); //textarea ingreso texto inferior

topTxtArea.addEventListener("input", () => {
  let topTxt = topTxtArea.value;
  memeTopText.innerHTML = topTxt;
});

bottomTxtArea.addEventListener("input", () => {
  let bottomTxt = bottomTxtArea.value;
  memeBottomText.innerHTML = bottomTxt;
});

// COLOR DEL TEXTO Y BACKROUND COLOR DEL TXT

const colorInput = document.querySelector(".color-input"); //input type color texto meme
const colorSpan = document.getElementById("color-span"); //span del input color de texto meme
const txtBackgroundColorInput = document.querySelector(
  ".txt-background-color-input"
); // input type color fondo texto meme
const txtBackgroundColorSpan = document.getElementById(
  "txt-background-color-span"
); //span del imput color fondo texto
const transparentBackground = document.getElementById("no-background"); //input checkbox fondo transparente

colorInput.addEventListener("input", () => {
  let color = colorInput.value;
  colorSpan.innerHTML = color;
  memeTopText.style.color = color;
  memeBottomText.style.color = color;
});

txtBackgroundColorInput.addEventListener("input", () => {
  fondo = txtBackgroundColorInput.value;
  txtBackgroundColorSpan.innerHTML = fondo;
  memeTopText.style.backgroundColor = fondo;
  memeBottomText.style.backgroundColor = fondo;
});

transparentBackground.addEventListener("change", (event) => {
  if (event.target.checked) {
    memeTopText.style.backgroundColor = "transparent";
    memeBottomText.style.backgroundColor = "transparent";
    memeTopText.style.position = "absolute";
    memeBottomText.style.position = "absolute";
    memeBottomText.style.bottom = "8px";
  } else {
    memeTopText.style.backgroundColor = fondo;
    memeBottomText.style.backgroundColor = fondo;
    memeBottomText.style.bottom = "0px";
    memeTopText.style.position = "static";
    memeBottomText.style.position = "static";
  }
});

//checkbox "sin texto sup"

const noTopText = document.getElementById("top-txt-non"); //input "sin texto superior"

noTopText.addEventListener("click", () => {
  memeTopText.classList.toggle("hidden");
});

//checkbox "sin texto sup"
const noBottomText = document.getElementById("bottom-txt-non"); //input "sin texto inferior"
noBottomText.addEventListener("click", () => {
  memeBottomText.classList.toggle("hidden");
});

// Fuentes - Selección font-family

const fontsOptions = document.getElementById("fonts"); //Tre etiqueta select con todas las options

fontsOptions.addEventListener("change", () => {
  memeTopText.style.fontFamily = `${fontsOptions.value}`;
  memeBottomText.style.fontFamily = `${fontsOptions.value}`;
});

// Fuentes - Selección font-size

const fSize = document.getElementById("font-size"); //Trae imput tipe number

fSize.addEventListener("change", () => {
  memeTopText.style.fontSize = `${fSize.value}px`;
  memeBottomText.style.fontSize = `${fSize.value}px`;
});
fSize.onkeyup = () => {
  memeTopText.style.fontSize = `${fSize.value}px`;
  memeBottomText.style.fontSize = `${fSize.value}px`;
};

// Fuentes - Alineación texto

const alignLeft = document.getElementById("left-align"); //Botón align left
const alignCenter = document.getElementById("align-center"); //Botón align center
const alignRight = document.getElementById("right-align"); //Botón align right

alignLeft.addEventListener("click", () => {
  memeTopText.style.textAlign = "left";
  memeBottomText.style.textAlign = "left";
});

alignCenter.addEventListener("click", () => {
  memeTopText.style.textAlign = "center";
  memeBottomText.style.textAlign = "center";
});

alignRight.addEventListener("click", () => {
  memeTopText.style.textAlign = "right";
  memeBottomText.style.textAlign = "right";
});

// Botones borde texto

const noBorder = document.getElementById("no-outline-btn"); //Botón NINGUNO
const lightBorder = document.getElementById("jedi-outline-btn"); //Botón CLARO
const darkBorder = document.getElementById("sith-outline-btn"); //Botón OSCURO

noBorder.addEventListener("click", () => {
  memeTopText.style.webkitTextStroke = "transparent";
  memeBottomText.style.webkitTextStroke = "transparent";
});

lightBorder.addEventListener("click", () => {
  memeTopText.style.webkitTextStroke = "1px white";
  memeBottomText.style.webkitTextStroke = "1px white";
});

darkBorder.addEventListener("click", () => {
  memeTopText.style.webkitTextStroke = "2px black";
  memeBottomText.style.webkitTextStroke = "2px black";
});

// Espaciado - Padding top y bottom etiquetas p del canvas

const paddingTxt = document.getElementById("padding-input"); //Trae imput tipe number espaciado

paddingTxt.addEventListener("change", () => {
  memeTopText.style.paddingTop = `${paddingTxt.value}px`;
  memeTopText.style.paddingBottom = `${paddingTxt.value}px`;
  memeBottomText.style.paddingTop = `${paddingTxt.value}px`;
  memeBottomText.style.paddingBottom = `${paddingTxt.value}px`;
});

// Interlineado

const lineHeight = document.getElementById("line-height-input"); //Trae el select con las option de interlineado

lineHeight.addEventListener("change", () => {
  memeTopText.style.lineHeight = `${lineHeight.value}`;
  memeBottomText.style.lineHeight = `${lineHeight.value}`;
});

// ------------------------- Botón Descarga ----------------------------------------

const downloadBtn = document.getElementById("download"); //Btn descarga meme

downloadBtn.addEventListener("click", () => {
  domtoimage.toBlob(imgWrapper).then((blob) => saveAs(blob, "my-meme.png"));
});
