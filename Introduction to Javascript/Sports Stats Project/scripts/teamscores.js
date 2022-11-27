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

let dateNow = new Date();

    let startofSeason = new Date("10/18/2022")
    const diffTime = Math.abs(dateNow - startofSeason);
    // gets the difference of time from the start of the NBA season to right now

    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    let currSlide = 1;
    let games = [];
    console.log(games)

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
    let currGames = [];
    let allGames = [];
function onload(){
// Fetch if 12 hours have passed or isnt in local storage
if (localStorage.getItem("games") == null || hoursBetweenDates >= 12){
  getFetch();
}else{
games = JSON.parse(localStorage.getItem("games"));
getName()
}
}

// Gets the paramater from the url
function getName(){
let params = (new URL(document.location)).searchParams;
console.log(params.get('teamName'))

// Filters games based on team name
const game = games.filter(game => game.home_team.full_name == params.get('teamName'));
const game2 = games.filter(game => game.visitor_team.full_name == params.get('teamName'));
// Adds it all into 1 array
console.log(game)
console.log(game2)
allGames = game.concat(game2)
console.log(allGames)
}

// gets the start and end dates and adds validations

function loadDates(){
  onload();
  let startDate = Date.parse(document.getElementById("startDate").value);
  let endDate = Date.parse(document.getElementById("endDate").value);
  let start = Date.parse('2022-10-18');
let end = Date.now();
if (startDate < start || startDate > end || endDate < start || endDate > end || startDate == NaN || endDate == NaN){
  alert("Please enter a date within the start of the NBA season and today's date")
  return;
}else if (startDate == "" || endDate == ""){
  alert("Please enter a date");
  return;
}
  let game = allGames.filter(game=> Date.parse(game.date) >= startDate && Date.parse(game.date) <= endDate);
  allGames = game;
  // Sorts the array based on date
  allGames.sort((a, b) => Date.parse(a.date) - Date.parse(b.date)); // sorts array based on pct

  console.log(game)
  showGames()

}

// Shows all the games within the date range
function showGames(){
    let container = document.getElementById("column-container")
    container.replaceChildren()
    console.log(container)
    let nums = 0;
    let nums3 = 0;

    let numColumns = 0; 
    let isdisplayNone = false;
    container.replaceChildren();
    for (let i = 0; i < allGames.length; i++) {
      if (nums>11){
        nums = 0;
        isdisplayNone = true;
      }
      if (nums % 4 == 0 || nums == 0){
        numColumns++;
        let columns = document.createElement("div");
        columns.setAttribute("class","columns")
        columns.setAttribute("id","columns-"+numColumns)
      
      let column = document.createElement("div")
      column.setAttribute("class", "column is-one-quarter")
      if (isdisplayNone){
        column.style.display = "none";
      } 
      column.setAttribute("class", "column is-one-quarter")
        let card = document.createElement("div")
        card.setAttribute("class","card is-rounded");
        let cardContent = document.createElement("div")
        cardContent.setAttribute("class","card-content");
        let content = document.createElement("div");
        content.setAttribute("class", "content is-flex is-justify-content-space-between");
        let img = document.createElement("img");
        img.setAttribute("src","../Logos/"+allGames[i].home_team.full_name+".png");
        let p = document.createElement("p")
        p.textContent = "VS";
        let img2 = document.createElement("img");
        img2.setAttribute("src","../Logos/"+allGames[i].visitor_team.full_name+".png");
        let content2 = document.createElement("div");
        content2.setAttribute("class", "content is-flex is-justify-content-space-between");
        let score1 = document.createElement("p")
        score1.textContent = allGames[i].home_team_score;
        let score2 = document.createElement("p")
        score2.textContent = allGames[i].visitor_team_score;
        let dateWrap = document.createElement("div")
        dateWrap.setAttribute("class", "content is-flex is-justify-content-space-around");
        let dateGame = document.createElement("p")
        if (allGames[i].date.indexOf("T") !==-1){
          dateGame.textContent = allGames[i].date.substring(0,allGames[i].date.indexOf("T"));
          }else{
            dateGame.textContent = allGames[i].date
          }
        container.appendChild(columns);
        columns.appendChild(column);
        column.appendChild(card);
        card.appendChild(cardContent)
        cardContent.appendChild(content)
        cardContent.appendChild(content2)
        cardContent.appendChild(dateWrap);
        content.appendChild(img);
        content.appendChild(p);
        content.appendChild(img2)
        content2.appendChild(score1)
        content2.appendChild(score2);
        dateWrap.appendChild(dateGame)
        nums++;
        nums3++;
      }else{
        let columns = document.getElementById("columns-"+numColumns);
        let column = document.createElement("div")
      column.setAttribute("class", "column is-one-quarter")
      if (isdisplayNone){
        column.style.display = "none";
      }
        let card = document.createElement("div")
        card.setAttribute("class","card is-rounded");
        let cardContent = document.createElement("div")
        cardContent.setAttribute("class","card-content");
        let content = document.createElement("div");
        content.setAttribute("class", "content is-flex is-justify-content-space-between");
        let img = document.createElement("img");
        img.setAttribute("src","../Logos/"+allGames[i].home_team.full_name+".png");
        let p = document.createElement("p")
        p.textContent = "VS";
        let img2 = document.createElement("img");
        img2.setAttribute("src","../Logos/"+allGames[i].visitor_team.full_name+".png");
        let content2 = document.createElement("div");
        content2.setAttribute("class", "content is-flex is-justify-content-space-between");
        let score1 = document.createElement("p")
        score1.textContent = allGames[i].home_team_score;
        let score2 = document.createElement("p")
        score2.textContent = allGames[i].visitor_team_score;
        let dateWrap = document.createElement("div")
        dateWrap.setAttribute("class", "content is-flex is-justify-content-space-around");
        let dateGame = document.createElement("p")
        if (allGames[i].date.indexOf("T") !==-1){
        dateGame.textContent = allGames[i].date.substring(0,allGames[i].date.indexOf("T"));
        }else{
          dateGame.textContent = allGames[i].date
        }
        container.appendChild(columns);
        columns.appendChild(column);
        column.appendChild(card);
        card.appendChild(cardContent)
        cardContent.appendChild(content)
        cardContent.appendChild(content2)
        cardContent.appendChild(dateWrap);

        content.appendChild(img);
        content.appendChild(p);
        content.appendChild(img2)
        content2.appendChild(score1)
        content2.appendChild(score2);
        dateWrap.appendChild(dateGame)

        nums++;
        nums3++;

      }
    }
    let column = document.querySelectorAll(".column");

    let nums2 = nums3;
    let numPages = 0;
        // Counts the number of pages needed to display all the games

    while (nums2 >0){
      numPages++;
      nums2-=12;
    }
    console.log(column)
    let numPages2 = numPages
    // add an id that tells you what page to have each card on

    for (let k = 1; k< column.length+1; k++) {
          column[k-1].setAttribute("id",Math.ceil(k/12));

    }
    console.log(numPages)
    console.log(nums)
    let pagList = document.querySelector(".pagination-list");
    let currpageNum = 1;
    let numDisplay = 0;
    let numnotDisplay = 0;
    pagList.replaceChildren()
    
// Creates a previous page button

    let liPrev = document.createElement('li');
    let prevBtn = document.createElement('a');
        // Adds an event listener for the btn

    prevBtn.addEventListener("click", function(){
      if (currpageNum !== 1){
        currpageNum--;
        for (let i = 0; i < column.length; i++) {
          if(column[i].id == currpageNum){
           column[i].style.display = ""
          }else{
           column[i].style.display= "none"
          }
         }
        
      }
      let pagBtn = document.querySelectorAll(".pagination-link");
       // Reset disabled id
     for (let index = 0; index < pagBtn.length; index++) {
      if (pagBtn[index].id == "disabled"){
      pagBtn[index].setAttribute("id","")     
      }
            // Sets the disabled btn to the curr page number

      if (pagBtn[index].innerHTML == currpageNum){
        pagBtn[index].setAttribute("id", "disabled");
      }
    }
    
    })

        // Adds classses and appends it

    prevBtn.setAttribute("class", "pagination-link")
    prevBtn.textContent = "<"
    pagList.appendChild(liPrev);
      liPrev.appendChild(prevBtn);
    // Creates all the other buttons for pagination, with the same logic as above

    for (let j = 0; j < numPages; j++) {
      let li = document.createElement('li');
      let a = document.createElement('a');
      a.setAttribute("class", "pagination-link")
      if (j==0){
        a.setAttribute("id", "disabled")
      }
      a.addEventListener("click", function(){
      
        let pageNum = a.textContent;
        if (pageNum !== currpageNum){
          currpageNum = pageNum;
          let dis = document.querySelector("#disabled");
          dis.setAttribute("id", "");
          a.setAttribute("id", "disabled")
        }
        console.log(column.length)
        for (let i = 0; i < column.length; i++) {
         if(column[i].id == j+1){
          column[i].style.display = ""
         }else{
          column[i].style.display= "none"
         }
        // if (column[i].style.display == ""){
        //   column[i].style.display = "none"
        // }else if (numDisplay <10){ // display only if the number of columns doesn't exceed 10
        //   numDisplay++;
        //   column[i].style.display ="";

        // }
        //   console.log(column[i])
        //   console.log(numDisplay)

        }
        numDisplay = 0;
      });      
      a.textContent=j+1;
      pagList.appendChild(li);
      li.appendChild(a)
      
    }
   
    // Creates a next page button

    let liNext = document.createElement('li');
    let nextBtn = document.createElement('a');
            // Adds an event listener for the btn

    nextBtn.addEventListener("click", function(){
      if (currpageNum !== numPages){
        currpageNum++;
        // If the current column equals the current page number display it and for every other one don't display it

        for (let i = 0; i < column.length; i++) {
          if(column[i].id == currpageNum){
           column[i].style.display = ""
          }else{
           column[i].style.display= "none"
          }
         }
        
      }
      let pagBtn = document.querySelectorAll(".pagination-link");
       // Reset disabled id
     for (let index = 0; index < pagBtn.length; index++) {
      if (pagBtn[index].id == "disabled"){
      pagBtn[index].setAttribute("id","")     
      }
                  // Sets the disabled btn to the curr page number

      if (pagBtn[index].innerHTML == currpageNum){
        pagBtn[index].setAttribute("id", "disabled");
      }
    }
    
    })
    // Adds classses and appends it

    nextBtn.setAttribute("class", "pagination-link")
   nextBtn.textContent = ">"
    pagList.appendChild(liNext);
      liNext.appendChild(nextBtn);

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
    getName()

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
