
let wr=document.getElementById("wrong");

function k(a) {
  let username = sessionStorage.getItem('username')
  let password = sessionStorage.getItem('password')
  let ex=false;
   for (let i = 1; i <= localStorage.length; i++) {
    let localEmail = JSON.parse(localStorage.getItem(i)).email
     let localUser = JSON.parse(localStorage.getItem(i)).username
     let localPass = JSON.parse(localStorage.getItem(i)).password
    
     if ((username == localUser || username == localEmail) && localPass == password) {

      ex=true;
     }}

     if(ex==true){

        sessionStorage.removeItem('password')
        a.setAttribute("href","../welcomepage/page.html")
     }
     else {
        wr.innerHTML="<p id='wrong-message'> Wrong Email or Password</p>"
    
    }

    // let per = 0

    // for (let i = 1; i <= localStorage.length; i++) {
     
    //     if (sessionStorage.getItem('username') == localStorage.getItem(i).username) {
    //      per =  localStorage.key(localStorage.getItem(i).username)
    //     }
    // }
    // sessionStorage.setItem('usersPer', per)
    //  if(sessionStorage.getItem('username').length > 0){
    //     a.setAttribute('href' , '../result/index.html')
    //  }



}


function g(t) {
    if (t.id == 'username') {
        sessionStorage.setItem('username' , t.value)
    }
    if(t.id == 'password'){
        sessionStorage.setItem('password' , t.value)
    }
}
let linkk = document.getElementById('signin')




