
/**
 * Start Game 
 * This requires a starting node. And will create an empty state for the data.
 * No parameters needed
 */
function startGame() {
    state = {}
    showTextNode(30);
}

/**
 * Show Text Node - Draw the text and images for the current room
 * @param {number} textNodeIndex - The current room index
 */
function showTextNode(textNodeIndex) {
    console.log(textNodeIndex);
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text


    if(Object.keys(state)==textNode.picture.condition) {

        console.log(state[textNode.picture.condition]);
        if(state[textNode.picture.condition]){
            picture.src = "./container/" + textNode.picture.default;
        }
    }else{
        picture.src = "./container/" + textNode.picture.default; //images/ images folder
        picture.title = textNode.pictureTitle;
    }
     



while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild) // removing all buttons after loop
}

    console.log(optionButtonsElement.firstChild);
    textNode.options.forEach(option => {

            console.log(showOption(option))

                if (showOption(option)) {

                    const button = document.createElement('button')
                    button.innerText = option.text

                    button.classList.add('btn')
                    button.style.title = "hello"
                    button.addEventListener('click', () => selectOption(option))
                    optionButtonsElement.appendChild(button)
                }
    })
}

/**
 * loading the buttons depending on the state
 * @param {*} option - show hidden button 
 */
function showOption(option) {
   
    return option.requireState == null || option.requireState(state)
}









