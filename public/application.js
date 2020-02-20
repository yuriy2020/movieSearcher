/**запрос из строки поиска
 * передача этой строки по фетчу на сервер 
 * обработка строки и пробразование в нужную
 * http://www.omdbapi.com/?s=Harry%20pot......
 * переход на сайт и получение данных
 */

document.forms["searchForm"].addEventListener('submit', async (event) => {
    event.preventDefault();

    let searchMovie = event.target.children[0].value
    console.log('Client send>>>', searchMovie);

    const response = await fetch('/search', {
        method: 'POST',
       
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({search: searchMovie})
    })
    const result = await response.json();

})
 