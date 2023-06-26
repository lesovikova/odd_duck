console.log(imagesOnScreen);

postImage(allProducts);
function postImage(arr) {
    const container = document.querySelector('.container');
    for(let i = 0; i < arr.length; i++) {    
    const image = document.createElement('img');
    image.setAttribute('src', `${arr[i].src}`);
    container.append(image);
    }
    
}