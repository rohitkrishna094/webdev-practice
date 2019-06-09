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
            <img src="http://pepdev.com/template/apez/admin/uploads/author-4.jpg" alt=""/>
        </span>
        <span class="bell">
            <i class="fas fa-bell"></i>
            </span>
            <span class="notification">20</span>
            <div id="bell_menu">
            <div id="bell_arrow_top" class="arrow-up"></div>
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
        <span><i class="fas fa-th-large"></i></span>
        <span id="last"><i class="fas fa-cog"></i></span>
    </div>
</section>
    `
});
