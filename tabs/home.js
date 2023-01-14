import { content } from "../utility";

const about = ()=>{
    const titleDiv = document.createElement('div');
    const title = document.createElement('h1');
    title.textContent = "The DGN Food Palace"
    titleDiv.appendChild(title);

    const descriptionDiv = document.createElement('div');
    const description = document.createElement('p');
    description.textContent = "Since 1960 DGN Food Palace at serves of people of Istanbul. Everything we use are special to our restaurant. We delicately select our products."
    descriptionDiv.appendChild(description);

    content.append(titleDiv, descriptionDiv);
}   
export default about;