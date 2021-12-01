// Foursquare API Info
const clientId = 'AAET0DA1YQ1300LNJA2X4TILV2M5BGEDQAEUP1YMD1FGHPXB';
const clientSecret = '5QP1BIURE3MVQA2CC2SZSJXR4N245ZRMYTEJXNKPESRQ2ML0';
const url = 'https://api.foursquare.com/v3/places/search?near=';
const accessToken = 'fsq3c8LsJQqTu6tZ6jTGgMxGo5Brx7jMx6qAR87LW2CFhdE='

// OpenWeather Info
const openWeatherKey = 'ca3f1b9673fa1a16714d616face9034eD';
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';

// Page Elements
const $input = $('#city');
const $submit = $('#button');
const $destination = $('#destination');
const $container = $('.container');
const $venueDivs = [$("#venue1"), $("#venue2"), $("#venue3"), $("#venue4")];
const $weatherDiv = $("#weather1");
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const headers = new Headers({
  'Content-Type': 'text/xml',
});

// Add AJAX functions here:
const getVenues = async () => {
  const city = $input.val();
  // const options = {mode: 'no-cors',method: 'GET', headers: {Accept: 'application/json','Authorization': accessToken}};
  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: 'fsq3c8LsJQqTu6tZ6jTGgMxGo5Brx7jMx6qAR87LW2CFhdE='
    }
  };
  const urlToFetch = url + city 
  + '&limit=10';

  try{
    const response = await fetch(urlToFetch, options)
    if(response.ok){
      const jsonResponse = await response.json();
console.log(jsonResponse);
    }
    }catch(error){
      console.log(error)
    }
}

const getForecast = () => {

}


// Render functions
const renderVenues = (venues) => {
  $venueDivs.forEach(($venue, index) => {
    // Add your code here:

    let venueContent = '';
    $venue.append(venueContent);
  });
  $destination.append(`<h2>${venues[0].location.city}</h2>`);
}

const renderForecast = (day) => {
  // Add your code here:
  
	let weatherContent = '';
  $weatherDiv.append(weatherContent);
}

const executeSearch = () => {
  $venueDivs.forEach(venue => venue.empty());
  $weatherDiv.empty();
  $destination.empty();
  $container.css("visibility", "visible");
  getVenues()
  getForecast()
  return false;
}

$submit.click(executeSearch)