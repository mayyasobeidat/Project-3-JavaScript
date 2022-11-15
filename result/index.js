
 document.getElementById('right-answers').firstElementChild.innerHTML = sessionStorage.getItem('score')
 document.getElementById('wrong-answers').firstElementChild.innerHTML = 20 - parseInt( sessionStorage.getItem('score'))
 document.getElementById('final-score').firstElementChild.innerHTML = sessionStorage.getItem('percentage') + '%'
 let resPara = document.getElementById('result-paragraph')
 let percentage = sessionStorage.getItem('percentage')
 let line = document.getElementById('line')
let resImg = document.getElementById("result-right-side")
let finalScore = document.getElementById('final-score')
 function page() {
 


    if(percentage < 50){
        resPara.innerHTML = `<span class="fail">Unfortunately</span>, you <br class="br-res"> didn't pass the<br class="br-res"> test. `
        resImg.innerHTML = `<img src="images/fail.png" alt="" id="result-img">`
        line.classList.add('fail1')
        finalScore.lastElementChild.classList.add('fail')
    }else{
        resPara.innerHTML = `<span class="pass">Congratulations</span>, you <br class="br-res"> successfully passed the <br class="br-res"> test.`
        resImg.innerHTML = `<img src="images/pass.png" alt="" id="result-img">`
        line.classList.add('pass1')
        finalScore.lastElementChild.classList.add('pass')
    }
 }

 function clearScore(){
    sessionStorage.clear()
 }