//Menu responsive
    var btnMenuOpen = document.getElementById("btnMenuOpen"),
    btnMenuClose = document.getElementById("btnMenuClose"),
    menuResponsive = document.getElementById("menuBar"),
    enlaces = document.getElementById("enlaces");
    // Click Abrir
    btnMenuOpen.addEventListener("click", function(){
    menuResponsive.classList.add("active");
    });

    //click Cerrar
    btnMenuClose.addEventListener("click", function(){
        menuResponsive.classList.remove("active");
        });

    // Cerrar menu con enlaces
    enlaces.addEventListener("click", function () {
        menuResponsive.style.transitionDelay = "0.5s"
        menuResponsive.classList.remove("active");
    });

//Scroll Slider
    var contenedor = document.querySelector('.slider'),
    btnLeft = document.getElementById('btn-left'),
    btnRight = document.getElementById('btn-right');
    
    //evento para btn right
    btnRight.addEventListener('click', function(){
        contenedor.scrollLeft += contenedor.offsetWidth;
    })

    //evento para btn izquierdo
    btnLeft.addEventListener('click', function(){
        contenedor.scrollLeft -= contenedor.offsetWidth;
    })

    //VALIDACION FORMULARIO
    var formulario = document.getElementById("formulario")

 function validar (e) {
     var inputNombre = document.getElementById("nombre").value,
         inputEmail  = document.getElementById("email").value,
         inputComments = document.getElementById("comentarios").value,
         alertSuccess = document.getElementById("alertSuccess"),
         alertError = document.getElementById("alertError")
  
        if (inputNombre == 0 || inputComments == 0 || inputEmail == 0) {
            e.preventDefault()
            alertError.classList.remove('hide');
            alertError.classList.add('show')

            setTimeout(function () {
                alertError.classList.remove('show');
            alertError.classList.add('hide')
            }, 2000)
        }
        else {
            e.preventDefault()
            alertSuccess.classList.remove('hide');
            alertSuccess.classList.add('show')

            setTimeout(function () {
                alertSuccess.classList.remove('show');
            alertSuccess.classList.add('hide')
            }, 2000)
            inputNombre = "";
            inputEmail = "";
            inputComments ="";
        }

 }


    //EVentos del formulario
    formulario.addEventListener("submit", validar);

  // BOTON SCROLL TOP
var  btnTop = document.getElementById("btn-top"),
logo = document.getElementById("logo");


// DETECTAMOS SCROLL EN NUESTRA PAGINA WEB
window.addEventListener("scroll", function (){
var  scroll = document.documentElement.scrollTop,
     fullSize = document.documentElement.offsetHeight,
     sizeVP = document.documentElement.clientHeight;


if (scroll > 100) {
     btnTop.classList.add("show");
}else{
     btnTop.classList.remove("show");
}

// MODIFICAR ELEMENTO CUANDO LLEGUE A FINAL DE PAGINA
if (fullSize == (scroll + sizeVP)) {
    btnTop.classList.add("scrollFinal"); 
}else{
     btnTop.classList.remove("scrollFinal");
}
});


// DETECTAMOS EVENTO CLICK EN EL BOTON
btnTop.addEventListener("click", function () {
window.scrollTo(0,0);
});

// DETECTAR EVENTO CLIC EN EL LOGO
logo.addEventListener("click", function () {
window.scrollTo(0,0);
});

   
