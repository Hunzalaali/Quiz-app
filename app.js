var questions = [
{
    question : "Berlin is the capital of which country?",
    answer: "Germany",
    options: [
        "Belgium",
        "Italy",
        "Germany"
    ]
},
{
    question : "Madrid is the capital of which country?",
    answer: "Spain",
    options: [
        "Spain",
        "Italy",
        "Germany"
    ]
},
{
    question : "Paris is the capital of which country?",
    answer: "France",
    options: [
        "France",
        "Italy",
        "Norway"
    ]
},
{
    question : "London is the capital of which country?",
    answer: "England",
    options: [
        "Belgium",
        "England",
        "Germany"
    ]
},
{
    question : "Ankara is the capital of which country?",
    answer: "Turkey",
    options: [
        "Turkey",
        "Poland",
        "Germany"
    ]
}
]

var quesNo = 0;
var score = 0;



function showQuestions(e)
{

    
    var qno = document.getElementById("question-no")
    quesNo ++;
    qno.innerHTML = quesNo;

    


    var ques = document.getElementById("ques");
    

    var op1 = document.getElementById("op1");
    var op2 = document.getElementById("op2");
    var op3 = document.getElementById("op3");

    ques.innerHTML = questions[e].question;
    op1.innerHTML = questions[e].options[0];
    op2.innerHTML = questions[e].options[1];
    op3.innerHTML = questions[e].options[2];


    

    
}

var questionCount = 0;

function nextQuestion()
{
    checkAnswer(questionCount);
    questionCount ++;
    if(questionCount < 5)
    {
        showQuestions(questionCount);
    }else{
        var submit = document.createElement("button")
        submit.innerHTML = "Submit";
        
        var main = document.getElementById("main");
        main.appendChild(submit);
        var next = document.getElementById("nextBtn");
        next.disabled = true;
        submit.className = "btnSubmit";
        submit.setAttribute("onclick", "showResult()");
    }
   
    


}


function checkAnswer(x){
    var opt1 = document.getElementById("opt1");
    var opt2 = document.getElementById("opt2");
    var opt3 = document.getElementById("opt3");

    if(x == 0){
        if(opt3.checked == true)
        {
            score += 10;
        }
    }
    else if(x == 1){
        if(opt1.checked == true)
        {
            score += 10;
        }
    }
    else if(x == 2){
        if(opt1.checked == true)
        {
            score += 10;
        }
    }
    else if(x == 3){
        if(opt2.checked == true)
        {
            score += 10;
        }
    }
    else if(x == 4){
        if(opt1.checked == true)
        {
            score += 10;
        }
    }

} 

function showResult()
{
    var n = document.getElementById("inputName").value;
    document.getElementById("userName").innerHTML = n;
    
    var s = document.getElementById("score");
    s.innerHTML = score;
    
}