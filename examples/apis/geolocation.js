//USE NO CONSOLE DO NAVEGADOR
navigator.geolocation.getCurrentPosition(function(position) {
    console.log(position.coords.latitude, position.coords.longitude);
});

var watchID = navigator.geolocation.watchPosition(function(position) {
    console.log(position.coords.latitude, position.coords.longitude);
});
