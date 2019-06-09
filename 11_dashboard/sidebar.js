Vue.component('sidebar', {
  props: ['name'],
  template: `
<section class="sidebar_container">
    <div class="logo">
        <img src="./assets/logo.jpg" alt="logo" />
        <span class="logoText">Nen.js</span>
        <i class="fas fa-angle-double-left" onclick="hideSideBarClick()"></i>
    </div>
    <section class="sidebar">
        <!-- Main -->
        <div class="sidebar_contents">
            <div class="sidebar_section">
                <span class="sidebar_sectionTitle">Main</span>
                <div class="sidebar_menu" onclick="sideBarMenuClick(this)">
                    <i class="fas fa-desktop"></i>
                    <span class="sidebar_menuHeader">Dashboard</span>
                    <i class="fas fa-angle-right"></i>
                    <ul>
                        <li>CryptoCoin</li>
                        <li>Ecommerce</li>
                        <li>CRM</li>
                        <li>Analytics</li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Cryptocoin Pages -->
        <div class="sidebar_contents">
            <div class="sidebar_section">
                <span class="sidebar_sectionTitle">Cryptocoin Pages</span>
                <div class="sidebar_menu" onclick="sideBarMenuClick(this)">
                    <i class="fab fa-bitcoin"></i>
                    <span class="sidebar_menuHeader">Cryptocoin</span>
                    <i class="fas fa-angle-right"></i>
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

        <!-- Components -->
        <div class="sidebar_contents">
            <div class="sidebar_section">
                <span class="sidebar_sectionTitle">Components</span>
                <!-- UI Elements -->
                <div class="sidebar_menu" onclick="sideBarMenuClick(this)">
                    <i class="fas fa-layer-group"></i>
                    <span class="sidebar_menuHeader">UI Elements</span>
                    <i class="fas fa-angle-right"></i>
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

                <!-- Forms -->
                <div class="sidebar_menu" onclick="sideBarMenuClick(this)">
                    <i class="far fa-edit"></i>
                    <span class="sidebar_menuHeader">Forms</span>
                    <i class="fas fa-angle-right"></i>
                    <ul>
                        <li>Basic Form</li>
                        <li>Form Layout</li>
                        <li>Form Mask</li>
                        <li>Date Picker</li>
                        <li>File Upload</li>
                        <li>SummerNote Editor</li>
                    </ul>
                </div>

                <!-- Buttons -->
                <div class="sidebar_menu" onclick="sideBarMenuClick(this)">
                    <i class="fas fa-cloud-download-alt"></i>
                    <span class="sidebar_menuHeader">Buttons</span>
                    <i class="fas fa-angle-right"></i>
                    <ul>
                        <li>Bootstrap Buttons</li>
                        <li>Material Buttons</li>
                        <li>Air Buttons</li>
                    </ul>
                </div>

                <!-- Tables -->
                <div class="sidebar_menu" onclick="sideBarMenuClick(this)">
                    <i class="fas fa-tablet-alt"></i>
                    <span class="sidebar_menuHeader">Tables</span>
                    <i class="fas fa-angle-right"></i>
                    <ul>
                        <li>Basic Tables</li>
                        <li>Datatables Basic</li>
                        <li>Datatables Advanced</li>
                        <li>Datatables Datasource</li>
                        <li>Datatables Api</li>
                    </ul>
                </div>

                <!-- Icons -->
                <div class="sidebar_menu" onclick="sideBarMenuClick(this)">
                    <i class="far fa-flag"></i>
                    <span class="sidebar_menuHeader">Icons</span>
                    <i class="fas fa-angle-right"></i>
                    <ul>
                        <li>Font Awesome Icons</li>
                        <li>Themify Icons</li>
                        <li>Simple Line Icons</li>
                        <li>Weather Icons</li>
                        <li>Cryptocoins Icons</li>
                    </ul>
                </div>

                <!-- Widgets -->
                <div class="sidebar_menu" onclick="sideBarMenuClick(this)">
                    <i class="fas fa-puzzle-piece"></i>
                    <span class="sidebar_menuHeader">Widgets</span>
                    <i class="fas fa-angle-right"></i>
                    <ul>
                        <li>General Widgets</li>
                        <li>Chart Widgets</li>
                    </ul>
                </div>

                <!-- Calendar -->
                <div class="sidebar_menu" onclick="sideBarMenuClick(this)">
                    <i class="far fa-calendar-alt"></i>
                    <span class="sidebar_menuHeader">Calendar</span>
                    <i class="fas fa-angle-right"></i>
                    <ul>
                        <li>Basic Calendar</li>
                        <li>List View Calendar</li>
                        <li>External Event Calendar</li>
                    </ul>
                </div>

                <!-- Charts -->
                <div class="sidebar_menu" onclick="sideBarMenuClick(this)">
                    <i class="far fa-chart-bar"></i>
                    <span class="sidebar_menuHeader">Charts</span>
                    <i class="fas fa-angle-right"></i>
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

        <!-- Pages -->
        <div class="sidebar_contents">
            <div class="sidebar_section">
                <span class="sidebar_sectionTitle">Pages</span>

                <!-- Chat App -->
                <div class="sidebar_menu" onclick="sideBarMenuClick(this)">
                    <i class="fas fa-expand"></i>
                    <span class="sidebar_menuHeader">Chat App</span>
                    <i class="fas fa-angle-right"></i>
                    <ul>
                        <li>Chat App</li>
                        <li>Support Ticket</li>
                        <li>Ticket Detail</li>
                    </ul>
                </div>

                <!-- Mail Box -->
                <div class="sidebar_menu" onclick="sideBarMenuClick(this)">
                    <i class="fas fa-envelope-open-text"></i>
                    <span class="sidebar_menuHeader">Mail Box</span>
                    <i class="fas fa-angle-right"></i>
                    <ul>
                        <li>Mail Box</li>
                        <li>Compose Mail</li>
                        <li>Mail Detail</li>
                    </ul>
                </div>

                <!-- Timeline -->
                <div class="sidebar_menu" onclick="sideBarMenuClick(this)">
                    <i class="fas fa-stream"></i>
                    <span class="sidebar_menuHeader">Timeline</span>
                    <i class="fas fa-angle-right"></i>
                    <ul>
                        <li>Timeline 1</li>
                        <li>Timeline 2</li>
                        <li>Timeline 3</li>
                    </ul>
                </div>

                <!-- User -->
                <div class="sidebar_menu" onclick="sideBarMenuClick(this)">
                    <i class="fas fa-user-friends"></i>
                    <span class="sidebar_menuHeader">User</span>
                    <i class="fas fa-angle-right"></i>
                    <ul>
                        <li>Users</li>
                        <li>User Details</li>
                    </ul>
                </div>

                <!-- Custom Pages -->
                <div class="sidebar_menu" onclick="sideBarMenuClick(this)">
                    <i class="fas fa-wrench"></i>
                    <span class="sidebar_menuHeader">Custom Pages</span>
                    <i class="fas fa-angle-right"></i>
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

        <!-- Layout -->
        <div class="sidebar_contents">
            <div class="sidebar_section">
                <span class="sidebar_sectionTitle">Layout</span>
                <!-- Layout -->
                <div class="sidebar_menu" onclick="sideBarMenuClick(this)">
                    <i class="fas fa-square"></i>
                    <span class="sidebar_menuHeader">Layout</span>
                    <i class="fas fa-angle-right"></i>
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

                <!-- Header Color -->
                <div class="sidebar_menu" onclick="sideBarMenuClick(this)">
                    <i class="fas fa-heading"></i>
                    <span class="sidebar_menuHeader">Header Color</span>
                    <i class="fas fa-angle-right"></i>
                    <ul>
                        <li>Wide Light Sidebar</li>
                        <li>Wide Dark Sidebar</li>
                        <li>Gradient</li>
                    </ul>
                </div>

                <!-- Footer -->
                <div class="sidebar_menu" onclick="sideBarMenuClick(this)">
                    <i class="fab fa-foursquare"></i>
                    <span class="sidebar_menuHeader">Footer</span>
                    <i class="fas fa-angle-right"></i>
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
`
});
