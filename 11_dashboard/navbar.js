Vue.component('navbar', {
  template: `
<section class="header_container">
    <div class="header_search">
        <input type="text" placeholder="Search your key..."/>
    </div>
    <div class="header_right">
        <span id="first">Hello
            <span id="user_name">John Doe</span>
        </span>
        <span id="header_profile">
            <img src="http://pepdev.com/template/apez/admin/uploads/author-4.jpg"/>
            <div id="profile_menu">
                    <div id="profile_menu_arrow_top" class="arrow-up"></div>
                    <div id="profile_menu_header">
                        <img src="http://pepdev.com/template/apez/admin/uploads/author-1.jpg"/>
                        <span id="profile_name">John Doe</span>
                        <span id="profile_caption">Demonstration</span>
                    </div>
                    <div id="profile_menu_card">
                        <ul>
                            <li>
                                <i class="far fa-calendar-alt"></i>
                                <span class="profile_text">My Events</span>
                            </li>
                            <li>
                                <i class="far fa-address-book"></i>
                                <span class="profile_text">My Notes</span>
                            </li>
                            <li>
                                <i class="far fa-user"></i>
                                <span class="profile_text">My Profile</span>
                            </li>
                            <li>
                                <i class="fab fa-pinterest-p"></i>
                                <span class="profile_text">Client Portal</span>
                            </li>
                        </ul>
                    </div>
                    <div id="profile_menu_bottom">
                        <button class="primary">Logout</button>
                    </div>
            </div>
        </span>
        <span class="bell">
            <i class="fas fa-bell"></i>
        </span>
        <span class="notification">20</span>
        <div id="bell_menu">
            <div id="bell_menu_arrow_top" class="arrow-up"></div>
            <div id="bell_menu_header">
                <p>Notification</p>
            </div>
            <div id="bell_menu_card">
                <ul>
                    <li>Wallet Address</li>
                    <li>Coin Transferred from BTC <span class="text-warning">Unpaid</span></li>
                    <li>BTC bought</li>
                    <li>Server Restarted <span class="text-success">Resolved</span></li>
                    <li>New order received</li>
                </ul>
            </div>
        </div>
        <span id="grid"><i class="fas fa-th-large"></i></span>
        <div id="grid_menu">
            <div id="grid_menu_arrow_top" class="arrow-up"></div>
            <div id="grid_menu_header">
                <p>Quick Links</p>
            </div>
            <div id="grid_menu_card">
                <ul>
                    <li>
                        <i class="far fa-smile"></i>
                        <span class="grid_text">New Contact</span>
                    </li>
                    <li>
                        <i class="far fa-copy"></i>
                        <span class="grid_text">New Invoice</span>
                    </li>
                    <li>
                        <i class="far fa-plus-square"></i>
                        <span class="grid_text">New Quote</span>
                    </li>
                    <li>
                        <i class="far fa-money-bill-alt"></i>
                        <span class="grid_text">New Expense</span>
                    </li>
                </ul>
            </div>
        </div>
        <span id="last"><i class="fas fa-cog"></i></span>
    </div>
</section>
    `
});
