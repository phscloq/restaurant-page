import { content } from "../utility";

const contact = ()=>{
    const divP = document.createElement('div');
    var rImg = document.createElement('img');
   rImg.setAttribute('src', '../img/r3.png')
    divP.classList.add('divP');
    const divImg = document.createElement('div');
    divImg.appendChild(rImg);
   
    const div1 = document.createElement('div');
    const cname = document.createElement('h3');
    cname.textContent="Contact Us!";
    const adres = document.createElement('p');
    adres.textContent="Lorem Street, 2514";
    const phone = document.createElement('p');
    phone.textContent = "+48.....";

    div1.append(cname, adres, phone);
    div1.classList.add('div1');
    divP.append(divImg, div1);

    content.appendChild(divP);

}
export default contact;