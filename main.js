const cards = document.querySelectorAll(".card");

let cardOne = null,
    cardTwo = null,
    disableCards = false;


function flipCard(e) {
    let clickedCard = e.currentTarget;

    if(disableCards) return;

    clickedCard.classList.toggle("flip");

   if (clickedCard === cardOne || clickedCard === cardTwo) return;
    
   
   if(!cardOne){
    
        cardOne = clickedCard;
        return;
    }

    cardTwo = clickedCard;
    disableCards = true;

    let cardOneImg = cardOne.querySelector("img").src;
    let cardTwoImg = cardTwo.querySelector("img").src;

    if(cardOneImg === cardTwoImg) {

        console.log("Match!");
        cardOne = cardTwo = null;
        disableCards = false;    
    } else {

        console.log("No Match!");

        setTimeout(() => {
            cardOne.classList.toggle("flip");
            cardTwo.classList.toggle("flip");
            cardOne = cardTwo = null; // Karten zurücks.
            disableCards = false; // Klicks wieder akt.
        }, 1000); // 1 Sek Verzög
    }


};


// click event to all cards
cards.forEach(card => {

    card.addEventListener("click", flipCard);
    
});