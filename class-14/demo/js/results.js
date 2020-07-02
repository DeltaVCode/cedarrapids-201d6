'use strict';
console.log('results.js is connected.');



function getPizzaArray(nameOfThePropertyIWant){
    var answer = [];
    for(var j = 0; j < allPizzas.length; j++){
      answer[j] = allPizzas[j][nameOfThePropertyIWant];
    }
    console.log('this is the getPizzArray running for my chart.');
    return answer;
  }
 
//Add chart function 
function runMyChartNow() {

    var ctx = document.getElementById('resultsChart').getContext('2d');
    new Chart(ctx, {

      type:     'doughnut',

      // type: 'dougnut',

      
      data: {
      //what does the labels key do?
      // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        labels: getPizzaArray('name'),
        datasets: [{
        //what does this label do?
        //key, lengend
          label: '# of Votes',
          //what does this data do?
          //actually the valies in the chart
          data: getPizzaArray('timesClicked'),
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }


  runMyChartNow();