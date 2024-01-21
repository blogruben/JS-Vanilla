
const fruta_array = ['manzana','platano','pera','melon','pera','uvas','sandia','tomate','ciruela','almendras'];
const seconds = Math.random() * 1000;

setTimeout( function anadirFruta() {
    const frutas = document.querySelector('ul.frutas');
    const fruta = document.createElement('li');
    fruta.textContent = fruta_array[Math.round(Math.random()*fruta_array.length)];
    frutas.appendChild(fruta);
    fruta.classList.add('newClass');
}, Math.random() * 1000);


setTimeout( function removeFruta() {
    const frutas = document.querySelector('ul.frutas');
    frutas.removeChild(document.querySelector('li'));
}, Math.random() * 1500+5000);


