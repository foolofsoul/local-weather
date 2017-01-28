

var loc = document.getElementById("location"),
    temp = document.getElementById("temperature"),
    wType = document.getElementById("weather-type"),
    lat,
    lon;

var bg = {
  b01d: "https://static.pexels.com/photos/27690/pexels-photo-27690.jpg",
  b01n: "https://static.pexels.com/photos/27690/pexels-photo-27690.jpg",

  b02d: "https://www.dropbox.com/s/7qbqvatl42bcuz2/101H.jpg?dl=1",
  b02n: "https://www.dropbox.com/s/7qbqvatl42bcuz2/101H.jpg?dl=1",

  b03d: "https://hd.unsplash.com/photo-1454649978226-6dd578c28449",
  b03n: "https://hd.unsplash.com/photo-1454649978226-6dd578c28449",

  b04d: "https://hd.unsplash.com/photo-1422493567187-657e311ee1a4",
  b04n: "https://hd.unsplash.com/photo-1422493567187-657e311ee1a4",

  b09d: "https://static.pexels.com/photos/119569/pexels-photo-119569.jpeg",
  b09n: "https://static.pexels.com/photos/119569/pexels-photo-119569.jpeg",

  b10d: "https://static.pexels.com/photos/17739/pexels-photo.jpg",
  b10n: "https://static.pexels.com/photos/17739/pexels-photo.jpg",

  b11d: "https://unsplash.com//photos/revxuIor0nY/download",
  b11n: "https://unsplash.com//photos/revxuIor0nY/download",

  b13d: "http://zoommyapp.com/system/unique_assets/photos/000/000/010/original/img_0010.jpg?1436347799",
  b13n: "http://zoommyapp.com/system/unique_assets/photos/000/000/010/original/img_0010.jpg?1436347799",

  b50d: "http://bossfight.co/wp-content/uploads/2015/06/boss-fight-stock-images-photos-free-seattle-sky-view.jpg",
  b50n: "http://bossfight.co/wp-content/uploads/2015/06/boss-fight-stock-images-photos-free-seattle-sky-view.jpg"
  

  // thunderstorm: [
  //   "thunderstorm with light rain",
  //   "thunderstorm with rain",
  //   "thunderstorm with heavy rain",
  //   "light thunderstorm",
  //   "thunderstorm",
  //   "heavy thunderstorm",
  //   "ragged thunderstorm",
  //   "thunderstorm with light drizzle",
  //   "thunderstorm with drizzle",
  //   "thunderstorm with heavy drizzle"
  // ],

  // drizzle: [
  //   "light intensity drizzle",
  //   "drizzle",
  //   "heavy intensity drizzle",
  //   "light intensity drizzle rain",
  //   "drizzle rain",
  //   "heavy intensity drizzle rain",
  //   "shower rain and drizzle",
  //   "heavy shower rain and drizzle",
  //   "shower drizzle"
  // ],

  // rain: [
  //   "light rain",
  //   "moderate rain",
  //   "heavy intensity rain",
  //   "very heavy rain",
  //   "extreme rain",
  //   "freezing rain",
  //   "light intensity shower rain",
  //   "shower rain",
  //   "shower drizzle",
  //   "heavy intensity shower rain",
  //   "ragged shower rain"
  // ],

  // snow: [
  //   "light snow",
  //   "snow",
  //   "heavy snow",
  //   "sleet",
  //   "shower sleet",
  //   "light rain and snow",
  //   "rain and snow",
  //   "light shower snow",
  //   "shower snow",
  //   "heavy shower snow"
  // ],

  // drizzle: [
  //   "light intensity drizzle",
  //   "drizzle",
  //   "heavy intensity drizzle",
  //   "light intensity drizzle rain",
  //   "drizzle rain",
  //   "heavy intensity drizzle rain",
  //   "shower rain and drizzle",
  //   "heavy shower rain and drizzle",
  //   "shower drizzle"
  // ],

  // atmosphere: [
  //   "mist",
  //   "smoke",
  //   "haze",
  //   "sand, dust whirls",
  //   "fog",
  //   "sand",
  //   "dust",
  //   "volcanic ash",
  //   "squalls",
  //   "tornado"
  // ],

  // clear: [
  //   "clear sky"
  // ],

  // clouds: [
  //   "tornado",
  //   "tropical",
  //   "hurricane",
  //   "cold",
  //   "hot",
  //   "windy",
  //   "hail"
  // ],

  // additional: [
  //   "calm",
  //   "light breeze",
  //   "gentle breeze",
  //   "moderate breeze",
  //   "fresh breeze",
  //   "strong breeze",
  //   "high wind, near gale",
  //   "severe gale",
  //   "storm",
  //   "violent storm",
  //   "hurricane"
  // ]

}

navigator.geolocation.getCurrentPosition(showPos);

function showPos(position){
  lat = position.coords.latitude;
  lon = position.coords.longitude;

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function(){
    if (this.readyState === 4 && this.status === 200) {
      var json = JSON.parse(xhr.responseText);
      var img = json.weather[0].icon;

      loc.innerHTML = json.name + ", " + json.sys.country;
      wType.innerHTML = json.weather[0].main;
      temp.innerHTML = json.main.temp.toFixed(0) + "<sup id='scale'>&deg;F</sup>";

      document.body.style.background = "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.0)), url(" + bg[ "b" + img] + ")";
      document.body.style.backgroundSize = "cover";
    }
  }

  xhr.open("GET", "http://api.openweathermap.org/data/2.5/weather?APPID=ea8332c4c5398fa510b78c97746a685d&units=imperial&lat=" + lat + "&lon=" + lon, true);
  xhr.send();
}

