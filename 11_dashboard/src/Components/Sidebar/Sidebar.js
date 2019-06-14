import React from 'react';
import logo from '../../assets/logo.jpg';
import './Sidebar.css';

function Sidebar() {
  return (
    <section className="sidebar_container">
      <div className="logo">
        <img src={logo} alt="logo" />
        <span className="logoText">Nen.js</span>
        <i className="fas fa-angle-double-left" />
      </div>
      <section className="sidebar">
        {/* <!-- Main --> */}
        <div className="sidebar_contents">
          <div className="sidebar_section">
            <span className="sidebar_sectionTitle">Main</span>
            <div className="sidebar_menu">
              <i className="fas fa-desktop" />
              <span className="sidebar_menuHeader">Dashboard</span>
              <i className="fas fa-angle-right" />
              <ul>
                <li>CryptoCoin</li>
                <li>Ecommerce</li>
                <li>CRM</li>
                <li>Analytics</li>
              </ul>
            </div>
          </div>
        </div>

        {/* <!-- Cryptocoin Pages --> */}
        <div className="sidebar_contents">
          <div className="sidebar_section">
            <span className="sidebar_sectionTitle">Cryptocoin Pages</span>
            <div className="sidebar_menu">
              <i className="fab fa-bitcoin" />
              <span className="sidebar_menuHeader">Cryptocoin</span>
              <i className="fas fa-angle-right" />
              <ul>
                <li>Trading</li>
                <li>Market Capitalizations</li>
                <li>Top Gainers Losers</li>
                <li>Buy & Sell</li>
                <li>Ico Calendar</li>
                <li>Tickets</li>
                <li>My watchlist</li>
                <li>My Wallet</li>
                <li>My Portfolio</li>
              </ul>
            </div>
          </div>
        </div>

        {/* <!-- Components --> */}
        <div className="sidebar_contents">
          <div className="sidebar_section">
            <span className="sidebar_sectionTitle">Components</span>
            {/* <!-- UI Elements --> */}
            <div className="sidebar_menu">
              <i className="fas fa-layer-group" />
              <span className="sidebar_menuHeader">UI Elements</span>
              <i className="fas fa-angle-right" />
              <ul>
                <li>Colors</li>
                <li>Alers</li>
                <li>Block UI</li>
                <li>Modals</li>
                <li>Panel</li>
                <li>Progress Bars</li>
                <li>Portlets</li>
                <li>Scrollable</li>
                <li>Session Timeout</li>
                <li>Spinners</li>
                <li>Sweet Alerts</li>
                <li>Switches</li>
                <li>Tabs</li>
                <li>Tickers</li>
                <li>Toastr</li>
                <li>Tooltips</li>
              </ul>
            </div>

            {/* <!-- Forms --> */}
            <div className="sidebar_menu">
              <i className="far fa-edit" />
              <span className="sidebar_menuHeader">Forms</span>
              <i className="fas fa-angle-right" />
              <ul>
                <li>Basic Form</li>
                <li>Form Layout</li>
                <li>Form Mask</li>
                <li>Date Picker</li>
                <li>File Upload</li>
                <li>SummerNote Editor</li>
              </ul>
            </div>

            {/* <!-- Buttons --> */}
            <div className="sidebar_menu">
              <i className="fas fa-cloud-download-alt" />
              <span className="sidebar_menuHeader">Buttons</span>
              <i className="fas fa-angle-right" />
              <ul>
                <li>Bootstrap Buttons</li>
                <li>Material Buttons</li>
                <li>Air Buttons</li>
              </ul>
            </div>

            {/* <!-- Tables --> */}
            <div className="sidebar_menu">
              <i className="fas fa-tablet-alt" />
              <span className="sidebar_menuHeader">Tables</span>
              <i className="fas fa-angle-right" />
              <ul>
                <li>Basic Tables</li>
                <li>Datatables Basic</li>
                <li>Datatables Advanced</li>
                <li>Datatables Datasource</li>
                <li>Datatables Api</li>
              </ul>
            </div>

            {/* <!-- Icons --> */}
            <div className="sidebar_menu">
              <i className="far fa-flag" />
              <span className="sidebar_menuHeader">Icons</span>
              <i className="fas fa-angle-right" />
              <ul>
                <li>Font Awesome Icons</li>
                <li>Themify Icons</li>
                <li>Simple Line Icons</li>
                <li>Weather Icons</li>
                <li>Cryptocoins Icons</li>
              </ul>
            </div>

            {/* <!-- Widgets --> */}
            <div className="sidebar_menu">
              <i className="fas fa-puzzle-piece" />
              <span className="sidebar_menuHeader">Widgets</span>
              <i className="fas fa-angle-right" />
              <ul>
                <li>General Widgets</li>
                <li>Chart Widgets</li>
              </ul>
            </div>

            {/* <!-- Calendar --> */}
            <div className="sidebar_menu">
              <i className="far fa-calendar-alt" />
              <span className="sidebar_menuHeader">Calendar</span>
              <i className="fas fa-angle-right" />
              <ul>
                <li>Basic Calendar</li>
                <li>List View Calendar</li>
                <li>External Event Calendar</li>
              </ul>
            </div>

            {/* <!-- Charts --> */}
            <div className="sidebar_menu">
              <i className="far fa-chart-bar" />
              <span className="sidebar_menuHeader">Charts</span>
              <i className="fas fa-angle-right" />
              <ul>
                <li>Am Stock Charts</li>
                <li>Chartjs Charts</li>
                <li>Flot Charts</li>
                <li>Morris Charts</li>
                <li>Sparkline Charts</li>
                <li>Knob Charts</li>
              </ul>
            </div>
          </div>
        </div>

        {/* <!-- Pages --> */}
        <div className="sidebar_contents">
          <div className="sidebar_section">
            <span className="sidebar_sectionTitle">Pages</span>

            {/* <!-- Chat App --> */}
            <div className="sidebar_menu">
              <i className="fas fa-expand" />
              <span className="sidebar_menuHeader">Chat App</span>
              <i className="fas fa-angle-right" />
              <ul>
                <li>Chat App</li>
                <li>Support Ticket</li>
                <li>Ticket Detail</li>
              </ul>
            </div>

            {/* <!-- Mail Box --> */}
            <div className="sidebar_menu">
              <i className="fas fa-envelope-open-text" />
              <span className="sidebar_menuHeader">Mail Box</span>
              <i className="fas fa-angle-right" />
              <ul>
                <li>Mail Box</li>
                <li>Compose Mail</li>
                <li>Mail Detail</li>
              </ul>
            </div>

            {/* <!-- Timeline --> */}
            <div className="sidebar_menu">
              <i className="fas fa-stream" />
              <span className="sidebar_menuHeader">Timeline</span>
              <i className="fas fa-angle-right" />
              <ul>
                <li>Timeline 1</li>
                <li>Timeline 2</li>
                <li>Timeline 3</li>
              </ul>
            </div>

            {/* <!-- User --> */}
            <div className="sidebar_menu">
              <i className="fas fa-user-friends" />
              <span className="sidebar_menuHeader">User</span>
              <i className="fas fa-angle-right" />
              <ul>
                <li>Users</li>
                <li>User Details</li>
              </ul>
            </div>

            {/* <!-- Custom Pages --> */}
            <div className="sidebar_menu">
              <i className="fas fa-wrench" />
              <span className="sidebar_menuHeader">Custom Pages</span>
              <i className="fas fa-angle-right" />
              <ul>
                <li>Login 1</li>
                <li>Login 2</li>
                <li>Error 403</li>
                <li>Error 404</li>
                <li>Error 503</li>
              </ul>
            </div>
          </div>
        </div>

        {/* <!-- Layout --> */}
        <div className="sidebar_contents">
          <div className="sidebar_section">
            <span className="sidebar_sectionTitle">Layout</span>
            {/* <!-- Layout --> */}
            <div className="sidebar_menu">
              <i className="fas fa-square" />
              <span className="sidebar_menuHeader">Layout</span>
              <i className="fas fa-angle-right" />
              <ul>
                <li>Wide Layout</li>
                <li>Boxed Layout</li>
                <li>Static Layout</li>
                <li>Fixed Layout</li>
                <li>Collapsed Menu</li>
                <li>Light Sidebar</li>
                <li>Dark Sidebar</li>
              </ul>
            </div>

            {/* <!-- Header Color --> */}
            <div className="sidebar_menu">
              <i className="fas fa-heading" />
              <span className="sidebar_menuHeader">Header Color</span>
              <i className="fas fa-angle-right" />
              <ul>
                <li>Wide Light Sidebar</li>
                <li>Wide Dark Sidebar</li>
                <li>Gradient</li>
              </ul>
            </div>

            {/* <!-- Footer --> */}
            <div className="sidebar_menu">
              <i className="fab fa-foursquare" />
              <span className="sidebar_menuHeader">Footer</span>
              <i className="fas fa-angle-right" />
              <ul>
                <li>Light Footer</li>
                <li>Dark Footer</li>
                <li>Footer Transparent</li>
                <li>Footer Fixed</li>
                <li>Footer Components</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
export default Sidebar;
