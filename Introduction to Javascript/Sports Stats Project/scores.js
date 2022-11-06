let dateNow = new Date();

    let startofSeason = new Date("10/18/2022")
    const diffTime = Math.abs(dateNow - startofSeason);

    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    let currSlide = 1;
    let games = JSON.parse(localStorage.getItem("games"));
    console.log(games)

function onload(){
  if (localStorage.getItem("games") == null){
    getFetch();
  }
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
      span.textContent = incrementDate(startofSeason,i).toDateString();
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


}


function incrementDate(dateInput,increment) {
    var dateFormatTotime = new Date(dateInput);
    var increasedDate = new Date(dateFormatTotime.getTime() +(increment *86400000));
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
      }
      
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
    localStorage.setItem("games",JSON.stringify(gamesPush));
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