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
      correct: "c",
    },

 ];





  // define document elements
  const quiz = document.getElementById("quiz-box");
  const answerLi = document.querySelectorAll(".answer");
  const question = document.getElementById("question");
  const a_text = document.getElementById("a_text");
  const b_text = document.getElementById("b_text");
  const c_text = document.getElementById("c_text");
  const butt = document.getElementById("butt");

//   variabels
  
  let currentQuiz = 0; 
  let score = 0;
  let allscore = 0;
  let pp = 0
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
    if(!answer){
        alert("You Should Select an Answer First !")
        return;
    }

        if (answer == quizData[currentQuiz].correct){

            score++;
        }

        

          sessionStorage.setItem(quizData[currentQuiz].question, answer)

        currentQuiz++;
        deselectAnswer();
        LoadQuizDataAndStart();


        allscore++
        sessionStorage.setItem('allscore', allscore)
        sessionStorage.setItem('score', score)


        if (allscore == 3)
        {
          allscore++
          butt.innerHTML = "<a href='adapt-Level.html' style='text-decoration:none;color:white'>Finish</a>"
        }
       




    });

    LoadQuizDataAndStart();



