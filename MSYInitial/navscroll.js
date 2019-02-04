window.onscroll = function() {scrollFunction()};



function scrollFunction() {
  if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
    document.getElementById("navbar").style.visibility = "visible";
  } else {
    document.getElementById("logo").style.visibility = "visible";
    document.getElementById("logobox").style.visibility = "visible";

    document.getElementById("navP").style.visibility = "visible";   
    document.getElementById("navL").style.visibility = "visible"; 
    document.getElementById("navM").style.visibility = "visible"; 
    document.getElementById("navA").style.visibility = "visible"; 
    document.getElementById("navS").style.visibility = "visible";  
  }
}


function updateDisplay(){
    var currentDisplay = document.getElementById('theNavbar');
    if(navbar.className === 'navbar'){
        currentDisplay.className += 'current'
    }
    else{
        currentDisplay.className = 'navbar'
    } 
}

var currSlide = 1;
slidePresented(currSlide);

function updateSlides(incrementor){
    currSlide = currSlide + incrementor;
    slidePresented(currSlide);
}
function goToSlide(incrementor){
    currSlide = incrementor;
    slidePresented(currSlide);
}
function slidePresented(incrementor){
    var circlePosition = document.getElementByClassName("slideCircle");

    var slides = document.getElementByClassName("slide");

    var index;

    if(incrementor > slides.length) {
        currSlide=1;
    }if(incrementor < 1){
        currSlide = slides.length;
    }
    for(i = 0; i<slidse.length; i++){
        slides[i].style.display = "none";
    }
    for(i = 0; i<circlePosition.length; i++){
        circlePosition[i].className = circlePosition[i].className.replace(" active", "");
    }
    slides[currSlide-1].style.display = "block";
    circlePosition[currSlide-1].className += " active";
}