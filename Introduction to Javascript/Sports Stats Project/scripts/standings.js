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

// Creates a games array
let games = [];
// Pauses code for a specifica mount of time
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
// Gets dates that are used for the api
var date = new Date().toLocaleDateString();
console.log(date)
var count = 1; 
var datefinal = date.substring(0,date.lastIndexOf('/'));
console.log(datefinal)

const today = new Date();
console.log(today)

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
var getTeams2 = false;

function getTeams() {
  // Waits till the json is loaded into the localstorage
  if (getTeams2 == false){
    window.setTimeout(getTeams, 100); /* this checks the json every 100 milliseconds*/
    console.log("test")
  }else{
  teamData = JSON.parse(localStorage['games']);
  console.log(teamData)

  // Sets the amount of wins and losses each team has
  for (let index = 0; index < teamData.length; index++) {
    var homeScore = parseInt(teamData[index].home_team_score);   
    var awayScore = parseInt(teamData[index].visitor_team_score);   
    let formatDate;
    if (teamData[index].date.indexOf("T") != -1){
    formatDate = teamData[index].date.substring(0,teamData[index].date.indexOf("T"));
    }else{
      formatDate = teamData[index].date;
    }
    console.log(formatDate)
    console.log(isInThePast(new Date(formatDate)));
    console.log(teamData[index].date)
    // Ensure the games being added is in the pass
    if (homeScore > awayScore && isInThePast(new Date(formatDate))){
      addRecord(teamData[index].home_team.full_name,teamData[index].visitor_team.full_name);
    }else if (awayScore > homeScore && isInThePast(new Date(formatDate))){
      addRecord(teamData[index].visitor_team.full_name,teamData[index].home_team.full_name);

    }else if (homeScore !== 0){
      console.log(teamData[index].visitor_team.full_name+"wins"+"& "+teamData[index].home_team.full_name+"loses");
    }
   
    }

    createtableEast();
    createtableWest();

  }

  
}

// Checks if a date is in the past
function isInThePast(date) {
  const today = new Date();

 
  return date < today;
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

// Everything below is to fetch data from the api

var numPages = true; 
var currpage;
var finalpage;
let dateRan; 
let then;
let now = new Date();
  // Date tells you when the scores were last updated, it is null simply create a new date

if (localStorage.getItem("date") == null || localStorage.getItem("date") == undefined){
then = new Date()
}else{
  then = new Date(localStorage.getItem("date"));
}
console.log(then)
    // Get msbetween dates

let msBetweenDates = Math.abs(then.getTime() - now.getTime());

// 👇️ convert ms to hours                  min  sec   ms
let hoursBetweenDates = msBetweenDates / (60 * 60 * 1000);
// The api is formatted very weirdly so I have to ensure that it gets all the pages within the date range that I want it to get

async function runCode(){
  while (numPages == true){
          // Fetches the data the await makes it so that it waits for it to get the data before the rest of the code executes

  var data = await fetchAsync('https://www.balldontlie.io/api/v1/games?seasons[]=2022&start_date=2022-09-02&end_date=2022/'+datefinal+'&per_page=100'+'&page='+count)
  var arrs = data.data;
  console.log(arrs.length);
  for (let index = 0; index < arrs.length; index++) {
  games.push(arrs[index]);
  }
  currpage = data.meta.current_page
 finalpage = data.meta.total_pages
 console.log("test3");

if (currpage == finalpage){
  numPages = false;
}
console.log("in loop");

count++;
  }
console.log(games[0])
console.log(games[0].home_team);
if (localStorage.getItem("games") == null || localStorage.getItem("games") == undefined || hoursBetweenDates >= 12){
      // If there are addedGames then add it into the same array

  if (localStorage.getItem("addedGames") !== null){
    games = games.concat(JSON.parse(localStorage.getItem("addedGames")))
  }
      // Sets the item to local storage

localStorage.setItem('games', JSON.stringify(games));
localStorage.setItem('date',now); // after 12 hours fetch new data

console.log("updated")
}
getTeams2 = true;

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


runCode();

// Sets the initial data model for the teams

let teams = [];
let team = {};
team['name'] = 'Atlanta Hawks';
team['id'] = 1;
team['w'] = 0;
team['L'] = 0;
team['pct'] = 0;
team['pos'] = 0;
team['confrence'] = 'East'
team['games'] = [];
teams.push(team);

team = {};
team['name'] = 'Boston Celtics';
team['id'] = 2;
team['w'] = 0;
team['L'] = 0;
team['pct'] = 0;
team['pos'] = 0;

team['confrence'] = ''
team['games'] = [];
teams.push(team);

team = {};
team['name'] = 'Brooklyn Nets';
team['id'] = 3;
team['w'] = 0;
team['L'] = 0;
team['pct'] = 0;
team['pos'] = 0;


team['confrence'] = ''
team['games'] = [];
teams.push(team);

team = {};
team['name'] = 'Charlotte Hornets';
team['id'] = 4;
team['w'] = 0;
team['L'] = 0;
team['pct'] = 0;
team['pos'] = 0;

team['confrence'] = ''
team['games'] = [];
teams.push(team);

team = {};
team['name'] = 'Chicago Bulls';
team['id'] = 5;
team['w'] = 0;
team['L'] = 0;
team['pct'] = 0;
team['pos'] = 0;

team['confrence'] = ''
team['games'] = [];
teams.push(team);

team = {};
team['name'] = 'Cleveland Cavaliers';
team['id'] = 6;
team['w'] = 0;
team['L'] = 0;
team['pct'] = 0;
team['pos'] = 0;

team['confrence'] = ''

team['games'] = [];
teams.push(team);

team = {};
team['name'] = 'Dallas Mavericks';
team['id'] = 7;
team['w'] = 0;
team['L'] = 0;
team['pct'] = 0;
team['pos'] = 0;

team['confrence'] = ''

team['games'] = [];
teams.push(team);

team = {};
team['name'] = 'Denver Nuggets';
team['id'] = 8;
team['w'] = 0;
team['L'] = 0;
team['pct'] = 0;
team['pos'] = 0;

team['confrence'] = ''

team['games'] = [];
teams.push(team);

team = {};
team['name'] = 'Detroit Pistons';
team['id'] = 9;
team['w'] = 0;
team['L'] = 0;
team['pct'] = 0;
team['pos'] = 0;

team['confrence'] = ''

team['games'] = [];
teams.push(team);


team = {};
team['name'] = 'Golden State Warriors';
team['id'] = 10;
team['w'] = 0;
team['L'] = 0;
team['pct'] = 0;
team['pos'] = 0;

team['confrence'] = ''

team['games'] = [];
teams.push(team);

team = {};
team['name'] = 'Houston Rockets';
team['id'] = 11;
team['w'] = 0;
team['L'] = 0;
team['pct'] = 0;
team['pos'] = 0;

team['confrence'] = ''

team['games'] = [];
teams.push(team);

team = {};
team['name'] = 'Indiana Pacers';
team['id'] = 12;
team['w'] = 0;
team['L'] = 0;
team['pct'] = 0;
team['pos'] = 0;

team['confrence'] = ''

team['games'] = [];
teams.push(team);

team = {};
team['name'] = 'LA Clippers';
team['id'] = 13;
team['w'] = 0;
team['L'] = 0;
team['pct'] = 0;
team['pos'] = 0;

team['confrence'] = ''

team['games'] = [];
teams.push(team);

team = {};
team['name'] = 'Memphis Grizzlies';
team['id'] = 14;
team['w'] = 0;
team['L'] = 0;
team['pct'] = 0;
team['pos'] = 0;

team['confrence'] = ''

team['games'] = [];
teams.push(team);

team = {};
team['name'] = 'Miami Heat';
team['id'] = 15;
team['w'] = 0;
team['L'] = 0;
team['pct'] = 0;
team['pos'] = 0;

team['confrence'] = ''

team['games'] = [];
teams.push(team);

team = {};
team['name'] = 'Milwaukee Bucks';
team['id'] = 16;
team['w'] = 0;
team['L'] = 0;
team['pct'] = 0;
team['pos'] = 0;

team['confrence'] = ''

team['games'] = [];
teams.push(team);

team = {};
team['name'] = 'Minnesota Timberwolves';
team['id'] = 17;
team['w'] = 0;
team['L'] = 0;
team['pct'] = 0;
team['pos'] = 0;

team['confrence'] = ''

team['games'] = [];
teams.push(team);

team = {};
team['name'] = 'New Orleans Pelicans';
team['id'] = 18;
team['w'] = 0;
team['L'] = 0;
team['pct'] = 0;
team['pos'] = 0;

team['confrence'] = ''

team['games'] = [];
teams.push(team);

team = {};
team['name'] = 'New York Knicks';
team['id'] = 19;
team['w'] = 0;
team['L'] = 0;
team['pct'] = 0;
team['pos'] = 0;

team['confrence'] = ''

team['games'] = [];
teams.push(team);

team = {};
team['name'] = 'Oklahoma City Thunder';
team['id'] = 20;
team['w'] = 0;
team['L'] = 0;
team['pct'] = 0;
team['pos'] = 0;

team['confrence'] = ''

team['games'] = [];
teams.push(team);

team = {};
team['name'] = 'Orlando Magic';
team['id'] = 21;
team['w'] = 0;
team['L'] = 0;
team['pct'] = 0;
team['pos'] = 0;

team['confrence'] = ''

team['games'] = [];
teams.push(team);

team = {};
team['name'] = 'Philadelphia 76ers';
team['id'] = 22;
team['w'] = 0;
team['L'] = 0;
team['pct'] = 0;
team['pos'] = 0;

team['confrence'] = ''

team['games'] = [];
teams.push(team);

team = {};
team['name'] = 'Phoenix Suns';
team['id'] = 23;
team['w'] = 0;
team['L'] = 0;
team['pct'] = 0;
team['pos'] = 0;

team['confrence'] = ''

team['games'] = [];
teams.push(team);

team = {};
team['name'] = 'Portland Trail Blazers';
team['id'] = 24;
team['w'] = 0;
team['L'] = 0;
team['pct'] = 0;
team['pos'] = 0;

team['confrence'] = ''

team['games'] = [];
teams.push(team);

team = {};
team['name'] = 'Sacramento Kings';
team['id'] = 25;
team['w'] = 0;
team['L'] = 0;
team['pct'] = 0;
team['pos'] = 0;

team['confrence'] = ''

team['games'] = [];
teams.push(team);

team = {};
team['name'] = 'San Antonio Spurs';
team['id'] = 26;
team['w'] = 0;
team['L'] = 0;
team['pct'] = 0;

team['confrence'] = ''
team['pos'] = 0;

team['games'] = [];
teams.push(team);

team = {};
team['name'] = 'Toronto Raptors';
team['id'] = 27;
team['w'] = 0;
team['L'] = 0;
team['pct'] = 0;
team['pos'] = 0;

team['confrence'] = ''

team['games'] = [];
teams.push(team);

team = {};
team['name'] = 'Utah Jazz';
team['id'] = 28;
team['w'] = 0;
team['L'] = 0;
team['pct'] = 0;
team['pos'] = 0;

team['confrence'] = ''

team['games'] = [];
teams.push(team);

team = {};
team['name'] = 'Washington Wizards';
team['id'] = 29;
team['w'] = 0;
team['L'] = 0;
team['pct'] = 0;
team['pos'] = 0;

team['confrence'] = ''

team['games'] = [];
teams.push(team);

team = {};
team['name'] = 'Los Angeles Lakers';
team['id'] = 30;
team['w'] = 0;
team['L'] = 0;
team['pct'] = 0;
team['pos'] = 0;

team['confrence'] = ''

team['games'] = [];
teams.push(team);


console.log(teams);
console.log(teams[0].w)

var eastConf = ["Atlanta Hawks", "Boston Celtics", "Brooklyn Nets", "Charlotte Hornets", "Chicago Bulls", "Cleveland Cavaliers", "Detroit Pistons", "Indiana Pacers", "Miami Heat", "Milwaukee Bucks", "New York Knicks", "Orlando Magic", "Philadelphia 76ers", "Toronto Raptors", "Washington Wizards"];

var estConf = []

var wstConf = [];


// Adds the records to the team
function addRecord(teamWin, teamLoss){

for (let i = 0; i < teams.length; i++) {
  if (teamWin == teams[i].name){
    teams[i].w = teams[i].w+1;
  }

  if (teamLoss == teams[i].name){
    teams[i].L++;
  }
}
// Adds the win percentage to the team
for (let j = 0; j < teams.length; j++) {
teams[j].pct = (((teams[j].w)/(teams[j].w+teams[j].L))*100).toFixed(2) ; // sets win % and ensures its to 2 decimal places
}

estConf.sort((a, b) => b.pct - a.pct); // sorts array based on pct
wstConf.sort((a, b) => b.pct - a.pct); // sorts array based on pct
// Adds the position to each team
for (let i = 0; i < estConf.length; i++) {
  estConf[i].pos = i+1;
  
}
// Adds the position to each team
for (let i = 0; i < wstConf.length; i++) {
  wstConf[i].pos = i+1;
  
}
console.log(estConf)
console.log(wstConf)

}

// Adds the confrence to each team
function formatTeams(){

  for (let i = 0; i < teams.length; i++) {
    if (eastConf.includes(teams[i].name)){
      teams[i].confrence = "Eastern";
      estConf.push(teams[i]);
    }else{
      teams[i].confrence = "Western";
      wstConf.push(teams[i]);
    }
    
  }
 

}
formatTeams();

var table = document.getElementById("table");

// Creates the table for the eastern confrence
function createtableEast(){
  table.replaceChildren();
  for (let i = 0; i < estConf.length; i++) {
  var tr = document.createElement('tr');
  var pos = document.createElement('td')  
  var name = document.createElement('td'); 
  let anchor = document.createElement('a');
  var wins = document.createElement('td');  
  var losses = document.createElement('td');
  var percent = document.createElement('td');
  pos.textContent = estConf[i].pos;
  anchor.href= "teamscores.html?teamName="+estConf[i].name;;
  anchor.textContent = estConf[i].name;
  wins.textContent = estConf[i].w;
  losses.textContent = estConf[i].L;
  percent.textContent = estConf[i].pct;
  table.append(tr)
  table.append(pos)
  table.append(name)
  name.appendChild(anchor)
  table.append(wins)
  table.append(losses);
  table.append(percent);
   // sorts array based on pct
  
  }
}

//   name.addEventListener('click',  () =>estConf.sort((a, b) => b.name - a.name));

var table2 = document.getElementById("table2");

// Creates the table for the western confrence

function createtableWest(){
  table2.replaceChildren();

  for (let i = 0; i < wstConf.length; i++) {
    var tr = document.createElement('tr');
    var td = document.createElement('td')  
    let anchor = document.createElement('a');

    var td2 = document.createElement('td');  
    var td3 = document.createElement('td');  
    var td4 = document.createElement('td');
    var td5 = document.createElement('td');
    anchor.textContent = wstConf[i].name;
    anchor.href= "teamscores.html?teamName="+wstConf[i].name;
    td.textContent = wstConf[i].pos;
    td3.textContent = wstConf[i].w;
    td4.textContent = wstConf[i].L;
    td5.textContent = wstConf[i].pct;
    table2.append(tr)
    table2.append(td)
    table2.append(td2)
    td2.appendChild(anchor)
    table2.append(td3)
    table2.append(td4);
    table2.append(td5);
    }
}

var num = 3;
// Sorts the team by name for Eastern Confrence
var teamname1 = document.getElementById("team");
teamname1.addEventListener('click', function(){
console.log("clicked");
if (num%2 == 0){
  estConf.sort((a, b) => {
    let fa = a.name.toLowerCase(),
        fb = b.name.toLowerCase();
  
    if (fb < fa) {
        return -1;
    }
    if (fb> fa) {
        return 1;
    }
    return 0;
  });

}else{
  estConf.sort((a, b) => {
    let fa = a.name.toLowerCase(),
        fb = b.name.toLowerCase();
  
    if (fa < fb) {
        return -1;
    }
    if (fa > fb) {
        return 1;
    }
    return 0;
  });
}
num++;

console.log(num)
createtableEast();
console.log(estConf);
});

// Sorts the team by name for Western Confrence

var teamname2 = document.getElementById("team2");
var num2 = 3
teamname2.addEventListener('click', function(){
console.log("clicked");
if (num2%2 == 0){
  wstConf.sort((a, b) => {
    let fa = a.name.toLowerCase(),
        fb = b.name.toLowerCase();
  
    if (fb < fa) {
        return -1;
    }
    if (fb> fa) {
        return 1;
    }
    return 0;
  });

}else{
  wstConf.sort((a, b) => {
    let fa = a.name.toLowerCase(),
        fb = b.name.toLowerCase();
  
    if (fa < fb) {
        return -1;
    }
    if (fa > fb) {
        return 1;
    }
    return 0;
  });
}
num2++;

createtableWest();
});
// Sorts the team by win for Eastern Confrence

var win1 = document.getElementById("win1");

var num3 = 3
win1.addEventListener('click', function(){
console.log("clicked");
if (num3%2 == 0){
  estConf.sort((a, b) => b.w - a.w); 
}else{
  estConf.sort((a, b) => a.w - b.w); 
}
num3++;

createtableEast();
});

// Sorts the team by wins for western Confrence

var win2 = document.getElementById("win2");

var num4 = 3
win2.addEventListener('click', function(){
console.log("clicked");
if (num4%2 == 0){
  wstConf.sort((a, b) => b.w - a.w); 
}else{
  wstConf.sort((a, b) => a.w - b.w); 
}
num4++;

createtableWest();
});



// Sorts the team by position for Eastern Confrence

var pos = document.getElementById("pos");

var num5 = 3
pos.addEventListener('click', function(){
console.log("clicked");
if (num5%2 == 0){
  estConf.sort((a, b) => b.pct - a.pct);
}else{
  estConf.sort((a, b) => a.pct - b.pct); 
}
num5++;

createtableEast();
});


// Sorts the team by position for Western Confrence

var pos2 = document.getElementById("pos2");

var num6= 3
pos2.addEventListener('click', function(){
console.log("clicked");
if (num6%2 == 0){
  wstConf.sort((a, b) => b.pct - a.pct);// sorts array based on pct
}else{
  wstConf.sort((a, b) => a.pct - b.pct); // sorts array based on pct
}
num6++;

createtableWest();
});

// Sorts the team by losses for Eastern Confrence

var lost = document.getElementById("lost");

var num7= 3
lost.addEventListener('click', function(){
console.log("clicked");
if (num7%2 == 0){
  estConf.sort((a, b) => b.L - a.L);
}else{
  estConf.sort((a, b) => a.L - b.L); 
}
num7++;

createtableEast();
});

// Sorts the team by losses for western Confrence

var lost2 = document.getElementById("lost2");

var num8= 3
lost2.addEventListener('click', function(){
console.log("clicked");
console.log(wstConf)
if (num8%2 == 0){
  wstConf.sort((a, b) => b.L - a.L);
}else{
  console.log("yes")

  wstConf.sort((a, b) => a.L - b.L); 
}
num8++;

createtableWest();
});

// Sorts based on pct
var pct = document.getElementById("pct");

var num9= 3
pct.addEventListener('click', function(){
console.log("clicked");
if (num9%2 == 0){
  estConf.sort((a, b) => b.pct - a.pct);// sorts array based on pct
}else{
  estConf.sort((a, b) => a.pct - b.pct); // sorts array based on pct
}
num9++;

createtableEast();
});
// Sorts based on pct

var pct2 = document.getElementById("pct2");

var num10= 3
pct2.addEventListener('click', function(){
console.log("clicked");
if (num10%2 == 0){
  wstConf.sort((a, b) => b.pct - a.pct);// sorts array based on pct
}else{
  wstConf.sort((a, b) => a.pct - b.pct); // sorts array based on pct
}
num10++;

createtableWest();
});





console.log(estConf)
console.log(wstConf)






