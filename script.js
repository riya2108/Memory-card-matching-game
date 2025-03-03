const cardsArray = ['🍎', '🍎', '🍌', '🍌', '🍒', '🍒', '🍇', '🍇', '🍉', '🍉', '🍓', '🍓', '🥭', '🥭', '🥝', '🥝'];
        let shuffledCards = cardsArray.sort(() => 0.5 - Math.random());
        let gameBoard = document.getElementById("gameBoard");
        let selectedCards = [];
        let matchedCards = [];

        shuffledCards.forEach((emoji, index) => {
            let card = document.createElement("div");
            card.classList.add("card");
            card.dataset.index = index;
            card.dataset.emoji = emoji;
            card.addEventListener("click", flipCard);
            gameBoard.appendChild(card);
        });

        function flipCard() {
            if (selectedCards.length < 2 && !this.classList.contains("matched")) {
                this.textContent = this.dataset.emoji;
                selectedCards.push(this);
            }
            if (selectedCards.length === 2) {
                setTimeout(checkMatch, 500);
            }
        }

        function checkMatch() {
            if (selectedCards[0].dataset.emoji === selectedCards[1].dataset.emoji) {
                selectedCards.forEach(card => card.classList.add("matched"));
                matchedCards.push(...selectedCards);
            } else {
                selectedCards.forEach(card => card.textContent = "");
            }
            selectedCards = [];
            if (matchedCards.length === cardsArray.length) {
                setTimeout(() => alert("Congratulations! You matched all pairs!"), 300);
            }
        }