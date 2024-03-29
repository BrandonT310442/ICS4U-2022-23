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

    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    // gets the difference of time from the start of the NBA season to right now
    let currSlide = 1;
    let games = JSON.parse(localStorage.getItem("games"));
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

    // Creates the slider to select dates
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
      let d = new Date(incrementDate(startofSeason,i));
      let text = d.toUTCString().toString();
      if (d.getYear() ==123){
        span.textContent = text.substring(0,text.lastIndexOf("3")+1);
        console.log(text);
        console.log(text.substring(0,text.lastIndexOf("3")+1));
      }else{
        span.textContent = text.substring(0,text.lastIndexOf("2")+1);
        console.log(text);
        console.log(text.substring(0,text.lastIndexOf("2")+1));
      }
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

    // Adds prev and next page button for navigating through the slider
let prevBtn = document.getElementsByClassName('slide__prev');
let nextBtn = document.getElementsByClassName('slide__next');

// Adds an event listener for next btn
for (let i = 0; i < nextBtn.length; i++) {
  nextBtn[i].addEventListener('click',onClick)
  console.log(nextBtn[i])
}
// Adds an event listener for prev btn
for (let j = 0; j < prevBtn.length; j++) {
 prevBtn[j].addEventListener('click',subOnclick)
  
}
console.log(nextBtn)
// If the games are null or the last update was more than 12 hours ago then fetch new data
if (localStorage.getItem("games") == null || hoursBetweenDates >= 12){
  getFetch();
}else{
  changeSlides()
}
// Otherwise call the change slides function
}

// Function for increasing a date by an increment
function incrementDate(dateInput,increment) {
    var dateFormatTotime = new Date(dateInput);
    var increasedDate = new Date(dateFormatTotime.getTime() +(increment *86400000)).toUTCString().toString();
    return increasedDate;
}

// gets the current slide and text for that slide, then calls load games
function changeSlides(){
  let slidecurr = document.querySelector("#slides__"+currSlide);
  let slideText = slidecurr.querySelector(".slide__text")
  console.log(slidecurr)
  console.log(slideText.textContent)
  
  loadGames(slideText.textContent);
}

// Changes the slides if btn is clicked
function onClick (){

  if (currSlide == diffDays){
    currSlide = 1;
  }else{
  currSlide++;
  }
  console.log(currSlide);
  changeSlides()
  }
  // Changes the slides if btn is clicked

  function subOnclick (){
    if (currSlide-1 <= 0){
      currSlide = diffDays;
    }else{
    currSlide--;
    }
    console.log(currSlide);
    changeSlides()
  }


  // Loads the games for a specific date
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
 
  // Shows all the games for that date
  function showGames(){
    let container = document.getElementById("column-container")
    console.log(container)
    let nums = 0;
    let nums3 = 0;
    let numColumns = 0; 
    let isdisplayNone = false;
    container.replaceChildren();
    for (let i = 0; i < currGames.length; i++) {
      if (nums>11){
        nums = 0;
        isdisplayNone = true;
      }
      if (nums % 4 == 0 || nums == 0){
        numColumns++;
        let columns = document.createElement("div");
        columns.setAttribute("class","columns is-centered")
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
        img.setAttribute("src","../Logos/"+currGames[i].home_team.full_name+".png");
        // 
        let p = document.createElement("p")
        p.textContent = "VS";
        let a2 = document.createElement("a");
        a2.setAttribute("href", "teamscores.html?teamName="+currGames[i].visitor_team.full_name);
        let img2 = document.createElement("img");
        img2.setAttribute("src","../Logos/"+currGames[i].visitor_team.full_name+".png");
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
      column.setAttribute("class", "column is-one-quarter is-centered")
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
        img.setAttribute("src","../Logos/"+currGames[i].home_team.full_name+".png");
        let p = document.createElement("p")
        p.textContent = "VS";
        let a2 = document.createElement("a");
        a2.setAttribute("href", "teamscores.html?teamName="+currGames[i].visitor_team.full_name);
        let img2 = document.createElement("img");
        img2.setAttribute("src","../Logos/"+currGames[i].visitor_team.full_name+".png");
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
    // Adds an id that tells you what page each card should be on
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
    if (numPages <=1){
      return;
    }
// Creates a previous page button
    let liPrev = document.createElement('li');
    let prevBtn = document.createElement('a');
    // Adds an event listener for the btn
    prevBtn.addEventListener("click", function(){
      if (parseInt(currpageNum) !== 1){
        currpageNum--;
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
      if (parseInt(currpageNum) !== numPages){
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

    var data = await fetchAsync('https://www.balldontlie.io/api/v1/games?seasons[]=2022&start_date=2022-09-02&end_date=2024/'+datefinal+'&per_page=100'+'&page='+count)
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
    console.log("got")
    console.log(games)
    changeSlides()

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

  