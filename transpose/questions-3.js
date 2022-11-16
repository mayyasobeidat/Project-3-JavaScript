
  const quizData = [


    // Transpose

    {
      question:
        "Q11: What is the correct HTML for making a text area?",
      a: "a.	<input type='textarea'>",
      b: "b.	<textarea>",
      c: "c.	<input type='textbox'>",
      correct: "a",
    },


    {
      question:
        "Q12: Which of the following is true about HTML tags?",
      a: "a.	Are case sensitive",
      b: "b.	Are not case sensitive",
      c: "c.	Are in lowercase",

      correct: "b",
    },

    {
      question:
        "Q13: Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
      a: "a.	alt",
      b: "b.	title",
      c: "c.	src",
      correct: "a",
    },

    {
      question:
        "Q14: Which doctype is correct for HTML5?",
      a: "a.	<!DOCTYPE html>",
      b: "b.	<!DOCTYPE HTML5>",
      c: "c.	<!DOCTYPE HTML public 'https://www.google.com/'>",
      correct: "a",
    },

    {
      question:
        "Q15: What is the correct HTML element for playing audio files?",
      a: "a.	<mp3>",
      b: "b.	<audio>",
      c: "c.	<sound>",
      correct: "b",
    },

    {
      question:
        "Q16: Which HTML element defines navigation links?",
      a: "a.	<navigation>",
      b: "b.	<nav>",
      c: "c.	<navigate>",
      correct: "b",
    },

    {
      question:
        "Q17: What is the correct HTML for making a text input field?",
      a: "a.	<input type='textfield'>",
      b: "b.	<input type='text'>",
      c: "c.	<textfield>",
      correct: "b",
    },

    {
      question:
        "Q18: What is the correct HTML for inserting an image?",
      a: "a.	<img href='image.gif' alt='MyImage'>",
      b: "b.	<image src='image.gif' alt='MyImage'>",
      c: "c.	<img src='image.gif' alt='MyImage'>",
      correct: "c",
    },


    {
      question:
        "Q19:Which HTML element defines the title of a document?",
      a: "a.	<meta>",
      b: "b.	<title>",
      c: "c.	<head>",
      correct: "b",
    },

    {
      question:
        "Q20: Which HTML element is used to specify a footer for a document or section?",
      a: "a.	<bottom>",
      b: "b.	<footer>",
      c: "c.	<section>",
      correct: "b",
    },

    {
      question:
        "You Finished Transpose Level",
  
    },

  ];

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
   let score = parseInt( sessionStorage.getItem('score'));
   let allscore = 0;
   let percentage = parseInt( sessionStorage.getItem('percentage'))
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
          butt.innerHTML = "<a href='../result/index.html' style='text-decoration:none;color:white'>Finish</a>"
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
