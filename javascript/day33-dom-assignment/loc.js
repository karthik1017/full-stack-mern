var btnHandle = document.getElementById('btn');
var locHandle = document.getElementById('location');
var tempHandle = document.getElementById('weather');
var longitude;
var latitude;
var url = 'https://api.darksky.net/forecast';
var key = 'ff6df8e7bc4eada1a8a77abc54f7be18';

btnHandle.addEventListener('click',function(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else {
          locHandle.innerHTML = "Geolocation is not supported by this browser.";
    }
},false);
function showPosition(position) {
    longitude = position.coords.latitude;
    latitude = position.coords.longitude;
    locHandle.innerHTML = `logitude : ${longitude} <br/> latitude : ${latitude}`;
    console.log(longitude)
    axios.get(`${url}/${key}/${latitude},${longitude}`)
    .then(response => {
        var result = response.data;
        tempHandle.innerHTML =`temperature : ${result.currently.temperature}`;
    })
    .catch(err => {
        console.log(err);
    });
}

