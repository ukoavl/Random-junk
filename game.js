console.log("its loaded")


    

const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')
const picture = document.getElementById('picture')

let state = {}


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
 * @param {*} json -
 * @param {object} value -key required 
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


//ROOMS ========================================================================================================================================================================




const textNodes = [
    {
        id: 1, //main room
        text: 'After the long walk, you have finally seen a light at the end of the corridor.. However, as you have come closer another 2 light cape up; pair of 3 doors appeared before you, each leading to a different room or yet another corridor. Where will you go now?',
        picture: {condition: null, default:"Room1Render.png"},
        pictureTitle: "Room 1. The begining, choose wisely. You can go to either room by pressing any of the buttons. ",
        options: [
            {
                    text: 'open locked door', // hidden
                    requireState: (currentState) => currentState.key,
                    nextText: 9,
                },
                {
                    text: 'west',
                    nextText: 2   //next room 2
                },
                //{
                    //check this room
                    //text: 'south',
                    //nextText: 9  
                //},
                {
                    text: 'East',
                    nextText: 17  // next room 17
                },     
    ]
 },

    {
        id: 2,
        text: 'second room? the door closed ',
        picture: {condition: null, default: "2room.jpg"},
        pictureTitle: "This is room 2",
        options: [
            {
                text: 'west lobby',
                nextText: 12
            },
            {
                text: 'East',
                nextText: 1
            },
          
        ]
    },

  
    { // check this one ??? 
        id: 3,
        text: 'room x',
        picture: {condition: "key", file:"key.jpg", default: "key.jpg" }, 
        options: [
            {
                text: 'take key and leave',
                setState: { key: true},
                nextText: 12
            },
            
        ]
    }, 
    
   
    {
        id:4,
        text: 'this is the end',
        picture: {condition: null, default: "troll.png" }, 
        options: [ 
            {
                text: 'restart',
                nextText: 6
            }
        ]
    },

    {
        id: 5, 
        text: 'good end :3',
        picture: {condition: null, default: "5.png"},
        options: [
            {
                text: 'restart',
                nextText: 1
            },
            
        ]
    },
 



    {
        id: 6, // not existing ?
        text: 'the wall, mystrey',
        picture: {condition: null, default: "2.jpg"},
        options: [
            {
                text: 'head back',
                nextText: 4
            },
            {
                text: 'go east',
                nextText :3
            },
            {
                text: 'go west',//returning to room one ?
                nextText: 1
            }
        ]
    },

    {
        id: 8, 
        text: 'F to pay respect',
        picture: {condition: null, default: "troll.png"},
        options: [
            {
                text: 'restart',
                nextText: 1
            },
            
        ]
    },

    {
        id: 9,
        text: 'nein, nein, nien,',
        picture: {condition: null, default: "9.jpg"},
        options: [
            {
                text: '5 good end',
                requireState: (currentState) => currentState.key,
                nextText: 5
            },
            {
                text: 'back a',
                nextText: 1
            }
        ]
    },

    {
        id: 10,
        text: 'what is this anyway empty ',
        picture: {condition: null, default: "1.jpg"},
        options: [
            {
                text: 'what?',
                nextText: 11
            },
          
        ]
    },

    {
        id: 11,
        text: 'you ',
        picture: {condition: null, default: "17.jpg"},
        options: [
            {
                text: 'south',
                nextText: 10
            },
            {
                text: 'east',
                nextText : 9
            },
           
        ]
    },

    {
        id: 12,
        text: 'lobby room 12  ',
        picture: {condition: null, default: "12.jpg"},
        options: [
            {
                text: 'north key',
                nextText: 3
            },
            {
                text: 'west end',
                nextText :8
            },
            {
                text: 'East',
                nextText :2
            },
            {
                text: 'south',
                nextText: 11
            }
        ]
    },
   
    {
        
        id: 17,
        text: 'as you entered the room, you found your self in a corridor which leads to yet 3 other rooms ',
        picture: {condition: null, default: "17.jpg"},
        options: [
            {
                text: 'east',
                nextText: 18
            },
            {
                text: 'south',
                nextText : 19
            },
            {
                text: 'north',
                nextText: 16
            }
        
        ]
    },
   
    {
        id: 18,
        text: 'you lobby ',
        picture: {condition: null, default: "17.jpg"},
        options: [
            {
                text: 'north',
                nextText: 6
            },
            {
                text: 'right',
                nextText :5
            },
            {
                text: 'forward',
                nextText: 8
            }
        ]
    },
    {
        id: 19,
        text: '19 ',
        picture: {condition: null, default: "17.jpg"}, 
        options: [
            {
                text: '17 back',
                nextText: 17
            },
            
        ]
    },
    {
        id: 16,
        text: 'you saw a bright yellow light, after you eyes finaly adapted you saw it. The gold, without a second thought you grabbed it all and left. as you were leaving you found a key lying on the ground ',
        picture: {condition: null, default: "gold.jpg"},
        options: [
        {
            text: 'take and go',
            nextText: 17
        }
        ]
    },
    {
        id: 30,
        text: 'help menu? How do you put the buttons in the middle ?....Welcome to the adventure(?)game. To start press "Play" button. To move around you will be using buttons. To interact with them you jsut need to hover your coursor over them and press first mouse click. By pressing button named "south" you will go south direction; to a diffrent room and a new story or scenario. However not all options will lead you the right wsay, some of them may lead you to your death.   ',

        picture: {condition: null, default: "help.jpg"},
        pictureTitle: "Help menu",
        options: [
            {
                text: 'Play!',
                nextText: 1
            },
        
          
        ]
    },
]



startGame()


