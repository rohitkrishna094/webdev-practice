import React, { Component } from 'react';
import './SalesCard.css';

function MinCard(props) {
  const amountColor = props.amountColor ? props.amountColor : 'black';
  return (
    <div className="row-wrap">
      <div className="row">
        <div className="left">
          <div className="title">{props.title}</div>
          <div className="caption">{props.caption}</div>
        </div>
        <div className="right" style={{ color: amountColor }}>
          {props.amount}
        </div>
      </div>
    </div>
  );
}

class SalesCard extends Component {
  render() {
    return (
      <div className="SalesCard">
        <MinCard title="Total Sales" caption="Monthly" amount="+$22900" amountColor="#28A745" />
        <MinCard title="Orders" caption="Weekly Orders" amount="+1,450" />
        <MinCard title="Expenses" caption="Monthly Expenses" amount="+$12900" amountColor="#28A745" />
        <MinCard title="Delivery Charges" caption="Monthly" amount="+$2900" amountColor="#FFC107" />
        <MinCard title="Support Tickets" caption="Average per User" amount="+90" amountColor="#DC3545" />
        <MinCard title="Logistics" caption="Overall" amount="-10%" amountColor="#FFC107" />
      </div>
    );
  }
}

export default SalesCard;
