let input = document.querySelector('.input')
let button = document.querySelector('.button');
let listaPai = document.querySelector('.lista-pai');



button.addEventListener('click', () => {
    if(input.value === ''){

        window.alert('Escreva uma tarefa')
        return false
    }

    
    let lista = document.createElement('li')
    let checkButton = document.createElement('button')
    let trashButton = document.createElement('button')

    checkButton.addEventListener('click', () => {
        lista.classList.add('risca-texto');
    })

    trashButton.addEventListener('click', () => {
        lista.remove();
    })

    lista.setAttribute('class', 'lista');
    lista.innerText = input.value;
    listaPai.append(lista);
    let imgCheck = document.createElement('img');
    let imgTrash = document.createElement('img');
    imgCheck.setAttribute('src', './img/check.png');
    imgTrash.setAttribute('src', './img/trash.png');
    checkButton.append(imgCheck);
    trashButton.append(imgTrash);
    lista.append(checkButton);
    lista.append(trashButton);
    input.value = '';

});





