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
    window.location =`/search/${searchMovie}`

    // const response = await fetch(`/search/${searchMovie}` , {
    //     method: 'GET',
    //     headers: {

    //     },
    //     // body: JSON.stringify({search: searchMovie})
    // })
    // const result = await response.json();
    // console.log(">>>result",json)
})
//(`http://www.omdbapi.com/?s=${searchMovie}&apikey=302738ca`, {


    // document.querySelector('.container-movie').addEventListener('click', async (event) =>{
    //     console.log(event.target.parentNode);
        
    //     if (event.target.parentNode.className === "movie-open"){
    //         event.preventDefault();
    //         window.location = `/movie/${event.target.parentNode.href}`
    //     }
    // })