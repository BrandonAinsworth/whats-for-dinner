//querySelectors
var letsCookButton = document.querySelector(".lets-cook-button");
var potImage = document.querySelector(".pot-image");
var leftBoxButtons = document.querySelectorAll('input[name="drone"]')
var letsCookResult = document.querySelector(".lets-cook-result");
var leftButtonSelection = document.querySelector(".left-button-selection");
var rightBox = document.querySelector(".right-box");
//arrays

var sides = [
    
        "Miso Glazed Carrots",
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

var mains = [
    
        "Spaghetti and Meatballs",
        "Pineapple Chicken",
        "Shakshuka",
        "Thai Yellow Curry",
        "Bibimbap",
        "Chicken Parmesean",
        "Butternut Squash Soup",
        "BBQ Chicken Burgers",
        "Ramen",
        "Empanadas",
        "Chicken Fried Rice",
        "Sheet Pan Fajitas",
        "Margarita Pizza",
    
]
var desserts = [
    
        "Apple Pie",
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
        "Pavlova", 
        "Pumpkin Pie",
        "Key Lime Pie",
        "Tart Tatin",
        "Croissants",
        "Eclairs"
    
]



//event listen

letsCookButton.addEventListener('click', function() {
    event.preventDefault();
    hiddenToggle(potImage, letsCookResult, leftButtonSelection);
    letsCookButtonClick();
    showFood();
});



//functions
function getRandomIndex(array) {
return array[Math.floor(Math.random()*array.length)];
};


function hiddenToggle(element) {
    element.classList.toggle('hidden');
}


function letsCookButtonClick() {
    for (var i = 0; i < leftBoxButtons.length; i++) {
        if (leftBoxButtons[i].checked) {
            return leftBoxButtons[i].value;
        }
    }

}


function showFood() {
    var select = letsCookButtonClick();

    if (select === "Side") {
        rightBox.innerHTML = `<h2>You should make: ${getRandomIndex(sides)}!</h2>`
    } else if (select === "Main Dish") {
        rightBox.innerHTML = `<h2>You should make: ${getRandomIndex(mains)}!</h2>`
    } else if (select === "Dessert") {
        rightBox.innerHTML = `<h2>You should make: ${getRandomIndex(desserts)}!</h2>`
    } else if (select === "Entire Meal") {
        rightBox.innerHTML = `<h2>To start, we'll go for the most amazing, ${getRandomIndex(sides)}, then while that's on, get to work 
        on making your stunning ${getRandomIndex(mains)}- lastly, enjoy decadence and luxury with some sensational ${getRandomIndex(desserts)}. Brilliant. </h2>`
}
}