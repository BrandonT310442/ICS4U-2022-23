let test = 0;


let test2 = [

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

let games = [];

const sleep = ms => new Promise(res => setTimeout(res, ms));


// async function runCode(){
// for (let i = 1; i < 32; i++) {

//   for (let index = 1; index < 5; index++) {    
  
//     await sleep(500);
//       fetch('https://www.balldontlie.io/api/v1/games?seasons[]=2022&team_ids[]='+i+"&page="+index)
// .then((response) => response.json())
// .then((data) => games.push(data));
// console.log(games);

    
//   }

// }

// }

var date = new Date().toLocaleDateString();
var count = 1; 
var datefinal = date.substring(0,date.lastIndexOf('/'));
console.log(datefinal)

// fetch('https://www.balldontlie.io/api/v1/games?seasons[]=2022&start_date=2022-10-02&end_date=2022/'+datefinal+'&per_page=100')
// .then((response) => response.json())
// .then(function(data){
//   var arrs = data.data;
//   for (let index = 0; index < arrs.length; index++) {
//   games.push(arrs[index]);
//   }
//   console.log(games);
//   console.log(data.meta);
//   console.log(data.meta.total_pages);
//   console.log(data.meta.current_page !== data.meta.total_pages)
// numPages = data.meta.current_page !== data.meta.total_pages; 
// console.log(numPages)
// });

let teamData;

function getTeams() {
  teamData = JSON.parse(localStorage['games']);
  console.log(teamData)
}




//  async function runCode(){
//   while (numPages == true){
//   fetch('https://www.balldontlie.io/api/v1/games?seasons[]=2022&start_date=2022-10-02&end_date=2022/'+datefinal+'&per_page=100'+'&page='+count)
// .then((response) => response.json())
// .then(function dataRun(data){
//   var arrs = data.data;
//   for (let index = 0; index < arrs.length; index++) {
//   games.push(arrs[index]);
//   }
//   currpage = data.meta.current_page
//  finalpage = data.meta.total_pages
//  console.log("test3");
// });

// await sleep(500); // FIXXX
// if (currpage == finalpage){
//   numPages = false;
// }
// console.log("in loop");

// count++;
// }
// console.log(games[0])
// console.log(games[0].home_team);
// localStorage.setItem('games', JSON.stringify(games));
// }
// runCode();


var numPages = true; 
var currpage;
var finalpage;

async function runCode(){
  while (numPages == true){
  var data = await fetchAsync('https://www.balldontlie.io/api/v1/games?seasons[]=2022&start_date=2022-10-02&end_date=2022/'+datefinal+'&per_page=100'+'&page='+count)
  var arrs = data.data;
  console.log(arrs.length);
  for (let index = 0; index < arrs.length; index++) {
  games.push(arrs[index]);
  }
  currpage = data.meta.current_page
 finalpage = data.meta.total_pages
 console.log("test3");


// await sleep(500); // FIXXX
if (currpage == finalpage){
  numPages = false;
}
console.log("in loop");

count++;
  }
console.log(games[0])
console.log(games[0].home_team);
localStorage.setItem('games', JSON.stringify(games));
}

async function fetchAsync (url) {
  let value;
  let response = await fetch(url);
  let data = await response.json().then(function(data){
    value = data;
  })
  console.log(value)
  return value;

}


runCode();
console.log(games)



let teams = [];
let team = {};
team['name'] = 'Atlanta Hawks';
team['id'] = 1;
team['w'] = 0;
team['L'] = 0;
team['games'] = [];
teams.push(team);

team = {};
team['name'] = 'New York';
team['id'] = 2;
team['w'] = 0;
team['L'] = 0;
team['games'] = [];
teams.push(team);

console.log(teams);



