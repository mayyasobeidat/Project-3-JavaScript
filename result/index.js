

 

 
 let u = 0
  for (let i = 1; i <= localStorage.length; i++) {
    if(sessionStorage.getItem('username') == JSON.parse(localStorage.getItem(i)).username) {
        u = i
    }
   
  
  }
  let objec = JSON.parse(localStorage.getItem(u))
  document.getElementById('right-answers').firstElementChild.innerHTML = objec.result
  document.getElementById('wrong-answers').firstElementChild.innerHTML = 20 - objec.result
  document.getElementById('final-score').firstElementChild.innerHTML = objec.perc + '%'


 let line = document.getElementById('line')
let resImg = document.getElementById("result-right-side")
let finalScore = document.getElementById('final-score')
let resPara = document.getElementById('result-paragraph')
 function page() {
    if (sessionStorage.length == 0) {
        document.head.innerHTML = `<meta http-equiv="Refresh" content="0; url='../login/login.html'" />`
      }
    if(objec.answers.length >= 22){
        sessionStorage.setItem('done' , true)
    }



    if(objec.perc < 50){
        resPara.innerHTML = `<span class="fail">Unfortunately</span>, <br class="br-res">  you did not fulfill our requirements<br class="br-res"><span class="fail"> Good Luck</span> `
        resImg.innerHTML = `<img src="images/fail.png" alt="" id="result-img">`
        line.classList.add('fail1')
        finalScore.lastElementChild.classList.add('fail')
    }else{
        resPara.innerHTML = `<span class="pass">Congratulations</span>, we will <br class="br-res"> arrange with you the Second <br class="br-res"> interview.`
        resImg.innerHTML = `<img src="images/pass.png" alt="" id="result-img">`
        line.classList.add('pass1')
        finalScore.lastElementChild.classList.add('pass')
    }
 }

 function clearScore(){

    sessionStorage.clear()
 }
