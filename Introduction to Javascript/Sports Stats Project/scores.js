let dateNow = new Date();

    let startofSeason = new Date("10/18/2022")
    const diffTime = Math.abs(dateNow - startofSeason);

    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    let currSlide = 1;
    let games = JSON.parse(localStorage.getItem("games"));
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
function onload(){
 
    let slides = document.getElementById("slides");
    console.log(diffDays);
    let day = 60 * 60 * 24 * 1000;
    for (let i = 0; i < diffDays; i++) {
      let div = document.createElement("div");
      let num = (i+1)
      div.setAttribute("id","slides__"+num);
      div.setAttribute('class',"slide")
      let span = document.createElement("span");
      span.setAttribute("class","slide__text");
      let text = incrementDate(startofSeason,i)
      span.textContent = text.substring(0,text.lastIndexOf("2")+1);
      let a = document.createElement("a");
      a.setAttribute("class", "slide__prev");
      if (num-1 <= 0){
        a.setAttribute("href", "#slides__"+diffDays);
      }else{
        a.setAttribute("href", "#slides__"+i);
      }
      let a2 = document.createElement("a");
      a2.setAttribute("class", "slide__next");

      if (num == diffDays){
        a2.setAttribute("href", "#slides__"+1);
      }else{
        a2.setAttribute("href", "#slides__"+(num+1));

      }
     slides.appendChild(div)
     div.appendChild(span)
     div.appendChild(a)
     div.appendChild(a2)
   
    }

    
let prevBtn = document.getElementsByClassName('slide__prev');
let nextBtn = document.getElementsByClassName('slide__next');

for (let i = 0; i < nextBtn.length; i++) {
  nextBtn[i].addEventListener('click',onClick)
  console.log(nextBtn[i])
}

for (let j = 0; j < prevBtn.length; j++) {
 prevBtn[j].addEventListener('click',subOnclick)
  
}
console.log(nextBtn)

if (localStorage.getItem("games") == null || hoursBetweenDates >= 12){
  getFetch();
}else{
  changeSlides()
}
}

console.log(incrementDate(startofSeason,20))
console.log(incrementDate(startofSeason,19))

function incrementDate(dateInput,increment) {
    var dateFormatTotime = new Date(dateInput);
    var increasedDate = new Date(dateFormatTotime.getTime() +(increment *86400000)).toUTCString().toString();
    return increasedDate;
}

function changeSlides(){
  let slidecurr = document.querySelector("#slides__"+currSlide);
  let slideText = slidecurr.querySelector(".slide__text")
  console.log(slidecurr)
  console.log(slideText.textContent)
  
  loadGames(slideText.textContent);
}

function onClick (){

  if (currSlide == diffDays){
    currSlide = 1;
  }else{
  currSlide++;
  }
  console.log(currSlide);
  changeSlides()
  }
  
  function subOnclick (){
    if (currSlide-1 <= 0){
      currSlide = diffDays;
    }else{
    currSlide--;
    }
    console.log(currSlide);
    changeSlides()
  }


  function loadGames(date){
    currGames = [];

    for (let i = 0; i < games.length; i++) {
      let substringDate;
      if (games[i].date.indexOf("T") !== -1){
      substringDate = games[i].date.substring(0, games[i].date.lastIndexOf("T"));
      }else{
        substringDate = games[i].date;
      }
      let date2 = new Date(date).toISOString()
      let date2substring = date2.substring(0, date2.lastIndexOf("T"))
      if (substringDate == date2substring) {
        console.log(games[i])
        currGames.push(games[i])
      }
      
    }
    showGames();
  }

  console.log(currGames);
 
  function showGames(){
    let container = document.getElementById("column-container")
    console.log(container)
    let nums = 0;
    let nums3 = 0;
    let numColumns = 0; 
    let isdisplayNone = false;
    container.replaceChildren();
    for (let i = 0; i < currGames.length; i++) {
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
        let a = document.createElement("a");
        a.setAttribute("href", "teamscores.html?teamName="+currGames[i].home_team.full_name);
        let img = document.createElement("img");
        img.setAttribute("src","./Logos/"+currGames[i].home_team.full_name+".png");
        // 
        let p = document.createElement("p")
        p.textContent = "VS";
        let a2 = document.createElement("a");
        a2.setAttribute("href", "teamscores.html?teamName="+currGames[i].visitor_team.full_name);
        let img2 = document.createElement("img");
        img2.setAttribute("src","./Logos/"+currGames[i].visitor_team.full_name+".png");
        let content2 = document.createElement("div");
        content2.setAttribute("class", "content is-flex is-justify-content-space-between");
        let score1 = document.createElement("p")
        score1.textContent = currGames[i].home_team_score;
        let score2 = document.createElement("p")
        score2.textContent = currGames[i].visitor_team_score;
        container.appendChild(columns);
        columns.appendChild(column);
        column.appendChild(card);
        card.appendChild(cardContent)
        cardContent.appendChild(content)
        cardContent.appendChild(content2)
        content.appendChild(a)
        a.appendChild(img);
        content.appendChild(p);
        content.appendChild(a2)
        a2.appendChild(img2)
        content2.appendChild(score1)
        content2.appendChild(score2);
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
        let a = document.createElement("a");
        a.setAttribute("href", "teamscores.html?teamName="+currGames[i].home_team.full_name);
        let img = document.createElement("img");
        img.setAttribute("src","./Logos/"+currGames[i].home_team.full_name+".png");
        let p = document.createElement("p")
        p.textContent = "VS";
        let a2 = document.createElement("a");
        a2.setAttribute("href", "teamscores.html?teamName="+currGames[i].visitor_team.full_name);
        let img2 = document.createElement("img");
        img2.setAttribute("src","./Logos/"+currGames[i].visitor_team.full_name+".png");
        let content2 = document.createElement("div");
        content2.setAttribute("class", "content is-flex is-justify-content-space-between");
        let score1 = document.createElement("p")
        score1.textContent = currGames[i].home_team_score;
        let score2 = document.createElement("p")
        score2.textContent = currGames[i].visitor_team_score;
        container.appendChild(columns);
        columns.appendChild(column);
        column.appendChild(card);
        card.appendChild(cardContent)
        cardContent.appendChild(content)
        cardContent.appendChild(content2)
        content.appendChild(a)
        a.appendChild(img);
        content.appendChild(p);
        content.appendChild(a2)

        a2.appendChild(img2)
        content2.appendChild(score1)
        content2.appendChild(score2);
        nums++;
        nums3++;
      }
    }
// add an id that tells you what page to have each card on
let column = document.querySelectorAll(".column");

    let nums2 = nums3;
    let numPages = 0;
    while (nums2 >0){
      numPages++;
      nums2-=10;
    }
    console.log(column)
    let numPages2 = numPages
    for (let k = 1; k< column.length+1; k++) {
          column[k-1].setAttribute("id",Math.ceil(k/10));

    }
    console.log(numPages)
    console.log(nums)
    let pagList = document.querySelector(".pagination-list");
    let currpageNum = 1;
    let numDisplay = 0;
    let numnotDisplay = 0;
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
    console.log("got")
    console.log(games)
    changeSlides()

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