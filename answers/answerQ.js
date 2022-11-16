const w = document.querySelectorAll(".wrong");
for (let i = 0; i < w.length; i++) {
  w[i].style.color = "red";
}
const r = document.querySelectorAll(".right");
for (let i = 0; i < r.length; i++) {
  r[i].style.color = "green";
}



let u = 0
for (let i = 1; i <= localStorage.length; i++) {
  if(sessionStorage.getItem('username') == JSON.parse(localStorage.getItem(i)).username) {
    u = i

  }
 
}
let objec = JSON.parse(localStorage.getItem(u))
let answerArr = objec.answers



for (let i = 0; i < answerArr.length; i++) {
  if(i == 4 || i == 11){
    continue
  }
  document.getElementById("Q"+i).innerHTML+= answerArr[i];
  
}


function redirect() {
  if (sessionStorage.length == 0) {
    document.head.innerHTML = `<meta http-equiv="Refresh" content="0; url='../login/login.html'" />`
  }
  
}