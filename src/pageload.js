import { content } from "../utility";
const body = document.querySelector('body');
function pageLoad(){
    const header = document.createElement("header");
    const navbar = document.createElement('div');
    
    const home = document.createElement('button');
    home.classList.add("home-button");
    home.id='home-buttonid';
    home.textContent = "Home";

    const menu = document.createElement('button');
    menu.classList.add("menu-button");
    menu.textContent = "Menu";

    const contact = document.createElement('button');
    contact.classList.add("contact-button");
    contact.textContent = "Contact";

    navbar.append(home, menu, contact);
    body.insertAdjacentElement("afterbegin", header);
    header.appendChild(navbar);
}
export default  pageLoad;