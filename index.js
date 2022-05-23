//remove #main
const main = document.querySelector("#main");
main.remove();

//the 'newHeader' variable points to a node 'h1#victory'
//has \"YOUR-NAME is the champion\" inside
const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = 'YOUR-NAME is the champion'
