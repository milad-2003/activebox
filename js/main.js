$(document).ready(function() {
    $(".work").mouseenter(function() {
        $(".work").addClass("hovered--work");
    });

    $(".work").mouseleave(function() {
        $(".work").removeClass("hovered--work");
    });
});

let slideIndex = 0;
showSlide();

function showSlide() {
    let i;
    let slides = document.getElementsByClassName('mySlide');
    let dots1 = document.getElementsByClassName('testimonial1__dots');
    let dots2 = document.getElementsByClassName('testimonial2__dots');
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.opacity = "0";
    }
    
    slideIndex++;
    if (slideIndex > slides.length)
    slideIndex = 1;
    
    for (i = 0; i < dots1.length; i++) {
        dots1[i].className = dots1[i].className.replace(' active', '');
    }
    for (i = 0; i < dots2.length; i++) {
        dots2[i].className = dots2[i].className.replace(' active', '');
    }
    
    slides[slideIndex - 1].style.opacity = '1';
    dots1[slideIndex - 1].className += ' active';
    dots2[slideIndex - 1].className += ' active';
    setTimeout(showSlide, 7000);
}