(function(){
    // Functions
    function buildQuiz(){
      // variable to store the HTML output
      const output = [];
  
      // for each question...
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
  
          // variable to store the list of possible answers
          const answers = [];
  
          // and for each available answer...
          for(letter in currentQuestion.answers){
  
            // ...add an HTML radio button
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
  
          // add this question and its answers to the output
          output.push(
            `<div class="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
          );
        }
      );
  
      // finally combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){
  
      // gather answer containers from our quiz
      const answerContainers = quizContainer.querySelectorAll('.answers');
  
      // keep track of user's answers
      let numCorrect = 0;
  
      // for each question...
      myQuestions.forEach( (currentQuestion, questionNumber) => {
  
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // if answer is correct (IDK)
        if(userAnswer === currentQuestion.correctAnswer){
          // add to the number of correct answers (IDK++)
          numCorrect++;
  
          // color the answers green
          // answerContainers[questionNumber].style.color = 'lightgreen';
        }
        // if answer is wrong or blank
        // else{
        //   // color the answers red
        //   // answerContainers[questionNumber].style.color = 'red';
        // }
      });
  
      // show number of "I Do not know" answers out of total
      resultsContainer.innerHTML = `"I Do not Know" total: ${numCorrect} out of ${myQuestions.length}`;
      //results for A answers!
      resultsA.innerHTML = `Total A answers: `
    }
  
    function showSlide(n) {
      slides[currentSlide].classList.remove('active-slide');
      slides[n].classList.add('active-slide');
      currentSlide = n;
      //being in slide 0, do not show "previous slide"
      if(currentSlide === 0){
        previousButton.style.display = 'none';
      }
      else{
        previousButton.style.display = 'inline-block';
      }
      //2nd if...else statement
      //last slide
      //slides.length-1 is the slide 15, because you press 14 times the next button, not 15
      if(currentSlide === slides.length-1){
        //erase "next button"
        nextButton.style.display = 'none';
        //show "submit button"
        //you want the submit button to show all results:
        submitButton.style.display = 'inline-block';
      }
      else{
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
      }
    }
  
    function showNextSlide() {
      showSlide(currentSlide + 1);
    }
  
    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }
  
    // Variables
    const quizContainer = document.getElementById('quiz');
    //IDK counter
    const resultsContainer = document.getElementById('results');
    // this is my addition!!
    const resultsA = document.getElementById('resultsA');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
      {
        question: "1. Who invented JavaScript?",
        answers: {
          a: "Douglas Crockford",
          b: "Sheryl Sandberg",
          c: "Brendan Eich",
          d: "I don't know"
        },
        correctAnswer: "d"
      },
      {
        question: "2. Which one of these is a JavaScript package manager?",
        answers: {
          a: "Node.js",
          b: "TypeScript",
          c: "npm",
          d: "I don't know"
        },
        correctAnswer: "d"
      },
      {
        question: "3. Which tool can you use to ensure code quality?",
        answers: {
          a: "Angular",
          b: "jQuery",
          c: "RequireJS",
          d: "I don't know"
        },
        correctAnswer: "d"
      },
      {
        question: "4. For how long have you been studying JavaScript?",
        answers: {
          a: "Less than 1 year",
          b: "1 - 2 years",
          c: "+ 2 years",
          d: "I don't remember"
        },
        correctAnswer: "d"
      },
      {
        question: "5. Which tool can you use to ensure code quality?",
        answers: {
          a: "Angular",
          b: "jQuery",
          c: "RequireJS",
          d: "I don't know"
        },
        correctAnswer: "d"
      },
      {
        question: "6. Which tool can you use to ensure code quality?",
        answers: {
          a: "Angular",
          b: "jQuery",
          c: "RequireJS",
          d: "I don't know"
        },
        correctAnswer: "d"
      },
      {
        question: "7. Which tool can you use to ensure code quality?",
        answers: {
          a: "Angular",
          b: "jQuery",
          c: "RequireJS",
          d: "I don't know"
        },
        correctAnswer: "d"
      },
      {
        question: "8. Which tool can you use to ensure code quality?",
        answers: {
          a: "Angular",
          b: "jQuery",
          c: "RequireJS",
          d: "I don't know"
        },
        correctAnswer: "d"
      },
      {
        question: "9. Which tool can you use to ensure code quality?",
        answers: {
          a: "Angular",
          b: "jQuery",
          c: "RequireJS",
          d: "I don't know"
        },
        correctAnswer: "d"
      },
      {
        question: "10. Which tool can you use to ensure code quality?",
        answers: {
          a: "Angular",
          b: "jQuery",
          c: "RequireJS",
          d: "I don't know"
        },
        correctAnswer: "d"
      },
      {
        question: "11. Which tool can you use to ensure code quality?",
        answers: {
          a: "Angular",
          b: "jQuery",
          c: "RequireJS",
          d: "I don't know"
        },
        correctAnswer: "d"
      },
      {
        question: "12. Which tool can you use to ensure code quality?",
        answers: {
          a: "Angular",
          b: "jQuery",
          c: "RequireJS",
          d: "I don't know"
        },
        correctAnswer: "d"
      },
      {
        question: "13. Which tool can you use to ensure code quality?",
        answers: {
          a: "Angular",
          b: "jQuery",
          c: "RequireJS",
          d: "I don't know"
        },
        correctAnswer: "d"
      },
      {
        question: "14. Which tool can you use to ensure code quality?",
        answers: {
          a: "Angular",
          b: "jQuery",
          c: "RequireJS",
          d: "I don't know"
        },
        correctAnswer: "d"
      },
      {
        question: "15. Final question?",
        answers: {
          a: "Angular",
          b: "jQuery",
          c: "RequireJS",
          d: "I don't know"
        },
        correctAnswer: "d"
      }
    ];

    //If not answer given:

    function notAnswer() {
      if (answer === null) {
       alert('Put something');
      }
    }
  
    // Kick things off
    buildQuiz();
  
    // Pagination
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    // Show the first slide
    showSlide(currentSlide);
  
    // Event listeners
    submitButton.addEventListener('click', showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
  })();
  
  