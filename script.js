let input = document.querySelector('.input')
let button = document.querySelector('.button');
let listaPai = document.querySelector('.lista-pai');

button.addEventListener('click', () => {
    let lista = document.createElement('li')
    let checkButton = document.createElement('button')

    checkButton.addEventListener('click', () => {
        lista.classList.add('risca-texto');
    })

    lista.setAttribute('class', 'lista');
    lista.innerText = input.value;
    listaPai.append(lista);
    let imgCheck = document.createElement('img');
    imgCheck.setAttribute('src', './img/check.png');
    checkButton.append(imgCheck);
    lista.append(checkButton);
    input.value = '';

});





