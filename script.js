const gridElement = document.getElementById('grid');
const button = document.querySelector('button.button');

button.addEventListener('click', function() {
    gridElement.innerHTML = "";
    const RandomUniqueNumber = getRandomUniqueNumber( 1, 100, 16 );

    for (let index = 0; index < 100; index++) {
        const actualCell = createElement('div', 'cell');
        gridElement.appendChild(actualCell);
        actualCell.innerHTML = String(index + 1);
        actualCell.addEventListener('click', function(){
        actualCell.classList.toggle('selected');
        console.log(String(index + 1));
        });
    }
})

function createElement(tagName, className){
    const cellElement = document.createElement(tagName);
    cellElement.className = className;
    return cellElement;
}





function getRandomUniqueNumber( minNum, maxNum, elements ){
    const numbersList = [];

    if ( (maxNum - minNum) < elements ){
        return [];
    }

    while (numbersList.length < elements){
        const newRandomNumber = getRandomInt(minNum, maxNum);
        if (!numbersList.includes(newRandomNumber)){
            numbersList.push(newRandomNumber);
        }
    }

    return numbersList;
}

function getRandomInt(minumNumber, maximumNumber){
    const randomNumber = Math.floor( Math.random() * ( maximumNumber - minumNumber +1) + minumNumber);

    return randomNumber;
}