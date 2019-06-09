document.addEventListener('DOMContentLoaded', () => {
  let sideBarStyleNode;
  hideSideBarClick = () => {
    const str = `.logo .logoText,.logo img,.sidebar_menu i:nth-child(3),.sidebar_menuHeader,.sidebar_sectionTitle{display:none}.logo{height:68px}.logo i{display:block;margin-left:auto;margin-right:auto;transform:scaleX(-1);margin-bottom:auto;margin-top:auto}.sidebar_container{width:var(--sidebarMinWidth)}`;
    if (sideBarStyleNode === undefined) {
      sideBarStyleNode = document.createElement('style');
      sideBarStyleNode.innerHTML = str;
      document.body.appendChild(sideBarStyleNode);
    } else {
      document.body.removeChild(sideBarStyleNode);
      sideBarStyleNode = undefined;
    }
  };

  let ul;
  let prevE;
  sideBarMenuClick = e => {
    if (ul === undefined) {
      ul = e.querySelector('ul');
      ul.style.display = 'block';
      e.style.backgroundColor = '#202231';
      prevE = e;
    } else {
      // new ul
      let newUl = e.querySelector('ul');
      if (ul === newUl) {
        ul.style.display = 'none';
        ul = undefined;
        e.style.backgroundColor = '#282a3c';
        prevE = undefined;
      } else {
        newUl.style.display = 'block';
        e.style.backgroundColor = '#202231';

        ul.style.display = 'none';
        prevE.style.backgroundColor = '#282a3c';
      }
    }
  };

  let app = new Vue({
    el: '#app'
  });
});
