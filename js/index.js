/**********funciones slider destinos*******/
/****Crea varios slider en la misma pagina con seis fotos cada uno  ****/

const destinos = ["nieve", "playa", "montana"];

destinos.forEach(function (destino) {
  let contador = 0;

  const sliderNext = document.querySelector(
    "div.slider__destinos." + destino + " > button.slider__button.next"
  );
  const sliderPrev = document.querySelector(
    "div.slider__destinos." + destino + " > button.slider__button.prev"
  );
  const sliderImg = document.querySelectorAll(
    "div.slider__destinos." +
      destino +
      " > div.slider__container > img.slider__img"
  );
  const sliderPunto = document.querySelectorAll(
    "div.slider__destinos." +
      destino +
      " > ul.slider__ul > li.slider__li > button.slider__punto"
  );

  if(sliderNext){
  sliderNext.addEventListener("click", () => {
    contador = contador + 1;
    if (contador >= 6) {
      contador = 0;
    }


    sliderImg.forEach((eachImg, i) => {
      sliderImg[i].classList.remove("isActive");
    });

    sliderImg[contador].classList.add("isActive");

    sliderPunto.forEach((eachPunto, i) => {
      sliderPunto[i].classList.remove("isActive");
    });

    sliderPunto[contador].classList.add("isActive");
  });
}
if(sliderPrev){
    sliderPrev.addEventListener("click", () => {
        contador = contador - 1;
    
        if (contador <= -1) {
          contador = 6;
        }
        sliderImg.forEach((eachImg, i) => {
          sliderImg[i].classList.remove("isActive");
        });
        sliderImg[contador].classList.add("isActive");
    
        sliderPunto.forEach((eachPunto, i) => {
          sliderPunto[i].classList.remove("isActive");
        });
    
        sliderPunto[contador].classList.add("isActive");
      });

}
  
if(sliderPunto){
    sliderPunto.forEach((eachPunto, i) => {
        sliderPunto[i].addEventListener("click", () => {
          contador = i;
    
          sliderImg.forEach((eachImg, j) => {
            sliderImg[j].classList.remove("isActive");
          });
          sliderImg[i].classList.add("isActive");
    
          sliderPunto.forEach((eachPunto, j) => {
            sliderPunto[j].classList.remove("isActive");
          });
          sliderPunto[i].classList.add("isActive");
        });
    });
 

};
}); 
  
  
/****Final slaider ****/

/*******funcion formulario*****/
/****Cuando haces click en enviar, sale una pantalla con el texto escrito */

const formButton = document.querySelector(".form__button");
if (formButton) {
  formButton.addEventListener("click", () => {
    alert(
      "tu solicitud a sido enviada,nos pondremos en contacto con usted a la mayor brevedad"
    );
  });
}
/**** Final funcion formulario****/
