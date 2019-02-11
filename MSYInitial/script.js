//JS For Fixed Scrolling
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
//Map JS
function initMap(){
  
    var myLatLng = {lat: -25.363, lng: 131.044};

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: myLatLng
    });
    

     new google.maps.Marker({
      position: {lat:-26.363, lng:130.044},
      map: map,
      title: 'Hello World!'
    });

    function newMarker(lt, lg){

      new google.maps.Marker({
        position: {lat: lt, lng: lg},
        map: map,
        title: 'shop'
    });
  }
  newMarker(-27.65, 153.15)
  newMarker(-33.96365, 151.093827)
  newMarker(-35.330400, 149.179830)
  newMarker(-38.151700, 144.359300)
  newMarker(-42.833519, 147.262955)
  newMarker(-34.958591, 138.544266)
  newMarker(-32.014710, 115.926980)
  
}

//JS For Product Scrolling
prodContainer.onscroll = function() {itemScrollFunction()};

function itemScrollFunction(){
    if(prodContainer.scrollLeft<10){
        document.getElementById("scrArrow").style.visibility = "visible";
    }
    else{
        document.getElementById("scrArrow").style.visibility = "hidden";
    }
}


//Basketbar JS
//expand basket

var basketOpen = false;
function expandBasket(){

    if (basketOpen == false) {
        basketOpen = true;
        document.getElementById("basketBar").style.height = "200px";
        document.getElementById("basketContainer").style.display = "flex";
        document.getElementById("basketEmpty").style.display = "block";  
        document.getElementById("basket").innerHTML = "Minimise Basket";                    
    }
    else{
        basketOpen = false;
        document.getElementById("basketBar").style.height = "20px";
        document.getElementById("basketContainer").style.display = "none";
        document.getElementById("basketEmpty").style.display = "none"; 
        document.getElementById("basket").innerHTML = "Expand Basket";        
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

// Clicking add on products

var basket = [];
var basketLength = 0;

function addClicked(e){

    var name = e.parentElement.children[1].innerText;
    var price = e.parentElement.children[2].innerText;
    var src = e.parentElement.children[0].src;
    addToBasket(name, price, src);

    basket.push(name);
    basketLength++;
    document.getElementById("bNo").innerHTML = "("+ basketLength +")";

    document.getElementById("basketEmpty").style.visibility = "hidden";  

}

function addToBasket(name, price, src){

    var basketSlot = document.createElement('span');
    basketSlot.setAttribute( 'class', 'basketBox' );
    var basketItems = document.getElementsByClassName('basketContainer')[0];
    var basketSlotContents = `

                                    <img class="basketImage" src="${src}" alt="Laptop">
                                    <div class="basketName">${name}</div>
                                    <div class="basketPrice">${price}</div>
                                    <input class="basketQuantity" type="number" value=1 min="1" max="99">
                                    <span class="basketRemove" onclick="parentElement.remove(); subtrBasket()" o>REMOVE</span>

                            `
    basketSlot.innerHTML = basketSlotContents;
    basketItems.append(basketSlot);

}



function subtrBasket(){
    basketLength= basketLength -1;
    document.getElementById("bNo").innerHTML = "("+ basketLength +")";
    if(basketLength ==0){
        document.getElementById("basketEmpty").style.visibility = "visible";  

    }
}


//Slideshow JS
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
