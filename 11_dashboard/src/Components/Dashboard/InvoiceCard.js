import React from 'react';
import './InvoiceCard.css';
import Chart from 'chart.js';

const data = {
  labels: ['Paid', 'Unpaid', 'Other'],
  datasets: [
    {
      data: [7, 1, 1],
      backgroundColor: ['#98AAFB', '#52BACC', '#CCC5A8'],
      borderAlign: 'center'
      // borderColor: ['red', 'blue', 'green']
    }
  ]
};

class InvoiceCard extends React.Component {
  options = {
    rotation: -Math.PI,
    cutoutPercentage: 70,
    legend: {
      labels: {
        boxWidth: 10,
        usePointStyle: true
      }
    },
    onHover: e => {
      let { chart } = this.state.chart;
      let item = chart.getElementAtEvent(e);
      if (item.length) {
        console.log();
        const title = item[0]._model.label;
        const val = item[0]._chart.config.data.datasets[0].data[item[0]._index];
        this.setState({ ...this.state, invoiceDonutTitle: title, invoiceDonutAmount: val });
      }
    }
  };

  state = { invoiceDonutTitle: 'Paid', invoiceDonutAmount: 7 };

  componentDidMount() {
    let ctx = document.getElementById('invoicechart');
    let myDonutChart = new Chart(ctx, {
      type: 'doughnut',
      data: data,
      options: this.options
    });
    this.setState({ chart: myDonutChart });
  }
  render() {
    return (
      <div className="invoicecard">
        <p>Invoice By Status</p>
        <div className="canvas-chart">
          <canvas id="invoicechart" height="180" />
        </div>
        <div className="donut-inner">
          <h1>{this.state.invoiceDonutTitle}</h1>
          <span>{this.state.invoiceDonutAmount}</span>
        </div>
      </div>
    );
  }
}

export default InvoiceCard;
