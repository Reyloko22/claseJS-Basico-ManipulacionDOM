// h1 { color: red }
// .parrafito { ... }
// #pid { ... }


//el document.querySelector, se usa con la finalidad de manejar de forma similar
//los selectores de css. siendo mas sencillo para manejar desde JS
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.getElementsByClassName('.parrafito');
// const pid = document.getElementById('#pid');
const pid = document.getElementById('pid');

const input = document.querySelector('input');

//de esta forma lo que podemos ver es que en la consola se leera 
//cada moviemiento que ocurra con el objeto seleccionado
console.log(input.value);


//y en los siguientes otros 2 casos lo que vemos es que podemos identificar todas
//las propiedades que forman parte del objeto u objetos como en el segundo caso
console.log ({input})



console.log({
  h1,
  p,
  parrafito,
  pid,
  input,
});

//de esta forma cambiamos contenido en etiquetas de html y seran mostradas en el navegador
h1.innerHTML = 'Patito <br> Feo';
//la principal diferencia es que innerText hara que la etiqueta se reescriba tal cual esta en el html al navegador
//atencion... son mas seguras estas formas de manipular codigo.
h1.innerText = 'Patito <br> Feo';

//esta es otra forma de manipular clases en el html
// console.log(h1.getAttribute('class'));
// h1.setAttribute('class', 'rojo');


h1.classList.add('rojo');
h1.classList.remove('verde');
// h1.classList.toggle('verde');
// h1.classList.contains('verde');

input.value = "456"


//creacion de elemento en etiqueta ya existente en HTML
const img = document.createElement('img');
//agregar la imagen al elemento e imprimirla en CONSOLA
img.setAttribute('src', 'https://static.platzi.com/static/images/conf/logo_black@2x.png');
console.log(img);
//agregarla en el html para que se vea en el navegador

//para eliminar el texto del pid esta es la solucion del profe
// pid.innerHTML = "";
// pid.appendChild(img);


//esta es la solucion del alumno
pid.replaceWith(img);



//------------------Escuchar elementos mediante eventos-------------------------


const input1 = document.querySelector ('#calculo1');
const input2 = document.querySelector ('#calculo2');


//para llamar los metodos de addEventListener, lo que haremos es
//crear una variable que nos ayudara a conectar la variable con 
//el selector de HTML
const calcButton = document.querySelector ('#buttonCalc');

const pResult = document.querySelector ('#result');

// al haber quitado el selector de onclick lo que haremos
// es agregar un METODO, los metodos se ejecutan con parentesis
//y esto lo que hara es que se maneja adentro de los parentesis 2 argumentos
//el metodo es el reemplazo del escuchador de HTML que usaremos en JS llamado
// addEventListener... lo usaremos asi=

// eventName.addEventListener ('eventDescrption', acctionEvent);

calcButton.addEventListener('click', clickButton);



function clickButton () {
  // console.log('El boton ha sido presionado!');

  // console.log(input1.value + input2.value);

  const sumaInputs = Number(input1.value) + Number(input2.value);

  // lo que haremos es ya habiendo creado una variable o en este caso variable 
  // para almacenar el resultado de la operacion, lo imprimiremos en
  // el html, NO en la consola. usaremos el siguiente codigo:

  pResult.innerText = "Tu resultado es: " + sumaInputs;

}

//otra forma es manejarse con los formularios pero estos
//poseen una forma peculear de eviar informacion a alguna ruta.
//los botones se convierten en typo submit por defecto y en el caso que quisieramos manejarla
//sin que se recargue la pagina usamos el event.preventDefault(), este hace
//que los eventos por defecto no ocurran pero tambien hay que agregar 'event' como parametro para 
//que pueda ser manejado en este caso en la funcion.

//otra forma de manejarlo para que no recargue la pagina es
//agreagndole al boton del formulario en el html que sea de tipo (type=button)
//y no submit.