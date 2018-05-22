
    //Declaración de la variable displayedImage que se une a la clase "displayed-img" del código html
    var displayedImage = document.querySelector('.displayed-img');
    //Declaración de la variable "thumbar" que se une a la clase "thumb-bar" del código html
    var thumbBar = document.querySelector('.thumb-bar');


    /* Bucle for para las imágenes. Se crea la variable i, iniciada en el valor 1 y que aumentará de 
    uno en uno hasta que su valor sea inferior o igual a 10 ya que disponemos de diez imágenes para la galería */
    for(var i = 1; i <= 5; i++) {
    //Declaración de la variable "newImage", que crea un imagen
    var newImage = document.createElement('img');
    /*Esta variable tiene atributos que son una ruta (src), una raíz común para el nombre de las imágenes, cuyo
    número concordará con el valor de la variable i del bucle, de modo que en la primera pasada del bucle carge
    la primera imagen, en la segunda pasada la segunda imagen y así sucesivamente. Y por último todas las imágenes 
    tendrán una terminación .jpg. De esta forma se cargan las imágenes.*/
    newImage.setAttribute('src', '../img/slide' + i + '.jpg');
    //La variable "thumbBar" se adjunta como la hija de "NewImage"
    thumbBar.appendChild(newImage);
    /*Cuando se haga click sobre una de las imágenes se accederá a ella y esta se mostrará en la zona más grande. 
    El elemento e-target indica que esta función solo se aplicará sobre la imagen clicada en concreto.*/
    newImage.onclick = function(e) {
        //Declaración de la variable "imgSrc" que accede al atributo src de las imágenes
        var imgSrc = e.target.getAttribute('src');
    //Se ejecuta la función
        displayImage(imgSrc);
    }

    }

    //Función para que la imagen seleccionada se muestre más grande en la zona superior
    function displayImage(imgSrc) {
    displayedImage.setAttribute('src', imgSrc);

    }


