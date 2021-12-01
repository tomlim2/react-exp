// Foursquare API Info
const clientId = 'AAET0DA1YQ1300LNJA2X4TILV2M5BGEDQAEUP1YMD1FGHPXB';
const clientSecret = '5QP1BIURE3MVQA2CC2SZSJXR4N245ZRMYTEJXNKPESRQ2ML0';
const url = 'https://api.foursquare.com/v3/places/search?near=';
const accessToken = 'fsq3HRz54fRXsc+Q20TixEaRl48z+utOxSziqeefRJa7EnU='

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
const getVenues = () => {
  const options = {
    method: 'GET',
    headers: {
      credentials: 'include',
      Accept: 'application/json',
      Authorization: 'fsq35ltzeiYIT3uT1oTjF/cj9nmugblSX2dYVpiBBrLhHcs='
    }
  };
  
  fetch('https://api.foursquare.com/v3/places/search?limit=1', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
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