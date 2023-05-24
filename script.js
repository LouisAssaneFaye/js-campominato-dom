const gridElement = document.getElementById('grid');
const button = document.querySelector('button.button');
let myarray = [];
const RandomUniqueNumber = getRandomUniqueNumber( 1, 100, 16 );

button.addEventListener('click', function() {
    gridElement.innerHTML = "";
    console.log(RandomUniqueNumber);
    for (let index = 0; index < 100; index++) {
        const actualCell = createElement('div', 'cell');
        gridElement.appendChild(actualCell);
        actualCell.innerHTML = String(index + 1);
        actualCell.addEventListener('click', function(){
            myarray = [];
            for ( let i = 0 ; i < 16 ; i++) {
                if (actualCell.innerHTML === String(RandomUniqueNumber[i])) {
                    myarray.push(i);
                }      
            }
            console.log(myarray);
            if (myarray.length === 0){
                actualCell.classList.toggle('selected');
                console.log('non ha preso la bomba');
            } else {
                actualCell.classList.toggle('selected2');
                console.log('ha preso la bomba');
            }
            
            
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