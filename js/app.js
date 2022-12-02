const advertizer = {

    isUpperCase: false,

    init: function() {

        const keyElements = document.querySelectorAll('.key');

        for (const key of keyElements) {
            key.addEventListener('click', advertizer.handleKeysPressed);
        }

        const majButton = document.querySelector('.maj');
        majButton.addEventListener('click', advertizer.handleMajPressed);

        const backButton = document.querySelector('.return');
        backButton.addEventListener('click', advertizer.handleReturnPressed);

    },

     handleKeysPressed: function(event) {
        const buttonPressed = event.currentTarget;

        const letter = buttonPressed.textContent;

        advertizer.addLetter(letter);
    },

     handleMajPressed: function(event) {

        console.log('Bouton maj pressé !');

        advertizer.isUppercase = !advertizer.isUppercase;

        const buttonPressed = event.target;
        buttonPressed.classList.toggle('pressed');
    },

    handleReturnPressed: function(){
        const screen =  document.querySelector('.screen .text');
        const screenText = screen.textContent

        const newText = screenText.slice(0, -1);

        screen.textContent = newText;
    },

    addLetter: function(letter) {
        const screen =  document.querySelector('.screen .text');
        
        const screenText = screen.textContent

        if(advertizer.isUppercase) {
            letter = letter.toUpperCase();
        }

        screen.textContent = screenText + letter;

    },
}

document.addEventListener('DOMContentLoaded', advertizer.init);