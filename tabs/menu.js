import { content } from "../utility";

const menu = [
{name:"Bulgur Pilavi",
description: "A traditional turkish bulgur pilav cooked with tomatoes souces.",
price: "24 TL"
},
{name:"Mantar Sote",
description: "A traditional turkish bulgur pilav cooked with tomatoes souces.",
price: "24 TL"
},
{name:"Iskender",
description: "A traditional turkish bulgur pilav cooked with tomatoes souces.",
price: "24 TL"
}];
function loadMenu(){
menu.forEach((item)=>{
    const div= document.createElement('div');
    const fname = document.createElement('h3');
   fname.textContent = item.name;
    const fdes = document.createElement('p');
    fdes.textContent=item.description;
    const fprc = document.createElement('p');
    fprc.textContent=item.price;

    div.append(fname, fdes, fprc);

    content.appendChild(div);
})
}
export default loadMenu;