

async function sendText()  {

  let phone = document.getElementById("phone").value;
  let bodymsg = document.getElementById("msg").value
  var urlencoded = new URLSearchParams();
urlencoded.append("To", phone);
urlencoded.append("From", "+12055966529");
urlencoded.append("Body", bodymsg);


    const rawResponse = await fetch('', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        'Authorization': ''
      },
      body: urlencoded
        });
    const content = await rawResponse.json();
  
    console.log(content);
    if (content.error_message !== null){
      showMessage(content.message);
    }else{
      showSuccess("Sucessfully Sent");
    }
  };




  async function showMessage(msg){
    const sleep = ms => new Promise(res => setTimeout(res, ms));

 let error = document.querySelector(".error");
error.style.display="";
error.replaceChildren();
let article = document.createElement("article")
article.setAttribute("class","message is-danger");
let messageHeader = document.createElement("div")
messageHeader.setAttribute("class","message-header")
let para = document.createElement("p")
para.textContent = "Error"
let messageBody = document.createElement("message-body");
messageBody.setAttribute("class", "message-body")
messageBody.textContent = msg;

error.appendChild(article)
article.appendChild(messageHeader);
messageHeader.appendChild(para)
article.appendChild(messageBody);

await sleep(3000);
error.style.display="none";


  }

  async function showSuccess(msg){
    const sleep = ms => new Promise(res => setTimeout(res, ms));

 let error = document.querySelector(".error");
error.style.display="";
error.replaceChildren();
let article = document.createElement("article")
article.setAttribute("class","message is-success");
let messageHeader = document.createElement("div")
messageHeader.setAttribute("class","message-header")
let para = document.createElement("p")
para.textContent = "Sucessfull"
let messageBody = document.createElement("message-body");
messageBody.setAttribute("class", "message-body")
messageBody.textContent = msg;

error.appendChild(article)
article.appendChild(messageHeader);
messageHeader.appendChild(para)
article.appendChild(messageBody);

await sleep(3000);
error.style.display="none";


  }