// ajax
var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.github.com/users/leandroalvesmachado');
xhr.send(null);

xhr.onreadystatechange = function () {
    // status que terminou
    if (xhr.readyState === 4) {
        console.log(JSON.parse(xhr.responseText));
    }
}