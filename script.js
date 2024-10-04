const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const data = {labels:labels, datasets:[{label:'User Growth', backgroundColor:'rgba(75, 192, 192, 0.2)', borderColor:'rgba(75, 192, 192, 1)', borderWidth:1, data:[200, 400, 300, 500, 600, 200, 800],}]};

const config = {
  type:'line', data:data, options: {
    responsive:true, scales:{
      y:{
        beginAtZero:true
      }
    }
  }
};

const myChart = new Chart(document.getElementById('myChart'), config);