
 const quizData = [

 
    // Adapt

    {
      question:
        "Q5: Choose the correct HTML element to define important text",
      a: "a. <i>",
      b: "b.	<important>",
      c: "c.	<strong>",
      correct: "c",
    },

    {
      question:
        "Q6: What is the correct HTML for creating a hyperlink?",
      a: "a.	<a url='your link'>page name</a>",
      b: "b.	<a href='your link'>page name</a>",
      c: "c.	<a>'your link'</a>",
      correct: "b",
    },

    {
      question:
        "Q7: Which of these elements are all <table> elements?",
      a: "a.	<table> <head> <tfoot>",
      b: "b.	<table> <tr> <td>",
      c: "c.	<thead> <body> <tr>",
      correct: "b",
    },

    {
      question:
        "Q8:In HTML, we use the <hr> tag for:",
      a: "a. horizontal ruler",
      b: "b. new line",
      c: "d. vertical ruler",
      correct: "a",
    },

    {
      question:
        "Q9: How can you make a numbered list?",
      a: "a.	<ul>",
      b: "b.	<list>",
      c: "c.	<ol>",
      correct: "c",
    },


    {
      question:
        "Q10: What is the correct HTML for making a checkbox?",
      a: "a.	<input type='checkbox'>",
      b: "b.	<checkbox>",
      c: "c.	<input type='check'>",
      correct: "a",
    },

    {
      question:
        "You Finished Adapt Level",
  
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


            percentage += 6
            objec.result = score
            objec.perc = percentage
            objec.answers.push(`<span>${answer}</span><span class = "correctAns" >&#10003;</span>`)
        }else if (answer != quizData[currentQuiz].correct){
          objec.answers.push(`<span>${answer}</span><span class = "wrongAns" > &#10007;</span>`)
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
          butt.innerHTML = "<a href='../transpose/transpose-Level.html' style='text-decoration:none;color:white'>Finish</a>"
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
