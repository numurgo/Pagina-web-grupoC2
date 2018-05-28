const name = 'Núria';
console.log(name);


/*let carousels = document.getElementsByClassName('image-carousel');

[].forEach.call(carousels, function(c) {
    let next = c.getElementsByClassName('next')[0],
        prev = c.getElementsByClassName('prev')[0],
        bubbles = c.getElementsByClassName('bubbles')[0],
        inner = c.getElementsByClassName('inner')[0],
        imgs = inner.getElementsByTagName('img'),
        currentImageIndex = 0,
        width = 640;

    function switchImage(){
        inner.style.left = -width * currentImageIndex + 'px';
    }

    next.addEventListener('click', function() {
        currentImageIndex++;

        if(currentImageIndex >= imgs.lenght){
            currentImageIndex = 0;
        }

        switchImage();
    });

    prev.addEventListener('click', function() {
        currentImageIndex--;

        if(currentImageIndex < 0){
            currentImageIndex = imgs.lenght - 1;
        }

        switchImage();
    });
});*/


var slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }