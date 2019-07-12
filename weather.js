const apiKey = "5cdd24dc1cdec8f93da5df66dc74779b";


let searchButton = document.getElementById('searchBtn');
let searchLocation = document.getElementById('searchPlace');
let cityName = document.getElementById('cityNme');
let temperature = document.getElementById('tempDiv');
let humidity = document.getElementById('humidityDiv');
let icon = document.getElementById("icon");

searchButton.addEventListener('click', function(){
   
    
    debugger;
    if (searchLocation.value === ""){
        console.log('searchlocation');
        alert('the field is empty');
    }
    else{
        alert('successful');
        let output = "https://api.openweathermap.org/data/2.5/weather?q=" + searchLocation.value + "&appid="+apiKey;
        console.log(output);
        httpRequestAsync(output, theResponse);

    }

});

function theResponse(response) {
    let jsonObject = JSON.parse(response);
    cityName.innerHTML = jsonObject.name;
    // icon.src = "http://openweathermap.org/img/w/" + jsonObject.weather[0].icon + ".png";
    temperature.innerHTML = "Temperature:" + parseInt(jsonObject.main.temp - 273) + "°";
    humidity.innerHTML = "Humidity:"+ jsonObject.main.humidity + "%";
  }
  
  function httpRequestAsync(url, callback)
  {
    console.log("hello");
      var httpRequest = new XMLHttpRequest();
      httpRequest.onreadystatechange = () => { 
          if (httpRequest.readyState == 4 && httpRequest.status == 200)
              callback(httpRequest.responseText);
      }
      httpRequest.open("GET", url, true); // true for asynchronous 
      httpRequest.send();
  }
