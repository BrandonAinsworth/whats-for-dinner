//querySelectors
var letsCookButton = document.querySelector(".lets-cook-button");
var potImage = document.querySelector(".pot-image");
var leftBoxButtons = document.querySelectorAll('input[name=drone]')
var letsCookResult = document.querySelector(".lets-cook-result");
var leftButtonSelection = document.querySelector(".left-button-selection");
var rightBox = document.querySelector(".right-box");
//arrays

var sides = [
    ["Miso Glazed Carrots",
        "Coleslaw",
        "Garden Salad",
        "Crispy Potatoes",
        "Sweet Potato Tots",
        "Coconut Rice",
        "Caeser Salad",
        "Shrimp Summer Rolls",
        "Garlic Butter Mushrooms",
        "Hush Puppies"
    ]
]
var mains = [
    ["Spaghetti and Meatballs",
        "Pineapple Chicken",
        "Shakshuka",
        "Thai Yellow Curry",
        "Bibimbap",
        "Chicken Parmesean",
        "Butternut Squash Soup",
        "BBQ Chicken Burgers",
        "Ramen", "Empanadas",
        "Chicken Fried Rice",
        "Sheet Pan Fajitas",
        "Margarita Pizza",
    ]
]
var desserts = [
    ["Apple Pie",
        "Lemon Meringue Pie",
        "Black Forest Cake",
        "Banana Bread",
        "Peach Cobbler",
        "Cheesecake",
        "Funfetti Cake",
        "Baklava",
        "Flan",
        "Macarons",
        "Macaroons",
        "Chocolate Cupcakes",
        "Pavlova", "Pumpkin Pie",
        "Key Lime Pie",
        "Tart Tatin",
        "Croissants",
        "Eclairs"
    ]
]

var options = {
    sides: sides,
    mains: mains,
    desserts: desserts
}


//event listen

letsCookButton.addEventListener('click', function () {
    event.preventDefault();
    hiddenToggle(potImage,letsCookResult,leftButtonSelection);
    letsCook();
});



//functions
function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length)
};

function hiddenToggle(element) {
    element.classList.toggle('hidden');
}



function letsCook() {
    for (var i = 0; i < leftBoxButtons.length; i++) {
        if (leftBoxButtons[i].checked) {
            var cook = leftBoxButtons[i].value;
        }
    }
    var letsCookDisplay = options[cook][getRandomIndex(options[cook])];
    showFood(letsCookDisplay);
}



function showFood() {
    leftButtonSelection.innerText = letsCookDisplay;
}