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