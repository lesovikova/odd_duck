
//function for generating number less than the amount of objects we have, but no less than 3

//As the conditions of the lab changed to check that the previous set isn't the same as current, the amount of images should be decreased, I take the max images and dived it by 3
function randomNumberForDisplay(max){
    return Math.floor(Math.random() * (max/3 - 3) + 3);
}


//function for a random number
function randomNumber(max){
    return Math.floor(Math.random() * max);
}


function cleanPrevious(arr) {

}


//function creates a new Set, and adds random numbers to it till it's length is equal to the number of objects that needs to be displayed
function unicGenerator(arr) {   
    const newArr = new Set(); 
    const random = randomNumberForDisplay(arr.length);
    do {
        newArr.add(randomNumber(arr.length));
        for(let i = 0; i < previousSet.length; i++){
            newArr.delete(previousSet[i]);
        }
    } while (newArr.size !== random);

    previousSet = [...newArr];
    return newArr;
}


//function that takes the Set with the numbers and goes through our array of objects and displays them on the page
function postImage(set, arr) {
    set.forEach((item) => {
        const imageContainer = document.createElement("div");
        const image = document.createElement('img');
        image.setAttribute('src', `${arr[item].src}`);
        image.setAttribute('name', `${arr[item].name}`);
        addView(arr[item]);
        container.append(imageContainer);
        // imageContainer.style.position = "relative";
        imageContainer.append(image);
    });    
}


//function for adding the view count in the objects that are displayed
function addView(item) {
    item.views += 1; 
}


//function that on click displays new images and increases the count on the clicked images, if the number of clicks reached the set amount the function is over
function clickHandler(e){
    if(e.target.tagName === "IMG") {
        count++;
        const itemIndex = allProducts.findIndex((item) => item.name === e.target.name);
        allProducts[itemIndex].clicks++;
        container.innerHTML = "";
        postImage(unicGenerator(allProducts), allProducts);
        if (count >= rounds) {
            container.removeEventListener("click", clickHandler);
            displayButton();
        } 
    }
}


//adds the button to the top of the container
function displayButton() {
    button.textContent = "View results";
    container.insertAdjacentElement("beforebegin", button);
}


//handling the click to the button of results
function displayResults(arr) {
    const div = document.createElement('div');
    button.insertAdjacentElement("afterend", div);
    div.classList.add('results');
    sortObjects(arr);
    arr.forEach((item) => {        
        const p = document.createElement('p');
        div.append(p);
        p.textContent = `The ${item.name} image has been displayed ${item.views} times. It was clicked ${item.clicks} times. The ratio is ${Math.round(item.getPercents()*100)/100} percents.`;
    })

    button.style.display = "none";
}


function sortObjects(arr) {
    arr.sort((a, b) => b.getPercents() - a.getPercents());
}