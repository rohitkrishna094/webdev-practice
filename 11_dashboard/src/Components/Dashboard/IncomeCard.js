import React, { Component } from 'react';
import './IncomeCard.css';
import Chart from 'chart.js';

const data = {
  labels: ['2012', '2013', '2014', '2015', '2016', '2017', '2018'],
  datasets: [
    {
      label: 'Income',
      data: [0, 94, 58, 198, 150, 87, 150],
      backgroundColor: 'rgba(52, 131, 255, 0.6)',
      borderColor: 'rgba(147, 187, 248, 1)',
      borderWidth: 1
    },
    {
      label: 'Expense',
      data: [0, 125, 78, 68, 180, 103, 250],
      backgroundColor: 'rgba(255, 193, 7, 0.6)',
      borderColor: 'rgba(247, 211, 106, 1)',
      borderWidth: 1
    }
  ]
};

const options = {
  legend: {
    labels: {
      boxWidth: 6,
      usePointStyle: true
    }
  },
  elements: {
    line: {
      tension: 0
    },
    point: {
      radius: 0
    }
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'rgba(0,0,0,0)',
          drawBorder: false
        }
      }
    ],
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          suggestedMax: 300,
          stepSize: 75
        },
        gridLines: {
          drawBorder: false
        }
      }
    ]
  }
};

class IncomeCard extends Component {
  componentDidMount() {
    let ctx = document.getElementById('incomechart');
    var myLineChart = new Chart(ctx, {
      type: 'line',
      data: data,
      options: options
    });
  }

  render() {
    return (
      <div className="incomecard">
        <p>Income/Expense</p>
        <canvas id="incomechart" height="100" />
      </div>
    );
  }
}

export default IncomeCard;
