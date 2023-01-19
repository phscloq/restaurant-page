import { content } from "../utility";
import '/src/style.css';

const about = ()=>{
    const homeDiv = document.createElement('div');
    homeDiv.classList.add('home-div');
    const titleDiv = document.createElement('div');
    const title = document.createElement('h1');
    title.textContent = "The DGN Food Palace"
    title.classList.add("title");
    titleDiv.appendChild(title);
    

    const descriptionDiv = document.createElement('div');
    const description = document.createElement('p');
    description.textContent = "Welcome to our restaurant's website! We are a family-owned establishment that has been serving delicious meals for over 20 years. Our menu features a wide variety of options, including classic Italian dishes, fresh seafood, and vegetarian options. We also have a full bar with a great selection of wines and signature cocktails. In addition to dine-in service, we also offer takeout and delivery options. We are open seven days a week and offer a comfortable and casual dining atmosphere. We look forward to serving you soon!";
    descriptionDiv.appendChild(description);
    content.classList.add('mid', 'parent');
    descriptionDiv.classList.add('description');
    homeDiv.append(titleDiv, descriptionDiv);
    content.appendChild(homeDiv);
}   
export default about;