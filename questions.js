/*uestion 1*/
var count=0;
var c1=0;c2=0;c3=0;c4=0;
function doif(checkboxElem) {
var txt2="   ---(Correct Answer)";
if (checkboxElem.checked) {
c1=c1+1;
} else {
c1=0;  }
}

function doif1(checkboxElem) {
var txt1="   ---(Correct Answer)";
if (checkboxElem.checked) {
c2=c2+1;
} else {
c2=0;  }
}

function doif2(checkboxElem) {
var txt="   ---(Correct Answer)";
if (checkboxElem.checked) {
c3=c3+1;
} else {
c3=0;  }
}

function doelse(checkboxElem) {
var txt="&nbsp&nbspOops! You got that Wrong!";
if (checkboxElem.checked) {
c4=c4+1;
} else {
c4=0;  }
}


function x1()
{
document.getElementById("x1").innerHTML="";
document.getElementById("x2").innerHTML="";
if(c1==0&&c2==0&&c3==0&&c4==0)
{}
else if(c1==1&&c2==1&&c3==1&&c4!=1)
{
  document.getElementById("x1").innerHTML="&nbsp&nbspYeah! You got the Correct Answer!";
  document.getElementById("x2").style.display="none";
  document.getElementById("x1").style.border="2px solid green";
  document.getElementById("next_ques1").style.display="inline";
  count=0;
  c1=0;c2=0;
}

else {
document.getElementById("x1").innerHTML="";
if(c4==1||c1==1||c2==1||c3==1||c1==c2==1||c1==c3==1||c1==c4==1||c2==c4==1||c3==c4==1||c1==c2==c4==1||c2==c3==c4==1)
{document.getElementById("x2").innerHTML="Oops! You got that Wrong!";
document.getElementById("x2").style.border="2px solid red";
count=count+1;}
else {
document.getElementById("x1").innerHTML="";}
}

if(count>2)
{
document.getElementById("hint1").style.display="block";
}

document.getElementById("y1").innerHTML="Attempts:"+count;
}
function x2()
{
location.reload();
}
/*Question 1 Ends*/
function x11(){
  if(document.getElementById('01').checked) {
    document.getElementById('x11').innerHTML = "Yeah! You got that right!";
    document.getElementById('x11').style.color = "Green";
    document.getElementById("next_ques2").style.display="inline";
  }else if(document.getElementById('02').checked) {
    document.getElementById('x11').innerHTML = "Oops! You got that Wrong!";
    document.getElementById('x11').style.color = "Red";
    document.getElementById("hint2").style.display = "block";
  }
}
function x13(){
  if(document.getElementById('033').checked) {
    document.getElementById('x13').innerHTML = "Yeah! You got that right!";
    document.getElementById('x13').style.color = "Green";
    document.getElementById("next_ques3").style.display="inline";
  }else {
    document.getElementById('x13').innerHTML = "Oops! You got that Wrong!";
    document.getElementById('x13').style.color = "Red";
    document.getElementById("hint3").style.display = "block";
  }
}
function x14(){
  if(document.getElementById('034').checked) {
    document.getElementById('x14').innerHTML = "Yeah! You got that right!";
    document.getElementById('x14').style.color = "Green";
    document.getElementById("next_ques4").style.display="inline";
  }else {
    document.getElementById('x14').innerHTML = "Oops! You got that Wrong!";
    document.getElementById('x14').style.color = "Red";
    document.getElementById("hint4").style.display = "block";
  }
}

function next_question(elem)
{
  document.getElementById("question_"+elem.name).style.display = "none";
  document.getElementById("question_"+(parseInt(elem.name)+1)).style.display = "block";
  console.log("hint"+elem.name);
  document.getElementById("hint"+elem.name).style.display="none";
}
function start_simulator()
{
  document.getElementById("question_5").style.display = "none";
  document.getElementById("f_p_s").style.display = "block";
  document.getElementById("step2").style.background = "#2196F3";
  document.getElementById("step2").style.border = "2px solid #2196F3";
  document.getElementById("instructions").style.display = "block";
}
