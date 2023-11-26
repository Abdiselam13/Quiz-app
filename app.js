const QuizData = [
    {
        question: "whch lan runs in a web browser ?",
        a: "java",
        b: "C",
        c: "python",
        d: "javaScript",
        correct: "d"

    },
    {
        question: "what does css stand for?",
        a: "central style sheets",
        b: "cascading style sheets",
        c: " cascading simple sheets",
        d: "cars suvs sailboats",
        correct: "b"

    },
    {
        question : "what does html stand for?",
        a: "hypertext markup language",
        b:  "hypertext markdow languge",
        c: "helicopters terminals motorboats lamborginis",
        correct: "a"

    },
    {
        question: "what year was javaScript lanch",
        a: "1996",
        b:  " 19995",
        c: "1994",
        d:  "none of the above",
        correct: "b"
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBth = document.getElementById('submit')


let currentQuiz = 0
let score = 0;
 
loadQuiz()

function loadQuiz(){
   deselectAnswers()
    
    const currentQuizData = QuizData [currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d

}
 function  deselectAnswers(){
    answerEls.forEach(answerEl => answerEl.checked = false)
 }

function getSelected(){
    let answer

    answerEls.forEach(answerEl =>{
        if(answerEl.checked){
            answer = answerEl.id
        }
    } )
    return answer
}


 submitBth.addEventListener('click', () => {
    const answer = getSelected()
     if(answer){
        if(answer === QuizData[currentQuiz].correct){
            score++
        }
        currentQuiz++
     }
     if(currentQuiz < QuizData.length){
        loadQuiz()
     }else{
        quiz.innerHTML = ` <h2> you answered correctly at ${score} / ${QuizData.length} questions </h2>
          <button onclick="loction.reload()
          ">Reload</button>
        `
     }
 })


