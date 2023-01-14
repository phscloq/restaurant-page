import { content } from "../utility";

const contact = ()=>{
    const div = document.createElement('div');
    const cname = document.createElement('h3');
    cname.textContent="Contact Us!";
    const adres = document.createElement('p');
    adres.textContent="Lorem Street, 2514";
    const phone = document.createElement('p');
    phone.textContent = "+48.....";

    div.append(cname, adres, phone);
    content.appendChild(div);

}
export default contact;