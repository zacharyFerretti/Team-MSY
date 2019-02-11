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

prodContainer.onscroll = function() {itemScrollFunction()};

function itemScrollFunction(){
    if(prodContainer.scrollLeft<10){
        document.getElementById("scrArrow").style.visibility = "visible";
    }
    else{
        document.getElementById("scrArrow").style.visibility = "hidden";
    }
}

var basketOpen = false;

function expandBasket(){
    if (basketOpen == false) {
        basketOpen = true;
        document.getElementById("basketBar").style.height = "200px";
        document.getElementById("basketContainer").style.display = "flex";
    }
    else{
        basketOpen = false;
        document.getElementById("basketBar").style.height = "20px";
        document.getElementById("basketContainer").style.display = "none";
    }
}

var removeButtons = document.getElementsByClassName('basketRemove');
for (var i = 0; i < removeButtons.length; i++ ) {
    var button = removeButtons[i];
    button.addEventListener('click', function(){
        var buttonClicked = event.target;
        buttonClicked.parentElement.remove();

    })
};

var basket = [];

function addClicked(e){

    var name = e.parentElement.children[1].innerText;
    var price = e.parentElement.children[2].innerText;
    var src = e.parentElement.children[0].src;
    addToBasket(name, price, src);

    basket.push(name);
    document.getElementById("bNo").innerHTML = "("+ basket.length +")";

}

function addToBasket(name, price, src){

    var basketSlot = document.createElement('span');
    basketSlot.setAttribute( 'class', 'basketBox' );
    var basketItems = document.getElementsByClassName('basketContainer')[0];
    var basketSlotContents = `

                                    <img class="basketImage" src="${src}" alt="Laptop">
                                    <div class="basketName">${name}</div>
                                    <div class="basketPrice">${price}</div>
                                    <input class="basketQuantity" type="number" value=1>
                                    <span class="basketRemove" onclick="parentElement.remove()">REMOVE</span>

                            `
                            basketSlot.innerHTML = basketSlotContents;
    basketItems.append(basketSlot);

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
    var circlePosition = document.getElementsByClassName("slideCircle");

    var slides = document.getElementsByClassName("slide");
    
    var index;
    
    if(incrementor > slides.length) {
        currSlide=1;
    }if(incrementor < 1){
        currSlide = slides.length;
    }
    for(i = 0; i<slides.length; i++){
        slides[i].style.display = "none";
    }
    for(i = 0; i<circlePosition.length; i++){
        circlePosition[i].className = circlePosition[i].className.replace(" active", "");
    }
    slides[currSlide-1].style.display = "block";
    circlePosition[currSlide-1].className += " active";
}