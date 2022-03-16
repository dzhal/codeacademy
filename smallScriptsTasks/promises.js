fetch('products.json').then(function (response) {
    return response.json();
}).then(function (json) {
    products = json;
    initialize();
}).catch(function (err) {
    console.log('Ошибка загрузки: ' + err.message);
});