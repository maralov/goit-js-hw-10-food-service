import menuData from '../menu.json'
import menuItemTpl from '../templates/menu-list-item.hbs'

const menuListEl = document.querySelector('.js-menu')

menuListEl.innerHTML = menuItemTpl(menuData);