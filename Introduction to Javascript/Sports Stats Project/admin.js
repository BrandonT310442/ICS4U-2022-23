// adds teams to dropdown list of button

let teams = [

    "Atlanta Hawks",
  "Boston Celtics",
  "Brooklyn Nets",
  "Charlotte Hornets", 
  "Chicago Bulls",
  "Cleveland Cavaliers",
  "Dallas Mavericks",
  "Denver Nuggets",
  "Detroit Pistons",
  "Golden State Warriors",
  "Houston Rockets",
  "Indiana Pacers",
  "LA Clippers",
  "LA Lakers",
  "Memphis Grizzlies",
  "Miami Heat",
  "Milwaukee Bucks",
  "Minnesota Timberwolves",
  "New Orleans Hornets",
  "New York Knicks",
  "Oklahoma City Thunder",
  "Orlando Magic",
  "Philadelphia 76ers",
  "Phoenix Suns",
  "Portland Trail Blazers",
  "Sacramento Kings",
  "San Antonio Spurs",
  "Toronto Raptors",
  "Utah Jazz",
  "Washington Wizards"
  
  ];


let select = document.querySelector("select")
for (let i = 0; i < teams.length; i++) {
  let option = document.createElement('option');
  option.textContent = teams[i]
  select.appendChild(option);
  
}


let selectlast = document.getElementById("last-select")
for (let i = 0; i < teams.length; i++) {
  let option = document.createElement('option');
  option.textContent = teams[i]
  selectlast.appendChild(option);
  
}


function addGame(){
  let date = document.getElementById("date").value;
 let home = document.getElementById("test1").value;
let away = document.getElementById("last-select").value;
let homescore = document.getElementById("homeScore").value;
let awayScore = document.getElementById("awayScore").value;

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

let games = JSON.parse(localStorage.getItem("games"));

games.push(game);

localStorage.setItem("games",JSON.stringify(games));

console.log(game);

}