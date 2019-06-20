import React from 'react';
import './MetricCard.css';

function MetricCard(props) {
  return (
    <div className="metriccard" style={{ backgroundColor: props.color }}>
      <div className="metriccard_text">
        <span className="metriccard_metric">{props.metric}</span>
        <span className="metriccard_title">{props.title}</span>
      </div>
      <i className={props.icon} />
    </div>
  );
}

export default MetricCard;
