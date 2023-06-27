
//for charts

function createData(){
const names = [];
for(let i = 0; i < allProducts.length; i++) {
    names.push(allProducts[i].name);
}

const percents = [];
for(let i = 0; i < allProducts.length; i++) {
    percents.push(allProducts[i].percents);
}

const views = [];
for(let i = 0; i < allProducts.length; i++) {
    views.push(allProducts[i].views);
}

const clicks = [];
for(let i = 0; i < allProducts.length; i++) {
    clicks.push(allProducts[i].clicks);
}
}
