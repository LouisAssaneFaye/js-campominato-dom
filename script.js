const gridElement = document.getElementById('grid');
const button = document.querySelector('button.button');

button.addEventListener('click', function() {
    for (let index = 0; index < 100; index++) {
        const actualCell = createElement('div', 'cell');
        gridElement.appendChild(actualCell);
        actualCell.innerHTML = String(index + 1);
        actualCell.addEventListener('click', function(){
        actualCell.classList.toggle('selected');
        console.log(String(index + 1));
        });
    }
     
    button.className = 'disabled';
})

function createElement(tagName, className){
    const cellElement = document.createElement(tagName);
    cellElement.className = className;
    return cellElement;
}

