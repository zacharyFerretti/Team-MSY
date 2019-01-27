window.onscroll = function() {scrollFunction()};



function scrollFunction() {
  if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {

    document.getElementById("navbar").style.visibility = "visible";


  } else {

    document.getElementById("navbar").style.visibility = "hidden";
    //document.getElementById("navbar").style.opacity = "0.5";
    document.getElementById("logo").style.visibility = "visible";
    document.getElementById("logobox").style.visibility = "visible";

    document.getElementById("navP").style.visibility = "visible";   
    document.getElementById("navL").style.visibility = "visible"; 
    document.getElementById("navM").style.visibility = "visible"; 
    document.getElementById("navA").style.visibility = "visible"; 
    document.getElementById("navS").style.visibility = "visible";  

    /*document.getElementById("navP").style.opacity = "1";
    document.getElementById("navL").style.opacity = "1";
    document.getElementById("navM").style.opacity = "1";
    document.getElementById("navA").style.opacity = "1";
    document.getElementById("navS").style.opacity = "1";*/
  }
}


