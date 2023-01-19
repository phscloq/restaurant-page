import pageLoad from "./pageload";
import about from "../tabs/home";
import loadMenu from "../tabs/menu";
import clean from "../utility";
import contact from "../tabs/contact";
import selected from "../tabselect";
pageLoad();
about();

    const homeButton = document.querySelector(".home-button");
    homeButton.addEventListener("click", ()=>{
        clean();
        about();
        
        contactButton.classList.remove('selected');
        menuButton.classList.remove('selected');
        homeButton.classList.add('selected');
    });
    const menuButton = document.querySelector(".menu-button");
    menuButton.addEventListener("click", ()=>{
        clean();
    loadMenu();
    contactButton.classList.remove('selected');
    menuButton.classList.add('selected');
    homeButton.classList.remove('selected');
    });
    const contactButton = document.querySelector(".contact-button");
    contactButton.addEventListener("click", ()=>{
        clean();
        contact();
        contactButton.classList.add('selected');
        menuButton.classList.remove('selected');
        homeButton.classList.remove('selected');

    });
    


console.log("Worked!");