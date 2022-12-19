async function fetchAsync (url) {
    let value;
    let response = await fetch(url);
    let data = await response.json().then(function(data){
      value = data;
    })
    console.log(value)
    return value;
  
  }


  fetchAsync("http://jsonplaceholder.typicode.com/users/3")