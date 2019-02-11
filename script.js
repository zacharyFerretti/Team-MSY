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



//Hide scroll prompt in product container
prodContainer.onscroll = function() {itemScrollFunction()};


function itemScrollFunction(){
    if(prodContainer.scrollLeft<10){
        document.getElementById("scrArrow").style.visibility = "visible";
    }
    else{
        document.getElementById("scrArrow").style.visibility = "hidden";
    }
}



//expand basket

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

/*
var addButtons = document.getElementsByClassName('addToBasketButton');
for (var i = 0; i < addButtons.length; i++ ) {
    var button = addButtons[i];
    button.addEventListener('click', function(){
        var buttonClicked = event.target;
        var prod = button.parentElement;
        var name = prod.getElementsByClassName('productName')[i].innerText;
        var price = prod.getElementsByClassName('productPrice')[i].innerText;
        var src = prod.getElementsByClassName('productImage')[i].src;
        console.log(name, price);
        addToBasket(name, price, src);
    })
};
*/


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




















//basket
/*
var basket = [];


function addBasket(n, i, p){

    basket.push(n);
    document.getElementById("basket").innerHTML = basket.toString();
    document.getElementById("bNo").innerHTML = "("+ basket.length +")";
    document.getElementById("bIcon").src = i;
}


class Product{
    constructor(name, imgref, fullname){
        this.name = name;
        this.imgref = imgref;
        this.fullname = fullname;
    }

    getName(){
        return this.name;
    }

    getImgref(){
        return "'"+this.imgref+"'";
    }
}

let laptop = new Product(MacBook, images/lt.jpg, abc);*/








