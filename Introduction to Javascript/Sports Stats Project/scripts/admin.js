// adds teams to dropdown list of button
let games;
let then;
let now = new Date();
document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Add a click event on each of them
  $navbarBurgers.forEach( el => {
    el.addEventListener('click', () => {

      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle('is-active');
      $target.classList.toggle('is-active');

    });
  });

});
function onload(){

  // Date tells you when the scores were last updated, it is null simply create a new date
  if (localStorage.getItem("date") == null || localStorage.getItem("date") == undefined){
    then = new Date()
    }else{
      then = new Date(localStorage.getItem("date"));
    }

    // Get msbetween dates
  let msBetweenDates = Math.abs(then.getTime() - now.getTime());
// 👇️ convert ms to hours                  min  sec   ms
let hoursBetweenDates = msBetweenDates / (60 * 60 * 1000);

// If there aren't any games stored in the local storage OR if 12 hours have elapsed since the last updatethen fetch new scores
  if (localStorage.getItem("games") == null || hoursBetweenDates >= 12){
    getFetch();
  }else{
  games = JSON.parse(localStorage.getItem("games"));
  }
}

// List of all nba teams
let teams = ["Atlanta Hawks", "Boston Celtics", "Brooklyn Nets", "Charlotte Hornets", "Chicago Bulls", "Cleveland Cavaliers", "Dallas Mavericks", "Denver Nuggets", "Detroit Pistons", "Golden State Warriors", "Houston Rockets", "Indiana Pacers", "LA Clippers", "Memphis Grizzlies", "Miami Heat", "Milwaukee Bucks", "Minnesota Timberwolves", "New Orleans Pelicans", "New York Knicks", "Oklahoma City Thunder", "Orlando Magic", "Philadelphia 76ers", "Phoenix Suns", "Portland Trail Blazers", "Sacramento Kings", "San Antonio Spurs", "Toronto Raptors", "Utah Jazz", "Washington Wizards", "Los Angeles Lakers"]

// Creates an array of addedGames
  let addedGames = [];


  // Creates a drop down list with the name of each team
let select = document.querySelector("select")
for (let i = 0; i < teams.length; i++) {
  let option = document.createElement('option');
  option.textContent = teams[i]
  select.appendChild(option);
  
}


// Creates a drop down list for the away team
let selectlast = document.getElementById("last-select")
for (let i = 0; i < teams.length; i++) {
  let option = document.createElement('option');
  option.textContent = teams[i]
  selectlast.appendChild(option);
  
}
// Validation is below, ensures the user inputs correct values. 
let start = Date.parse('2022-10-18');
let end = Date.now();
function addGame(){
  let date = document.getElementById("date").value;
 let home = document.getElementById("test1").value;
let away = document.getElementById("last-select").value;
let homescore = document.getElementById("homeScore").value;
let awayScore = document.getElementById("awayScore").value;

if (date == "" || home == "" || homescore == "" || awayScore == ""){
  alert("Please enter the required fields");
  return;
  
}

if (homescore <0 || awayScore <0){
  alert("Please enter a valid score")
  return;
}

if (Date.parse(date) < start || Date.parse(date) > end){
  alert("Please enter a date within the start of the NBA season and today's date")
  return;
}
if (home == away){
  alert("Please select 2 different teams");
  return;
}
if (homescore == awayScore){
  alert("There can't be any ties")
  return;
}

// Constructs the game object

let game = {
  'date': date,
  'home_team':{
    full_name: home,
  },
  'home_team_score':homescore,

  'visitor_team':{
    full_name: away,
  },

  'visitor_team_score':awayScore,
}

// Pushes to the games array and saves it to local storage
games.push(game);
addedGames.push(game)
localStorage.setItem("games",JSON.stringify(games));
localStorage.setItem("addedGames",JSON.stringify(addedGames));

// Creates a message that states that the game was added sucessfully
let para = document.createElement("p");
let button = document.getElementById("btn");
para.textContent = "Game Added Successfully!"
button.appendChild(para);
console.log(game);

}


// Everything below is to fetch data from the api

var numPages = true; 
let currpage;
let finalpage;
let count = 1;
let gamesPush = []
// The api is formatted very weirdly so I have to ensure that it gets all the pages within the date range that I want it to get
  async function getFetch(){
    var date = new Date().toLocaleDateString();
    console.log(date)
    var datefinal = date.substring(0,date.lastIndexOf('/'));
    while (numPages == true){
      // Fetches the data the await makes it so that it waits for it to get the data before the rest of the code executes
    var data = await fetchAsync('https://www.balldontlie.io/api/v1/games?seasons[]=2022&start_date=2022-09-02&end_date=2022/'+datefinal+'&per_page=100'+'&page='+count)
    var arrs = data.data;
    currpage = data.meta.current_page
    finalpage = data.meta.total_pages
    if (currpage == finalpage){
      numPages = false;
    }
    // For each game pulled push it into the gamesPush array
    for (let index = 0; index < arrs.length; index++) {
      gamesPush.push(arrs[index]);
      }
   

    count++;
    }
    console.log(arrs)

    // If there are addedGames then add it into the same array
    if (localStorage.getItem("addedGames") !== null){
      gamesPush = gamesPush.concat(JSON.parse(localStorage.getItem("addedGames")))
    }

    // Sets the item to local storage
    localStorage.setItem("games",JSON.stringify(gamesPush));
    localStorage.setItem('date',now);
    getLocal()
  }

  
  // Gets the games from local storage
  function getLocal(){
    games = JSON.parse(localStorage['games']);
  }

  // Function used to fetch from an api
  async function fetchAsync (url) {
    let value;
    let response = await fetch(url);
    let data = await response.json().then(function(data){
      value = data;
    })
    console.log(value)
    return value;
  
  }