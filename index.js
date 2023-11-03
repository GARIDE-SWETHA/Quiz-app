let count = 0; //question navigation
let main = document.getElementById("main");
let input = [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];
let html=0,css=0,js=0; //for pie chart
let answers=["Hyper Text Markup Language","<frameset columns=”30%,70%”>","face","@import url(“example.css”);",
            "<link rel=”stylesheet” type=”text/css” href=”mystyle.css”>","HEAD selector","document.write[“Hello World”];",
            "alert(“Hello World”);","aFunction()","this"
            ]
var countdown;
sec=59

var ele1 = document.getElementsByName('q1');
var ele2 = document.getElementsByName('q2');
var ele3 = document.getElementsByName('q3');
var ele4 = document.getElementsByName('q4');
var ele5 = document.getElementsByName('q5');
var ele6 = document.getElementsByName('q6');
var ele7 = document.getElementsByName('q7');
var ele8 = document.getElementsByName('q8');
var ele9 = document.getElementsByName('q9');
var ele10 = document.getElementsByName('q10');




//Event Listener when we are on last question
let btn = document.getElementById("next");
main.addEventListener('click',function(){
    if (count == 9) {
        btn.textContent = "Submit";
        btn.addEventListener('click', function (){
            if(btn.textContent=="Submit"){
                //computing 10th problem solution
                for(i=0;i<ele10.length;i++){
                    if(ele10[i].checked){
                        input[9] = [count+1,ele10[i].value];
                    }
                }
                clearInterval(countdown);
                document.getElementById('main').remove();
                document.getElementById("report").style.display="block";
                Report();
            }

            else{
                return
            }
                
        });
    }
    else {
        document.getElementById("next").textContent = "Save & Next";
    }

});

main.addEventListener('mouseover',function(){
    if(btn.textContent=="Submit"){
        btn.style.width="60px";
        btn.style.height="60px";
        btn.style.borderRadius="50%";
    }
    else{
        btn.style.width="70px";
        btn.style.height="40px";
        btn.style.borderRadius="0%";
    }

})

//Score Calculators
function scoreCalculate(){
    if(count-1==0){
        for(i=0;i<ele1.length;i++){
            if(ele1[i].checked){
                input[0] = [count,ele1[i].value];
            }
        }
    }

    else if(count-1==1){
        for(i=0;i<ele2.length;i++){
            if(ele2[i].checked){
                input[1] = [count,ele2[i].value];
            }
        }
    }

    else if(count-1==2){
        for(i=0;i<ele3.length;i++){
            if(ele3[i].checked){
                input[2] = [count,ele3[i].value];
            }
        }
    }

    else if(count-1==3){
        for(i=0;i<ele4.length;i++){
            if(ele4[i].checked){
                input[3] = [count,ele4[i].value];
            }
        }
    }

    else if(count-1==4){
        for(i=0;i<ele5.length;i++){
            if(ele5[i].checked){
                input[4] = [count,ele5[i].value];
            }
        }
    }

    else if(count-1==5){
        for(i=0;i<ele6.length;i++){
            if(ele6[i].checked){
                input[5] = [count,ele6[i].value];
            }
        }
    }

    else if(count-1==6){
        for(i=0;i<ele7.length;i++){
            if(ele7[i].checked){
                input[6] = [count,ele7[i].value];
            }
        }
    }

    else if(count-1==7){
        for(i=0;i<ele8.length;i++){
            if(ele8[i].checked){
                input[7] = [count,ele8[i].value];
            }
        }
    }

    else if(count-1==8){
        for(i=0;i<ele9.length;i++){
            if(ele9[i].checked){
                input[8] = [count,ele9[i].value];
            }
        }
    }

}

//Report
function Report(){
    let score=0;
    console.log(input);
    if(input.length==0){
        score=0;
    }

    else{
        var ele;
        var value;
        for(i=0; i<input.length;i++){
            if(input[i]!=-1){
                ele=input[i];
                value=answers[ele[0]-1];


                if (value==ele[1]){
                    score+=1;
    
                    if(ele[0] <= 3)
                    html+=1
    
                    else if(ele[0] >=4 && ele[0] <=6)
                    css+=1
    
                    else
                    js+=1
                }
            }
            

            
        }
        // console.log(html,css,js);
        pieChart();
        
    }
    let scoreTag = document.getElementById("score");
        scoreTag.innerHTML="Score : " + score+ "/10";

    let accuracyTag = document.getElementById("accuracy");
        accuracyTag.innerHTML="Accuracy :  " + (score*10) +"%";
    
    let timertag = document.getElementById("watch");
        timertag.innerHTML="Duration : (:"+ (60-sec) +"s)";

    let text=document.getElementById("Text");
    if(score<=5){
        text.innerHTML=" You Can Do Better!";
    }

    else if(score>5 && score<=7){
        text.innerHTML=" Well Done! Great Score";
    }

    else if(score>=8 && score<=9){
        text.innerHTML=" Excellent!";
    }
    else{
        text.innerHTML=" Fantastic, Nailed it!";
    }

}

//Homepage
function hiding() {
    alert("Quiz will Begin!");
    document.getElementById("intro").remove();
    document.getElementById("start").remove();
    document.getElementById("imgs").remove();

    document.getElementById("main").style.visibility = "visible";
    invisible();
    countdown = setInterval(timer,1000);
    
}

function timer(){
    if (sec==0){
        document.getElementById('main').remove();
            document.getElementById("report").style.display="block";
            Report();
        clearInterval(countdown);
    }

    let second = document.getElementById("sec");
    second.innerHTML = ":"+sec+"s";
    sec-=1;


}

function invisible() {
    let questions = document.getElementsByClassName("questions");
    for (i = 1; i < questions.length; i++) {
        questions[i].style.visibility = 'hidden';
    }
}

//HTML,CSS , JS Jump
function jump(x) {
    if (x != 0) {
        document.getElementsByClassName("questions")[0].style.visibility = 'hidden';
    }

    invisible();
    let questions = document.getElementsByClassName("questions");
    questions[x].style.visibility = 'visible';
    count = x;
    QuestionNo();

}


//Unchecking all Radio
function uncheck() {

    if(count==0){
        for(i=0;i<ele1.length;i++){
            ele1[i].checked = false;
        }
    }

    else if(count==1){
        for(i=0;i<ele2.length;i++){
            ele2[i].checked = false;
        }
    }

    else if(count==2){
        for(i=0;i<ele3.length;i++){
            ele3[i].checked = false;
        }
    }

    else if(count==3){
        for(i=0;i<ele4.length;i++){
            ele4[i].checked = false;
        }
    }

    else if(count==4){
        for(i=0;i<ele5.length;i++){
            ele5[i].checked = false;
        }
    }

    else if(count==5){
        for(i=0;i<ele6.length;i++){
            ele6[i].checked = false;
        }
    }

    else if(count==6){
        for(i=0;i<ele7.length;i++){
            ele7[i].checked = false;
        }
    }

    else if(count==7){
        for(i=0;i<ele8.length;i++){
            ele8[i].checked = false;
        }
    }

    else if(count==8){
        for(i=0;i<ele9.length;i++){
            ele9[i].checked = false;
        }
    }

    else{
        for(i=0; i<ele10.length;i++){
            ele10[i].checked = false;
        }

    }

}


//Next Question
function Next() {
    if (count == 9) {
        return
    }

    let nextQuestion = document.getElementsByClassName("questions");
    nextQuestion[count].style.visibility = 'hidden';
    nextQuestion[count + 1].style.visibility = 'visible';
    count += 1;
    QuestionNo();

}

//Previous Question
function Previous() {

    if (count == 0)
        return
    else {
        let prevQuestion = document.getElementsByClassName("questions");
        prevQuestion[count].style.visibility = 'hidden';
        prevQuestion[count - 1].style.visibility = 'visible';
        count -= 1;
        QuestionNo();
    }
}

//Question No
function QuestionNo() {
    let qno = document.getElementById("Qno");
    qno.innerHTML = "Question : " +(count+1)+ "/10";
}

function pieChart(){

    new Chart(document.getElementById("pie-chart"), {
        type : 'pie',
        data : {
            labels : [ "HTML", "CSS", "JS"],
            datasets : [ {
                backgroundColor : [ "#FFA500", "#0000ff",
                        "#f7df1e"],
                data : [html, css, js]
            } ]
        },
        options : {
            title : {
                display : true,
            }
        }
    });
}