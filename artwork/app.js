window.addEventListener("wheel", (event) => {
    console.log(event)
    const delta = Math.sign(event.deltaY);
    
    console.log(delta);
    if(delta == 1){
        slidText();
        slideImagesFront();
        slideImagesBack()
    }
    else{
       
        slideImagesBackFront()
        slideBackImagesBack()
        slidTextBack()
    }
   
});


window.addEventListener('keydown', checkKey => {
   
    
    if (checkKey.keyCode == '38') {
        // up arrow
        slideImagesBackFront()
        slideBackImagesBack()
        slidTextBack()
    }
    else if (checkKey.keyCode == '40') {
        // down arrow
        slidText();
        slideImagesFront();
        slideImagesBack()
    }
    else if (checkKey.keyCode == '37') {
       // left arrow
       slideImagesBackFront()
       slideBackImagesBack()
       slidTextBack()
    }
    else if (checkKey.keyCode == '39') {
       // right arrow
       slidText();
        slideImagesFront();
        slideImagesBack()
    }

   
   
})

//button
function changeImages(){
    slidText();
    slideImagesFront();
    slideImagesBack()
}
function prevImages(){
    slideImagesBackFront()
    slideBackImagesBack()
    slidTextBack()
}
function slideImagesFront() {
    let images = [...document.querySelectorAll(".artwork-img-front")];
    
    let activeImage = images
        .map((image, index) => {
            if (image.classList.contains("active-img-front")) {
                return { index, image };
            }
        })
        .filter(item => item)
        .pop();
       
    let activeIndex = activeImage.index;
    let nextActiveIndex = activeIndex + 1;

    if (nextActiveIndex > images.length - 1) {
        nextActiveIndex = 0;
    }

    images[activeIndex].classList.remove("active-img-front");
    images[activeIndex].classList.remove("clip-show-front");
    images[activeIndex].classList.add("clip-hide-front");

    images[nextActiveIndex].classList.add("active-img-front");
    images[nextActiveIndex].classList.add("clip-show-front");
    images[nextActiveIndex].classList.remove("clip-hide-front");
}

function slideImagesBack() {
    let images = [...document.querySelectorAll(".artwork-img")];
    let activeImage = images
        .map((image, index) => {
            if (image.classList.contains("active-img")) {
                return { index, image };
            }
        })
        .filter(item => item)
        .pop();
    let activeIndex = activeImage.index;
    let nextActiveIndex = activeIndex + 1;

    if (nextActiveIndex > images.length - 1) {
        nextActiveIndex = 0;
    }

    images[activeIndex].classList.remove("active-img");
    images[activeIndex].classList.remove("clip-show");
    images[activeIndex].classList.add("clip-hide");

    images[nextActiveIndex].classList.add("active-img");
    images[nextActiveIndex].classList.add("clip-show");
    images[nextActiveIndex].classList.remove("clip-hide");
}

function slidText() {
    let artworks = [...document.querySelectorAll(".artwork")];
    let activeArtwork = artworks
        .map((artwork, index) => {
            if (artwork.classList.contains("active")) {
                return { artwork, index };
            }
        })
        .filter(item => item)
        .pop();
    let activeIndex = activeArtwork.index;
    let nextActiveIndex = activeIndex + 1;

    if (nextActiveIndex > artworks.length - 1) {
        nextActiveIndex = 0;
    }
    artworks[activeIndex].classList.remove("active");
    artworks[nextActiveIndex].classList.add("active");
}


// move back
function slideImagesBackFront() {
    let images = [...document.querySelectorAll(".artwork-img-front")];
    
    let activeImage = images
        .map((image, index) => {
            if (image.classList.contains("active-img-front")) {
                return { index, image };
            }
        })
        .filter(item => item)
        .pop();
       
    let activeIndex = activeImage.index;
    let nextActiveIndex = activeIndex - 1;

    if (nextActiveIndex < 0) {
        nextActiveIndex = images.length - 1;
    }

    images[activeIndex].classList.remove("active-img-front");
    images[activeIndex].classList.remove("clip-show-front");
    images[activeIndex].classList.add("clip-hide-front");

    images[nextActiveIndex].classList.add("active-img-front");
    images[nextActiveIndex].classList.add("clip-show-front");
    images[nextActiveIndex].classList.remove("clip-hide-front");
}
function slideBackImagesBack() {
    let images = [...document.querySelectorAll(".artwork-img")];
    let activeImage = images
        .map((image, index) => {
            if (image.classList.contains("active-img")) {
                return { index, image };
            }
        })
        .filter(item => item)
        .pop();
    let activeIndex = activeImage.index;
    let nextActiveIndex = activeIndex - 1;

   
    if (nextActiveIndex < 0) {
        nextActiveIndex = images.length - 1;
    }

    images[activeIndex].classList.remove("active-img");
    images[activeIndex].classList.remove("clip-show");
    images[activeIndex].classList.add("clip-hide");

    images[nextActiveIndex].classList.add("active-img");
    images[nextActiveIndex].classList.add("clip-show");
    images[nextActiveIndex].classList.remove("clip-hide");
}

function slidTextBack() {
    let artworks = [...document.querySelectorAll(".artwork")];
    let activeArtwork = artworks
        .map((artwork, index) => {
            if (artwork.classList.contains("active")) {
                return { artwork, index };
            }
        })
        .filter(item => item)
        .pop();
    let activeIndex = activeArtwork.index;
    let nextActiveIndex = activeIndex - 1;

   
    if (nextActiveIndex < 0) {
        nextActiveIndex = artworks.length - 1;
    }
    artworks[activeIndex].classList.remove("active");
    artworks[nextActiveIndex].classList.add("active");
}