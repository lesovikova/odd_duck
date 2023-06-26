
//function for 
function randomNumberForDisplay(max){
    return Math.floor(Math.random() * (max - 3) + 3);
}


function randomNumber(max){
    return Math.floor(Math.random() * max);
}


function unicGenerator(arr) {   
    const newArr = new Set(); 
    const random = randomNumberForDisplay(arr.length);
    do {
        newArr.add(randomNumber(arr.length));
    } while (newArr.size !== random);
    return newArr;
}

function postImage(set, arr) {
    const container = document.querySelector('.container');
    set.forEach((item) => {
        console.log(item);
        const image = document.createElement('img');
        image.setAttribute('src', `${arr[item].src}`);
        container.append(image);
    });    
}