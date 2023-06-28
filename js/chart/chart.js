let percents = [];
function getDamnPercents(){
  for(let i = 0; i < allProducts.length; i++) {
    const res = getPercents(allProducts[i]);
    percents.push(res);
  }
}



function myChart(){
  const directory = document.getElementById('myChart1');
  const directory2 = document.getElementById('myChart2');
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
    
   getDamnPercents();

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

    const data2 = {
      labels: names,
      datasets: [
      {
        label: 'Percents',
        data: percents,
        borderWidth: 1,
        backgroundColor: ["#63410091"],
        borderColor: ["#634100"],
      },
    ],
  }
    
  const config1 = {
    type: "bar",
    data: data,
  };

  const config2 = {
    type: "bar",
    data: data2,
  };

  const viewsAndClicks = new Chart(directory, config1);  
  const percentsChart = new Chart(directory2, config2);
  button.style.display = "none";
}


// function myChart2(){
//   const directory = document.getElementById('myChart2');
//     const names = [];
//     for(let i = 0; i < allProducts.length; i++) {
//         names.push(allProducts[i].name);
//     }

//     const percents = [];
//     for(let i = 0; i < allProducts.length; i++) {
//         percents.push(Math.round(allProducts[i].getPercents()*100)/100);
//     }

    

//     const config = {
//       type: "bar",
//       data: data,
//     };

//     const percentsChart = new Chart(directory, config);
// }