
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

/**
 * triggering the event to happend, after pressing button load next text node
 * @param {room number} option - button, check hich button been selected, if button = 0 then restart game
 */
function selectOption(option) {
    const nextTextNodeId = option.nextText
    if (nextTextNodeId <= 0) {
        return startGame()
    }
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)
}


/**
 * check if player has the object which is key, if the player has it set value 1 or true
 * @param {*} json - the JSON room data
 * @param {object} value -key required 
 * @returns {bool} Returns true or false if a value is present
 */
function checkForValue(json, value) {
    for (key in json) {
        if (typeof (json[key]) === "object") {
            return checkForValue(json[key], value);
        } else if (json[key] === value) {
            return true;
        }
    }
    return false;
}







