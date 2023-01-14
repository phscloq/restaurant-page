const content = document.getElementById('content');

export default function clean(){
    content.replaceChildren();
    return;
}



export {content};