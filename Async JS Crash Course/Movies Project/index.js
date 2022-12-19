
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
};
async function fetchAsync (url) {
    let value;
    let response = await fetch(url, options);
    let data = await response.json().then(function(data){
      value = data;
      const list = data.d;
      list.map((item) => {
        const name = item.l;
        const poster = item.i.imageUrl;
        const query = `<li><img src="${poster}"> <h2>${name}</h2></li>`
        document.querySelector('.movies').innerHTML += query;
      })
    })
    console.log(value)
    return value;
  
  }


fetchAsync("https://imdb8.p.rapidapi.com/auto-complete?q=hailee%20steinfeld")
  // fetchAsync("https://imdb8.p.rapidapi.com/auto-complete?q=juice%20wrld")
    // fetchAsync("https://imdb8.p.rapidapi.com/auto-complete?q=lebron%20james")
// fetchAsync("https://imdb8.p.rapidapi.com/auto-complete?q=pop%20smoke")

