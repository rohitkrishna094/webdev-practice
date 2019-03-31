document.addEventListener('DOMContentLoaded', () => {
  let sideBarStyleNode;
  hideSideBarClick = () => {
    const str = `.logo .logoText,.logo img,.sidebar_menu i:nth-child(3),.sidebar_menuHeader,.sidebar_sectionTitle{display:none}.logo{height:68px}.logo i{display:block;margin-left:auto;margin-right:auto;transform:scaleX(-1);margin-bottom:auto;margin-top:auto}.sidebar_container{width:var(--sidebarMinWidth)}`;
    console.log(sideBarStyleNode);
    if (sideBarStyleNode === undefined) {
      sideBarStyleNode = document.createElement('style');
      sideBarStyleNode.innerHTML = str;
      document.body.appendChild(sideBarStyleNode);
    } else {
      document.body.removeChild(sideBarStyleNode);
      sideBarStyleNode = undefined;
    }
  };
});
