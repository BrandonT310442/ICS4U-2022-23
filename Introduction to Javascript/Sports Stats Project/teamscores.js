let dateNow = new Date();

    let startofSeason = new Date("10/18/2022")
    const diffTime = Math.abs(dateNow - startofSeason);

    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    let currSlide = 1;
    let games;
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
}

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
  let startDate = Date.parse(document.getElementById("startDate").value);
  let endDate = Date.parse(document.getElementById("endDate").value);
  const game = allGames.filter(game=> Date.parse(game.date) >= startDate && Date.parse(game.date) <= endDate);
  allGames = game;
  console.log(game)
  showGames()

}

function showGames(){
    let container = document.getElementById("column-container")
    console.log(container)
    let nums = 0;
    let numColumns = 0; 
    container.replaceChildren();
    for (let i = 0; i < allGames.length; i++) {
      if (nums % 4 == 0 || nums == 0){
        numColumns++;
        let columns = document.createElement("div");
        columns.setAttribute("class","columns")
        columns.setAttribute("id","columns-"+numColumns)
        
      let column = document.createElement("div")
      column.setAttribute("class", "column is-one-quarter")
      if (nums > 9){
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
        img.setAttribute("src","./Logos/"+allGames[i].home_team.full_name+".png");
        let p = document.createElement("p")
        p.textContent = "VS";
        let img2 = document.createElement("img");
        img2.setAttribute("src","./Logos/"+allGames[i].visitor_team.full_name+".png");
        let content2 = document.createElement("div");
        content2.setAttribute("class", "content is-flex is-justify-content-space-between");
        let score1 = document.createElement("p")
        score1.textContent = allGames[i].home_team_score;
        let score2 = document.createElement("p")
        score2.textContent = allGames[i].visitor_team_score;
        container.appendChild(columns);
        columns.appendChild(column);
        column.appendChild(card);
        card.appendChild(cardContent)
        cardContent.appendChild(content)
        cardContent.appendChild(content2)
        content.appendChild(img);
        content.appendChild(p);
        content.appendChild(img2)
        content2.appendChild(score1)
        content2.appendChild(score2);
        nums++;
      }else{
        let columns = document.getElementById("columns-"+numColumns);
        let column = document.createElement("div")
      column.setAttribute("class", "column is-one-quarter")
      if (nums > 9){
        column.style.display = "none";
      }
        let card = document.createElement("div")
        card.setAttribute("class","card is-rounded");
        let cardContent = document.createElement("div")
        cardContent.setAttribute("class","card-content");
        let content = document.createElement("div");
        content.setAttribute("class", "content is-flex is-justify-content-space-between");
        let img = document.createElement("img");
        img.setAttribute("src","./Logos/"+allGames[i].home_team.full_name+".png");
        let p = document.createElement("p")
        p.textContent = "VS";
        let img2 = document.createElement("img");
        img2.setAttribute("src","./Logos/"+allGames[i].visitor_team.full_name+".png");
        let content2 = document.createElement("div");
        content2.setAttribute("class", "content is-flex is-justify-content-space-between");
        let score1 = document.createElement("p")
        score1.textContent = allGames[i].home_team_score;
        let score2 = document.createElement("p")
        score2.textContent = allGames[i].visitor_team_score;
        container.appendChild(columns);
        columns.appendChild(column);
        column.appendChild(card);
        card.appendChild(cardContent)
        cardContent.appendChild(content)
        cardContent.appendChild(content2)
        content.appendChild(img);
        content.appendChild(p);
        content.appendChild(img2)
        content2.appendChild(score1)
        content2.appendChild(score2);
        nums++;
      }
    }

    let nums2 = nums;
    let numPages = 0;
    while (nums2 >0){
      numPages++;
      nums2-=10;
    }
    console.log(numPages)
    console.log(nums)
    let pagList = document.querySelector(".pagination-list");
    let column = document.querySelectorAll(".column");
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
          console.log(column[i].style.display)
        if (column[i].style.display == ""){
          column[i].style.display = "none"
        }else{
          column[i].style.display ="";
        }
          console.log(column[i])
        }
      });      
      a.textContent=j+1;
      pagList.appendChild(li);
      li.appendChild(a)
      
    }
}
