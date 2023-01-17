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
        selected();
    });
    const menuButton = document.querySelector(".menu-button");
    menuButton.addEventListener("click", ()=>{
        clean();
    loadMenu();
    });
    const contactButton = document.querySelector(".contact-button");
    contactButton.addEventListener("click", ()=>{
        clean();
        contact();
    });
    


console.log("Worked!");