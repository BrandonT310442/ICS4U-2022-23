let dateNow = new Date();

    let startofSeason = new Date("10/18/2022")
    const diffTime = Math.abs(dateNow - startofSeason);

    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    let currSlide = 1;
    let games = [];
    console.log(games)

    let then;
let now = new Date();
if (localStorage.getItem("date") == null || localStorage.getItem("date") == undefined){
then = new Date()
}else{
  then = new Date(localStorage.getItem("date"));
}
console.log(then)
let msBetweenDates = Math.abs(then.getTime() - now.getTime());
// 👇️ convert ms to hours                  min  sec   ms
let hoursBetweenDates = msBetweenDates / (60 * 60 * 1000);
    let currGames = [];
    let allGames = [];
function onload(){

if (localStorage.getItem("games") == null || hoursBetweenDates >= 12){
  getFetch();
}else{
games = JSON.parse(localStorage.getItem("games"));
getName()
}
}
function getName(){
let params = (new URL(document.location)).searchParams;
console.log(params.get('teamName'))


const game = games.filter(game => game.home_team.full_name == params.get('teamName'));
const game2 = games.filter(game => game.visitor_team.full_name == params.get('teamName'));

console.log(game)
console.log(game2)
allGames = game.concat(game2)
console.log(allGames)
}

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
  allGames.sort((a, b) => Date.parse(a.date) - Date.parse(b.date)); // sorts array based on pct

  console.log(game)
  showGames()

}

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
      if (nums>9){
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
    while (nums2 >0){
      numPages++;
      nums2-=10;
    }
    let numPages2 = numPages
    for (let k = 1; k< column.length+1; k++) {
          column[k-1].setAttribute("id",Math.ceil(k/10));

    }
    console.log(numPages)
    console.log(nums)
    let pagList = document.querySelector(".pagination-list");
    let currpageNum = 1;
    pagList.replaceChildren()
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
        }
      });      
      a.textContent=j+1;
      pagList.appendChild(li);
      li.appendChild(a)
      
    }
}

var numPages = true; 
let currpage;
let finalpage;
let count = 1;
let gamesPush = []
  async function getFetch(){
    var date = new Date().toLocaleDateString();
    console.log(date)
    var datefinal = date.substring(0,date.lastIndexOf('/'));
    while (numPages == true){
    var data = await fetchAsync('https://www.balldontlie.io/api/v1/games?seasons[]=2022&start_date=2022-09-02&end_date=2022/'+datefinal+'&per_page=100'+'&page='+count)
    var arrs = data.data;
    currpage = data.meta.current_page
    finalpage = data.meta.total_pages
    if (currpage == finalpage){
      numPages = false;
    }
    for (let index = 0; index < arrs.length; index++) {
      gamesPush.push(arrs[index]);
      }
   

    count++;
    }
    console.log(arrs)
    if (localStorage.getItem("addedGames") !== null){
      gamesPush = gamesPush.concat(JSON.parse(localStorage.getItem("addedGames")))
    }
    localStorage.setItem("games",JSON.stringify(gamesPush));
    localStorage.setItem('date',now);
    getLocal()
  }

  
  function getLocal(){
    games = JSON.parse(localStorage['games']);
    getName()

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
