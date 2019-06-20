import React from 'react';
import MetricCard from './MetricCard';
import IncomeCard from './IncomeCard';
import InvoiceCard from './InvoiceCard';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard_container">
        <h3>Howdy John!</h3>
        <div className="dashboard_metric_cards">
          <MetricCard title="Users" metric="523" icon="fas fa-user-friends" color="#1DC778" />
          <MetricCard title="Projects" metric="111" icon="fas fa-layer-group" color="#FEC61E" />
          <MetricCard title="Income" metric="$12k" icon="fas fa-copy" color="#5161BC" />
          <MetricCard title="Users" metric="$523" icon="fas fa-credit-card" color="#FB9F84" />
        </div>
        <div className="dashboard_income_list">
          <IncomeCard />
          <InvoiceCard />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
