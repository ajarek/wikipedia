const url =
  'https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch='
const btn = document.querySelector('#btn')as HTMLButtonElement
const search = document.querySelector('#search')as HTMLInputElement

async function getData(): Promise<void> {
  const row= document.querySelector('#row') as HTMLElement
  row.innerHTML = ''
    const searchTerm = `${search.value}`
    const response = await fetch(url + searchTerm)
    const data = await response.json()
    data.query.search.forEach((element:any) => {
        const title:string = element.title
        const snippet:string = element.snippet
        const pageid:string = element.pageid

        const div = document.createElement('div');
        div.classList.add('card','col','bg-secondary','gy-4');
        div.style.border='none';
        div.innerHTML = `<a href="https://en.wikipedia.org/?curid=${pageid}" target="_blank" style="text-decoration: none;"><ul  class="list-group list-group-flush">
        <li class="list-group-item" >${title}</li>
        <li class="list-group-item">${snippet}</li>
      </ul></a>`;
        const row=document.querySelector('#row')as HTMLElement
        row.appendChild(div)
        search.value=''
  })
}

btn.addEventListener('click',  () => {
    getData()
    })


