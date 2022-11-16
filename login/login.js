
let wr=document.getElementById("wrong");

function k(a) {
  let username = sessionStorage.getItem('username')
  let password = sessionStorage.getItem('password')
  let resul = false
  let ex=false;
  let u = 0
  for (let i = 1; i <= localStorage.length; i++) {
    if(sessionStorage.getItem('username') == JSON.parse(localStorage.getItem(i)).username) {
        u = i
    }

  
  }
  let objec = JSON.parse(localStorage.getItem(u))
  let answerArr = objec.answers
   for (let i = 1; i <= localStorage.length; i++) {

    let localEmail = JSON.parse(localStorage.getItem(i)).email
     let localUser = JSON.parse(localStorage.getItem(i)).username
     let localPass = JSON.parse(localStorage.getItem(i)).password

     if ((username == localUser || username == localEmail) && localPass == password) {

      ex=true;
     }
     if(answerArr.length > 0){
        resul = true
     }
    }

    if(ex==true && resul == true) {
        a.setAttribute("href","../result/index.html")
     }
 if(ex==true && resul == false){

    sessionStorage.removeItem('password')
    a.setAttribute("href","../welcomepage/page.html")
 }
 else if(ex == false) {
    wr.innerHTML="<p id='wrong-message'> Wrong Email or Password</p>"

}


}


function g(t) {
    if (t.id == 'username') {
        sessionStorage.setItem('username' , t.value)
    }
    if(t.id == 'password'){
        sessionStorage.setItem('password' , t.value)
    }
}


function clr() {
    sessionStorage.clear()
}


