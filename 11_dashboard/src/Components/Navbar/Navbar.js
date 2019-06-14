import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <section className="header_container">
      <div className="header_search">
        <input type="text" placeholder="Search your key..." />
      </div>
      <div className="header_right">
        <span id="first">
          Hello
          <span id="user_name">John Doe</span>
        </span>
        <span id="header_profile">
          <img src="http://pepdev.com/template/apez/admin/uploads/author-4.jpg" alt="" />
          <div id="profile_menu">
            <div id="profile_menu_arrow_top" className="arrow-up" />
            <div id="profile_menu_header">
              <img src="http://pepdev.com/template/apez/admin/uploads/author-1.jpg" alt="" />
              <span id="profile_name">John Doe</span>
              <span id="profile_caption">Demonstration</span>
            </div>
            <div id="profile_menu_card">
              <ul>
                <li>
                  <i className="far fa-calendar-alt" />
                  <span className="profile_text">My Events</span>
                </li>
                <li>
                  <i className="far fa-address-book" />
                  <span className="profile_text">My Notes</span>
                </li>
                <li>
                  <i className="far fa-user" />
                  <span className="profile_text">My Profile</span>
                </li>
                <li>
                  <i className="fab fa-pinterest-p" />
                  <span className="profile_text">Client Portal</span>
                </li>
              </ul>
            </div>
            <div id="profile_menu_bottom">
              <button className="primary">Logout</button>
            </div>
          </div>
        </span>
        <span className="bell">
          <i className="fas fa-bell" />
        </span>
        <span className="notification">20</span>
        <div id="bell_menu">
          <div id="bell_menu_arrow_top" className="arrow-up" />
          <div id="bell_menu_header">
            <p>Notification</p>
          </div>
          <div id="bell_menu_card">
            <ul>
              <li>Wallet Address</li>
              <li>
                Coin Transferred from BTC <span className="text-warning">Unpaid</span>
              </li>
              <li>BTC bought</li>
              <li>
                Server Restarted <span className="text-success">Resolved</span>
              </li>
              <li>New order received</li>
            </ul>
          </div>
        </div>
        <span id="grid">
          <i className="fas fa-th-large" />
        </span>
        <div id="grid_menu">
          <div id="grid_menu_arrow_top" className="arrow-up" />
          <div id="grid_menu_header">
            <p>Quick Links</p>
          </div>
          <div id="grid_menu_card">
            <ul>
              <li>
                <i className="far fa-smile" />
                <span className="grid_text">New Contact</span>
              </li>
              <li>
                <i className="far fa-copy" />
                <span className="grid_text">New Invoice</span>
              </li>
              <li>
                <i className="far fa-plus-square" />
                <span className="grid_text">New Quote</span>
              </li>
              <li>
                <i className="far fa-money-bill-alt" />
                <span className="grid_text">New Expense</span>
              </li>
            </ul>
          </div>
        </div>
        <span id="last">
          <i className="fas fa-cog" />
        </span>
      </div>
    </section>
  );
}

export default Navbar;
