const imgPath = "../assets/img/";
const rounds = 5;


const allProducts = [];



// const imagesOnScreen = randomNumberForDisplay(allProducts.length);

function Product(name) {
    this.name = name;
    this.views = 0;
    this.clicks = 0;
    this.src = `${imgPath}${this.name}`;
    this.push();
}

Product.prototype.getPercents = function(views, clicks) {
    return clicks/views*100;
}

Product.prototype.push = function() {
    allProducts.push(this);
}

const bag = new Product("bag.jpg");
const banana = new Product("banana.jpg");
const bathroom = new Product("bathroom.jpg");
const boots = new Product("boots.jpg");
const breakfast = new Product("breakfast.jpg");
const bubblegum = new Product("bubblegum.jpg");
const chair = new Product("chair.jpg");
const cthulhu = new Product("cthulhu.jpg");
const dogDuck = new Product("dog-duck.jpg");
const dragon = new Product("dragon.jpg");
const pen = new Product("pen.jpg");
const petSweep = new Product("pet-sweep.jpg");
const scissors = new Product("scissors.jpg");
const shark = new Product("shark.jpg");
const sweep = new Product("sweep.png");
const tauntaun = new Product("tauntaun.jpg");
const unicorn = new Product("unicorn.jpg");
const waterCan = new Product("water-can.jpg");
const wineGlass = new Product("wine-glass.jpg");

