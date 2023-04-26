/*******funcion formulario*****/

function enviarformulario(){
    alert("tu solicitud a sido enviada,nos pondremos en contacto con usted a la mayor brevedad");
}



/**********funciones slider destinos*******/

function enviarformulario(){
    alert("tu solicitud a sido enviada,nos pondremos en contacto con usted a la mayor brevedad");
}

/**********funciones slider destinos*******/

const destinos = ['alaska', 'playa', 'montana'];

destinos.forEach(function(destino){
    let contador = 0;

    const sliderNext = document.querySelector( 'div.slider__destinos.' +destino+ ' > button.slider__button.next');
    const sliderPrev = document.querySelector( 'div.slider__destinos.' +destino+ ' > button.slider__button.prev');
    const sliderImg = document.querySelectorAll( 'div.slider__destinos.' +destino+ ' > div.slider__container > img.slider__img');
    const sliderPunto = document.querySelectorAll('div.slider__destinos.' +destino+ ' > ul.slider__ul > li.slider__li > button.slider__punto');

    sliderNext.addEventListener( 'click',()=>{
        contador = contador + 1;
        if( contador>= 6 ){
            contador = 0;
        }
         
        sliderImg.forEach( ( eachImg , i )=>{
            sliderImg[i].classList.remove( 'isActive');
            
        });
        
        sliderImg[contador].classList.add('isActive');
        
        sliderPunto.forEach(( eachPunto , i)=>{
            sliderPunto[i].classList.remove( 'isActive');
        });
        
        sliderPunto[contador].classList.add('isActive');


    })

    sliderPrev.addEventListener( 'click',()=>{
        contador = contador - 1;

        if( contador<=-1 ){
            contador = 6;

        }
        sliderImg.forEach( ( eachImg , i )=>{
            sliderImg[i].classList.remove( 'isActive');
            
        });
        sliderImg[contador].classList.add('isActive');

        sliderPunto.forEach(( eachPunto , i)=>{
            sliderPunto[i].classList.remove( 'isActive');
        });
        
        sliderPunto[contador].classList.add('isActive');

    });

    sliderPunto.forEach(( eachPunto , i)=>{
        sliderPunto[i].addEventListener('click',()=>{

            contador = i;

            sliderImg.forEach(( eachImg , j )=>{
                sliderImg[j].classList.remove('isActive');

            });
            sliderImg[i].classList.add('isActive');

            sliderPunto.forEach(( eachPunto , j)=>{
                sliderPunto[j].classList.remove('isActive');

            });
            sliderPunto[i].classList.add('isActive');
        });
    });
});


