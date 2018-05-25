const name = 'Núria';
console.log(name);


let carousels = document.getElementsByClassName('image-carousel');

[].forEach.call(carosuels, function(c) {
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
});