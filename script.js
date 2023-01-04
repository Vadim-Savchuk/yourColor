"use strict";

let input = document.querySelector('.input');
let color = document.querySelector('.app');
let items = document.querySelectorAll('.list li');
let colorsList = document.querySelector('.list-colors')
let buttonConstruct = document.querySelector('.button');

let colors  = JSON.parse(localStorage.getItem('colors')) || [];
let counter = 0;

// Перевірка на наявність кольорів в масиві
if(localStorage.getItem('colors') !== null){
    for(let color of colors){
        colorsList.innerHTML +=
           `<li>
                <span>#${color}</span>
                <a data-num="${counter++}" class="link" href="#">Remove</a>
            </li>`

            delateColor();
    }
}

// Кнопки 
for(let button of items){
    button.addEventListener('click', createColor);
}

// Колір
function createColor(){
    if (input.value.length < 6) {
        input.value += this.textContent;
    }
}

buttonConstruct.addEventListener('click', showColor);

// Показує колір по натисканю
function showColor(){
    if(input.value.length > 2){
        colors.push(input.value);
        color.style.backgroundColor = '#' + colors[colors.length - 1];
        styleColor();

        localStorage.setItem('colors', JSON.stringify(colors));
        CreateColorsList();

        input.value = '';
    }
}

// Список кольорів
function CreateColorsList(){
        colorsList.innerHTML +=
           `<li>
                <span>#${colors[colors.length -1]}</span>
                <a data-num="${counter++}" class="link" href="#">Remove</a>
            </li>`

            delateColor();
}

// Видалити колір зі списку
function delateColor(){
    let links = document.querySelectorAll('.link');
    for(let link of links){
            link.addEventListener('click', function(e){
                e.preventDefault();
                link.parentNode.remove();
                colors.splice(link.dataset.num, 1);
                localStorage.setItem('colors', JSON.stringify(colors));
            });
    }
}    

// Показую список меню
colorsList.addEventListener('click', function(event){
    if (event.target.matches('ul')) {
        colorsList.classList.toggle('active');
	}
    // Під питаням
    // else if(event.target.matches('.delate-all')){ 
    //     delateAll();
    // }
});

// Видалити все (під питаням)
// function delateAll(){
//     colors = [];
//     colorsList.innerHTML = '';
//     localStorage.setItem('colors', JSON.stringify(colors));
// }


// Колір програми
function styleColor(){
    let str = colors[colors.length -1];
    let arr = str.split('');
    let newArr = [];

    for(let i of arr){
        if(i == 0 || i == 1 || i == 2 || i == 3 || i == 4 || i == 5 || i == 6 || i == 7 || i == 8 || i == 9){
            newArr.push(i);
        } else{

        }
    }

    if(newArr.length > 4){
        color.style.color = 'white';

        input.style.color = 'white';
        input.style.border =  2 + 'px ' + 'dashed ' + 'white';

        buttonConstruct.style.color = 'white';
        buttonConstruct.style.border =  2 + 'px ' + 'solid ' + 'white';
       
        for(let i of items){
            i.style.border =  2 + 'px ' + 'solid ' + 'white';
        }
    }else{
        color.style.color = 'black';

        input.style.color = 'black';
        input.style.border =  2 + 'px ' + 'dashed ' + 'black';

        buttonConstruct.style.color = 'black';
        buttonConstruct.style.border =  2 + 'px ' + 'solid ' + 'black';
       
        for(let i of items){
            i.style.border =  2 + 'px ' + 'solid ' + 'black';
        }
    }
}