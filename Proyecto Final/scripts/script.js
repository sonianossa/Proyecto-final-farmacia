/*Menu hamburguesa: se realizara el llamado al icono de hamburguesa formado por un boton
 a la barra que estan dentro del boton implementado con 3 span y los 
enlaces del menu por lo que se implementa primero la accion de queryselector para llamar a los elementos con clase dada
para css;despues en la misma funcion se llama a la realización del evento click del objeto hamburguerIcon implentando
la función flecha que es lo que hace el despliegue de los enlaces  se implementa un return para que haga retorno a las barras de span
dadas tambien con un foreach sino seda el return al foreach el menu no cambia a estado animado fuera de este return se lleva acabo
el classlist con el toggle el cual alternara la clase ul de header__menuNavegacion de display none
a la clase activado con displey flex dada en css*/
function eventos() {
  let hamburguerIcon = document.querySelector(".boton__hamburguerIcon");
  let enlaces = document.querySelector(".header__menuNavegacion");
  let barras = document.querySelectorAll(".boton__hamburguerIcon span");

  hamburguerIcon.addEventListener("click", () => {
    enlaces.classList.toggle("activado");
    return barras.forEach((barra) => {
      barra.classList.toggle("animado"); //este foreach lo que realiza es el cambio del menu
      //hamburguesa a la X por lo que tiene que cambiar a estado animado como se encuentra en css para que el toggle
      //funcione y el forEach de la vuelta a los arrays en este caso cada una de las barras de span al momento de realizar el click y
      //cambiar la animacion llamando a la elemento creado barra y retorne la función cada vez que se generaun click.
    });
  });

  /*boton top:Se le aplica a la variable boton un addvenListener para poder realizar la interacción de click 
   cuando el boton aparezca y vuelva hacia arriba del todo es tambien que dicha función de funcionTop 
   retorna o es igual porque no tiene scroll alguno y esta en el top superior de la página
  a cero el el documen.body.scrollTop se implementa para los navegador safari y
   el document.documenElement.scrollTop para los navegadores chrome, explore, firefox y 
   opera */
  let boton = document.getElementById("btn__top");
  boton.addEventListener("click", funcionTop);
  function funcionTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  /*Acordeon:Se llamara primero a la clase dervicios__acordeon para la variable acordeonBotones y asimismo
   se hace un bucle for con el array acordeonBotones para que de la vuelta a todos los botones con el evento click
   Despues la función desplegar se referira asimismo con e.target que es lo que provoca el evento en el boton 
   classlist es la clase lista que tiene el boton por esto tambien se agrega toggle con el classList para que se coloque o 
   se quite la clase activo cuando se realiza el evento click, es por esto que en el primer click se activa y en el 
   segundo se desactiva, despues se toma una nueva variable en este caso contenedor para que llame al siguiente hermano del 
   botón que es contenido__dermocosmetica y contenido__fitoterapia entonces si la variable contenedor que es igual a la clase contenido__dermocosmetica
   si el display es block se coloca display none es decir si se despliega se coloca block y sino es none*/
  let acordeonBotones = document.getElementsByClassName("servicios__acordeon");
  for (let i = 0; i < acordeonBotones.length; i++) {
    acordeonBotones[i].addEventListener("click", desplegar);
  }
  function desplegar(e) {
    e.target.classList.toggle("activo");
    let contenedor = e.target.nextElementSibling;
    if (contenedor.style.display == "block") {
      contenedor.style.display = "none";
    } else {
      contenedor.style.display = "block";
    }
  }
}

/*Inicio funcion de indicador de scroll dicha funcion lo que realiza es que al id barraScroll en el html le da un 
style de width dependiendo el resultado y/o porcentaje del scroll que realice el usuario, asimismo explicando toda
la función se dan tres variables la primera llamara al scrollTop que indicara el desplazamiento vertical del contenido del elemento
la segunda varible realiza la operacion entre la altura del scroll que se tenga en el documento menos la altura a la que este scrolleando el usuario
todo esto da como resultado el porcentaje que debe ocupar el indicador___ progreso*/
function indicadorScroll() {
  let lectorScroll = document.documentElement.scrollTop;
  let alturaScroll =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let resultadoScroll = (lectorScroll / alturaScroll) * 100;
  document.getElementById("barraScroll").style.width = resultadoScroll + "%";
}
/*boton scroll top:La funcion de scroll se define si al realizar el scroll en cualquiera de los
navegadores es mayor al 80% de scroll se hará visible el boton cambiando de display none
a display block */
function funcionScroll() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("btn__top").style.display = "block";
  } else {
    document.getElementById("btn__top").style.display = "none";
  }
}

window.onscroll = function () {
  indicadorScroll();
  funcionScroll();
};

window.onload = eventos;
