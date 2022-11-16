const quizData = [

  // Imitate

    {
      question:
        "	Q1:What does HTML stand for?",
      a: "a. Home Tool Markup Language",
      b: "b. Hyperlinks and Text Markup Language",
      c: "c. Hyper Text Markup Language",
      correct: "c",
    },
    {
      question: "Q2: Choose the correct HTML element for the largest heading:",
      a: "a. h1",
      b: "b. heading",
      c: "c. h6",
      correct: "a",
    },
    {
      question:
        "Q3: What is the correct HTML element for inserting a line break?",
      a: "a. <lbreak>",
      b: "b. <br>",
      c: "c. <break>",
      correct: "b",
    },
  
    {
      question:
        "Q4: What is the correct HTML for making a drop-down list?",
      a: "a. <list>",
      b: "b. <select>",
      c: "c. <input type='dropdown'>",
      correct: "b",
    },

    
    {
      question:
        "You Finished Imitate level",
  
    },

    

 ];


// let so = [1,2,3,4,5,6,7,8,9]
// let ans = [
//   [
//     {a: 'wrong' , an:'asdad'},
//     {a: 'wrong' , an:'asdad'},
//     {a: 'right' , an:'asdad'},
//   ],
  
// ]





// ljl.innerHTML =''
// for (let i = 0; i < so.length; i++) {
//   h1.innerHTML = `${so[i]}`
//     for (let j = 0; j < ans[i].length; j++) {
      
//       ljl.innerHTML += `<input id="${i} value ="${ans[i][j].a}">
//       <label for ="${i}">${ans[i][j].an}</label>
//       `
      
//     }
// }



let u = 0
for (let i = 1; i <= localStorage.length; i++) {
  if(sessionStorage.getItem('username') == JSON.parse(localStorage.getItem(i)).username) {
    u = i
  }
 

}



  // define document elements
  const quiz = document.getElementById("quiz-box");
  const answerLi = document.querySelectorAll(".answer");
  const question = document.getElementById("question");
  const a_text = document.getElementById("a_text");
  const b_text = document.getElementById("b_text");
  const c_text = document.getElementById("c_text");
  const butt = document.getElementById("butt");
  let answersList = document.getElementById('answersList')

//   variabels
  
  let currentQuiz = 0; 
  let score = 0;
  let allscore = 0;
  let percentage = 0
  const LoadQuizDataAndStart = () => {
    if (currentQuiz < quizData.length) {

    }
      const currentQuizInfo = quizData[currentQuiz];
      question.innerText = currentQuizInfo.question;
      a_text.innerText = currentQuizInfo.a;
      b_text.innerText = currentQuizInfo.b;
      c_text.innerText = currentQuizInfo.c;
    } ;


     const getCheckedAnswer = () => {
        let answer = undefined;
        answerLi.forEach((ele)=>{
            if(ele.checked){
                answer = ele.id
            }
        })
        return answer;
     }

     const deselectAnswer=()=>{
        answerLi.forEach((ele)=>{
            ele.checked = false;
        })
     }


    butt.addEventListener("click",() =>{
    const answer = getCheckedAnswer();
    if(!answer && allscore != quizData.length ){
        alert("You Should Select an Answer First !")
        return;
    }
    let objec = JSON.parse(localStorage.getItem(u))
        if (answer == quizData[currentQuiz].correct){
score++


            percentage += 5
            objec.result = score
            objec.perc = percentage
            objec.answers.push(`<span>${answer}</span><span class = "correctAns" >&#10003;</span>`)
        }else if (answer != quizData[currentQuiz].correct){
          objec.answers.push(`<span>${answer}</span><span class = "wrongAns" >&#10007;</span>`)
        }
      
        
        localStorage.setItem(u,JSON.stringify(objec)) 
      
    
   
               

        currentQuiz++;
        deselectAnswer();
        LoadQuizDataAndStart();

         
        allscore++
        sessionStorage.setItem('allscore', allscore)
        sessionStorage.setItem('score', score)
        sessionStorage.setItem('percentage', percentage)


        if (allscore == quizData.length - 1)
        {
        
          allscore++
          butt.innerHTML = "<a href='../adapt/adapt-Level.html' style='text-decoration:none;color:white'>Finish</a>"
          answersList.style.display = 'none'   

        }
       




    });

    LoadQuizDataAndStart();

    function redirect() {
      if (sessionStorage.length == 0) {
        document.head.innerHTML = `<meta http-equiv="Refresh" content="0; url='../login/login.html'" />`
      }
      if ( sessionStorage.getItem('done') == 'true') {
        document.head.innerHTML = `<meta http-equiv="Refresh" content="0; url='../result/index.html'" />`
      }
    }

