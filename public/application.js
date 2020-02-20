/**запрос из строки 
 * передача этой строки по фетчу на сервер 
 * 
 */

console.log(document.forms[0].children[0])
document.querySelector('#searchForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    let searchMovie = event.target.children[0].value
 await fetch('/', )
})
