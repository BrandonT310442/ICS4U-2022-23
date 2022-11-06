let dateNow = new Date();

    let startofSeason = new Date("10/18/2022")
    const diffTime = Math.abs(dateNow - startofSeason);

    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    let currSlide = 1;

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

function onClick (){

  if (currSlide == diffDays){
    currSlide = 1;
  }else{
  currSlide++;
  }
  console.log(currSlide);
  }
  
  function subOnclick (){
    if (currSlide-1 <= 0){
      currSlide = diffDays;
    }else{
    currSlide--;
    }
    console.log(currSlide);
  }