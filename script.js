const cardFront = document.querySelectorAll('.card-display');
const cardBack = document.querySelectorAll('.card-info');

cardFront.forEach((card) => {
    let cardClicked = false; 

    card.addEventListener("click", () => {
        const index = Array.from(cardFront).indexOf(card);
        const correspondingCardBack = cardBack[index];
        if (cardClicked) {
            card.style.transform = "";
            correspondingCardBack.style.width = "250px";
            correspondingCardBack.style.transform = "translateX(0px)";
            
            setTimeout(card.classList.add("not-active"), 5000);
        }
        else {
            card.classList.remove("not-active");
            card.style.transform = "translateX(-120px)";
            correspondingCardBack.style.width = "450px";
            correspondingCardBack.style.transform = "translateX(210px)";
        }

        cardClicked = !cardClicked;
    })
})