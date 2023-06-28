function saveProducts() {
    let savedProducts = JSON.stringify(allProducts);
    localStorage.setItem("products", savedProducts);
}

function retrieveProducts(){
    return JSON.parse(localStorage.getItem("products"));
}

function updateData(){
    if(localStorage.getItem("products")){
        allProducts = retrieveProducts();
        
    console.log("updatedata");
    }
}