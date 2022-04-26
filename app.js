"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const url = 'https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=';
const btn = document.querySelector('#btn');
const search = document.querySelector('#search');
function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        const row = document.querySelector('#row');
        row.innerHTML = '';
        const searchTerm = `${search.value}`;
        const response = yield fetch(url + searchTerm);
        const data = yield response.json();
        data.query.search.forEach((element) => {
            const title = element.title;
            const snippet = element.snippet;
            const pageid = element.pageid;
            const div = document.createElement('div');
            div.classList.add('card', 'col', 'bg-secondary', 'gy-4');
            div.style.border = 'none';
            div.innerHTML = `<a href="https://en.wikipedia.org/?curid=${pageid}" target="_blank" style="text-decoration: none;"><ul  class="list-group list-group-flush">
        <li class="list-group-item" >${title}</li>
        <li class="list-group-item">${snippet}</li>
      </ul></a>`;
            const row = document.querySelector('#row');
            row.appendChild(div);
            search.value = '';
        });
    });
}
btn.addEventListener('click', () => {
    getData();
});
