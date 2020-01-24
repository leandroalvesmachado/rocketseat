// utilizando axios (encapsula o ajax)
axios.get('https://api.github.com/users/leandroalvesmachado')
    .then(function(response) {
        console.log(response);
        console.log(response.data);
    })
    .catch(function(error) {
        console.log(error);
    });