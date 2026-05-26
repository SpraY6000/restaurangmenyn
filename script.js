const cart = document.querySelector(".cartMenu");
const buttonClose = document.querySelector(".close");
const cartButton = document.querySelector(".imgCart");
let isOutOfScreen = true;

cartButton.addEventListener("click", function(){
    if (isOutOfScreen){
        cart.style.right = '0px';
        isOutOfScreen = false;
    }

    else{
        cart.style.right = '-600px';
        isOutOfScreen = true;
    }
    
});

buttonClose.addEventListener("click", function(){
    cart.style.right = '-600px';
    isOutOfScreen = true;
});