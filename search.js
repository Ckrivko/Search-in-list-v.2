import { towns } from './towns.js'
import { render, html } from './node_modules/lit-html/lit-html.js'
import { mainTemplate } from './template.js';

let searchBtnEl = document.querySelector('#search-btn');
let inputEl = document.querySelector('#searchText')
let divResult = document.querySelector('#result')
let divTowns = document.querySelector('#towns')

render(mainTemplate(towns), divTowns)


searchBtnEl.addEventListener('click', search)


function search() {

    let townsElements = Array.from(document.querySelectorAll('#towns ul li'))

    divResult.textContent = '';
    let input = inputEl.value;
    let matches = 0

    towns.forEach(el => {

        let town = el.toLowerCase();
        if (town.includes(input) && input !== '') {
            matches++;
        }
    })

    townsElements.forEach(el => {
        el.className = '';
        let town = el.textContent.toLowerCase();
        if (town.includes(input) && input !== '') {
            el.classList.add("active");
        }
    })

    divResult.textContent = `${matches} matches found`;
    inputEl.value = '';
}

