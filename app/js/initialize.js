var PI2 = Math.PI*2;
var HALF_PI = Math.PI/2;

var MaxWidth = window.innerWidth;
var MaxHeight = window.innerHeight;
var HalfWidth = MaxWidth / 2;
var HalfHeight = MaxHeight / 2;

var _resize = debounce(onWindowResize, 200);
window.addEventListener('resize', _resize, false);

function onWindowResize(){
    MaxWidth = window.innerWidth;
    MaxHeight = window.innerHeight;
    HalfWidth = MaxWidth / 2;
    HalfHeight = MaxHeight / 2;
}

var PageSmoothScroll;

// Trigger functions when the initial HTML document
// has been completely loaded and parsed,
// without waiting for stylesheets, images, and
// subframes to finish loading
document.addEventListener('DOMContentLoaded', function() {
    // Do something
    
});


// Trigger functions after page is completely loaded
window.onload = function() {
    // Do something, remove preloader perhaps
    console.log("Page fully loaded.");
    console.log("Initialize.js");

    // parallax
    // DEBE ejecutarse aquí: después de terminar de cargar todas las imágenes
    var parallax = new Parallax();
    RAF.add(parallax);

    // General inview animation, linked with "Cascading" system
    var inviewObjects = document.getElementsByClassName('mbrt-cascade');
    for (var i = 0; i < inviewObjects.length; i++) {
        var inview = InView(inviewObjects[i], function(isInView, data) {
            if ((this.el.getBoundingClientRect().top - window.innerHeight) > 0) {
                this.el.classList.remove('animate');
            } else {
                this.el.classList.add('animate');
            }
        })
    }

    // Smooth scrolling
    PageSmoothScroll = new SmoothScroll();
    RAF.add(PageSmoothScroll);


    RAF.init();
}