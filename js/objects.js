const imgPath = "assets/img/";
const rounds = 25;
let count = 0;


const allProducts = [];
const container = document.querySelector('.container');
const button = document.createElement('button');


//array that will take the images for compare to the new set
let previousSet = [];


// const imagesOnScreen = randomNumberForDisplay(allProducts.length);

function Product(name, fileName) {
    this.name = name;
    this.views = 0;
    this.clicks = 0;
    this.src = `${imgPath}${fileName}`;
    this.push();
}

Product.prototype.getPercents = function() {
    return this.clicks/this.views*100;
}

Product.prototype.push = function() {
    allProducts.push(this);
}

const bag = new Product("bag", "bag.jpg");
const banana = new Product("banana", "banana.jpg");
const bathroom = new Product("bathroom", "bathroom.jpg");
const boots = new Product("boots", "boots.jpg");
const breakfast = new Product("breakfast", "breakfast.jpg");
const bubblegum = new Product("bubblegum", "bubblegum.jpg");
const chair = new Product("chair", "chair.jpg");
const cthulhu = new Product("cthulhu", "cthulhu.jpg");
const dogDuck = new Product("dog-duck", "dog-duck.jpg");
const dragon = new Product("dragon", "dragon.jpg");
const pen = new Product("pen", "pen.jpg");
const petSweep = new Product("pet-sweep", "pet-sweep.jpg");
const scissors = new Product("scissors", "scissors.jpg");
const shark = new Product("shark", "shark.jpg");
const sweep = new Product("sweep", "sweep.png");
const tauntaun = new Product("tauntaun", "tauntaun.jpg");
const unicorn = new Product("unicorn", "unicorn.jpg");
const waterCan = new Product("water-can", "water-can.jpg");
const wineGlass = new Product("wine-glass", "wine-glass.jpg");

