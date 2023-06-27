
function myChart(){
  const directory = document.getElementById('myChart');
  // createData();
  const names = [];
for(let i = 0; i < allProducts.length; i++) {
    names.push(allProducts[i].name);
}

const views = [];
for(let i = 0; i < allProducts.length; i++) {
    views.push(allProducts[i].views);
}

const clicks = [];
for(let i = 0; i < allProducts.length; i++) {
    clicks.push(allProducts[i].clicks);
}

  const data = {
      labels: names,
      datasets: [
      {
        label: 'Views',
        data: views,
        borderWidth: 1
      },
      {
        label: 'Clicks',
        data: clicks,
        borderWidth: 1
      },
    ]}

  const config = {
    type: "bar",
    data: data,
  };

  const myChart = new Chart(directory, config);
  button.style.display = "none";
}