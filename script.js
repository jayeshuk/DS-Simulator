var c = document.getElementById("myCanvas");
var c_context = c.getContext("2d");
var x;
var y;
var decision_option = 1;
var nodecontainer1 = [];
var nodecontainer2 = [];
var nodecontainer3 = [];
var index = 0;
var flag = 0;
var flag1 = 0;
var count = 0;




function manage(elem) {
  console.log("inside manage: ");
  console.log(document.getElementById("Coefficients1"));
  var button = document.getElementById(elem.name);
  var input1 = document.getElementById("Coefficients"+elem.name);
  var input2 = document.getElementById("Exponents"+elem.name);
  console.log("Coefficients"+elem.name);
  if (input1.value != "" && input2.value != "") {
          button.disabled = false;    // Enable the button.
          button.style.cursor = "default";
      }
      else {
          button.disabled = true;   // Disable the button.
          button.style.cursor = "no-drop";
          return false;
      }
  }

var myNode=function(coefficient, exponent)
{
    this.coefficient = coefficient;
    this.exponent = exponent;
    this.x=x;
    this.y=y;
    this.index = index;
    this.mycolor = 'red';
}
myNode.prototype.pointer = function()
{
  c_context.moveTo(this.x - 40, this.y + 15);
  c_context.lineTo(this.x, this.y + 15);
  c_context.lineWidth = 2;
}

myNode.prototype.draw = function ()
{
  c_context.beginPath();
  this.pointer();
  c_context.strokeStyle = this.mycolor;
  if(this.mycolor == "green"){
     var nullable = 100;
    if(this.coefficient=="NULL") nullable = 60;
    c_context.rect((this.x - 5), (this.y - 5), nullable, 40);
    c_context.fillStyle = "#ffd000";
    c_context.fillRect((this.x - 5), (this.y - 5), nullable, 40);
  }else if(this.coefficient == "NULL"){
    c_context.rect((this.x - 5), (this.y - 5), 60, 40);
  }else{
      c_context.rect((this.x - 5), (this.y - 5), 100, 40);
  }
  c_context.fillStyle = "black";
    if(this.coefficient == "NULL")
    {
      c_context.fillText("NULL", this.x + 5,this.y + 20);
    }else{
      c_context.rect(this.x,this.y, 30, 30);
      c_context.fillText(this.coefficient, this.x + 15,this.y + 15);
      c_context.rect(this.x+30,this.y, 30, 30);
      c_context.fillText(this.exponent, this.x + 15 + 30,this.y + 15);
      c_context.rect(this.x+60,this.y, 30, 30);
    }
    c_context.stroke();
    /*
    c_context.fillStyle = "#FCB63E";
    c_context.fillRect(this.x,this.y, 30, 30);
    c_context.fillStyle = "black";
    c_context.font = "15px Georgia";
    c_context.fillText(this.coefficient, this.x + 15,this.y + 15);

    c_context.fillStyle = "#FCD954";
    c_context.fillRect(this.x+30,this.y, 30, 30);
    c_context.fillStyle = "black";
    c_context.font = "15px Georgia";
    c_context.fillText(this.exponent, this.x + 15 + 30,this.y + 15);

    c_context.fillStyle = "#FDE277";
    c_context.fillRect(this.x+60,this.y, 30, 30);
    c_context.fillStyle = "black";*/

  if(flag1==0)
    x = x + 90 + 30;
}

function print_result()
{
  if(nodecontainer3[count].newnode.coefficient != "NULL"){
    var sign;
    document.getElementById("display_p3").style.display="block";
    var print_p3_poly = document.getElementById("print_p3");
    print_p3_poly.style.display = "block";
    console.log(print_p3);
    if(count == 0) sign = "";
    else sign = "+";
    print_p3_poly.innerHTML = print_p3_poly.innerHTML + "<span id="+nodecontainer3[count].index+"p3"+">"+ sign +nodecontainer3[count].newnode.coefficient+"x<sup>"+nodecontainer3[count].expo+"</sup>" +"</span>"
    count = count + 1;
  }
}

function next_section(elem){
 var s1 = document.getElementById("basic_condn");
 var val = s1.options[s1.selectedIndex].value;
 s2 = document.getElementById("decision2");
 var p = find(nodecontainer1);
 var q = find(nodecontainer2);
 console.log("Starting----> p: "+p+" q: "+ q);
 if(val == 1 && nodecontainer1[p].newnode.coefficient != "NULL" && nodecontainer2[q].newnode.coefficient != "NULL")
 {
   s2.style.display = "block";
 }
 else if(val==2 && nodecontainer1[p].newnode.coefficient == "NULL" && nodecontainer2[q].newnode.coefficient != "NULL")
 {
   document.getElementById("Coefficients3").value = parseInt(nodecontainer2[q].coef);
   document.getElementById("Exponents3").value = parseInt(nodecontainer2[q].expo);
   createNode(elem);
   //nodecontainer2[p].newnode.mycolor = "red";
   nodecontainer2[q].newnode.mycolor = "red";
   if(q<(nodecontainer2.length)) q=q+1;
   nodecontainer2[q].newnode.mycolor = "green";
   print();
   print_result();
 }
 else if(val==3 && nodecontainer1[p].newnode.coefficient != "NULL" && nodecontainer2[q].newnode.coefficient == "NULL")
 {
   document.getElementById("Coefficients3").value = parseInt(nodecontainer1[p].coef);
   document.getElementById("Exponents3").value = parseInt(nodecontainer1[p].expo);
   createNode(elem);
   //nodecontainer2[p].newnode.mycolor = "red";
   nodecontainer1[p].newnode.mycolor = "red";
   if(p<(nodecontainer1.length)) p=p+1;
   nodecontainer1[p].newnode.mycolor = "green";
   print();
   console.log("Ending----> p: "+p+" q: "+ q);
   print_result();
 }
 else if(val==4 && nodecontainer1[p].newnode.coefficient == "NULL" && nodecontainer2[q].newnode.coefficient == "NULL")
 {
   alert("Congrats! You have completed the task successfully!");
   var node = new myNode("NULL", "NULL");
   nodecontainer3.push({ newnode:node , coef:"NULL" , expo:"NULL", x_coord: x , y_coord: y, index: index});
   print();
   document.getElementById("step5").style.background = "#F73131";
   document.getElementById("step5").style.border = "2px solid #F73131";
   document.getElementById("step5").disabled= false;
   document.getElementById("step5").value = "Restart Simulator";
   document.getElementById("step5").style.cursor = "pointer";
   print_result();
 }
 else{
   alert("Wrong option selected. Please try again!")
   s2.style.display = "none";
 }
}

function inner(elem)
{
  var s2 = document.getElementById("inner_condn");
  var val2 = s2.options[s2.selectedIndex].value;
  var p = find(nodecontainer1);
  var q = find(nodecontainer2);
  console.log("Expo1: " + nodecontainer1[p].newnode.expo);
  console.log("Expo2: " + nodecontainer2[q].newnode.expo);
  if(val2 == 1 && nodecontainer1[p].newnode.exponent == nodecontainer2[q].newnode.exponent)
  {
    document.getElementById("Coefficients3").value = (nodecontainer1[p].coef) + (nodecontainer2[q].coef);
    document.getElementById("Exponents3").value = (nodecontainer1[p].expo);
    createNode(elem);
    console.log(nodecontainer3);
    var x1 = document.getElementById("decision2");
    x1.style.display = "none";
    if(p<(nodecontainer1.length)){
      nodecontainer1[p].newnode.mycolor = "red";
      p=p+1;
    }
    if(q<=(nodecontainer2.length)){
      nodecontainer2[q].newnode.mycolor = "red";
      q=q+1;
    }
    if(p<(nodecontainer1.length)){
      nodecontainer1[p].newnode.mycolor = "green";
    }
    if(q<(nodecontainer2.length)){
      nodecontainer2[q].newnode.mycolor = "green";
    }
    print();
  }else if(val2 == 2 && nodecontainer1[p].newnode.exponent > nodecontainer2[q].newnode.exponent)
  {
    document.getElementById("Coefficients3").value = parseInt(nodecontainer1[p].coef);
    document.getElementById("Exponents3").value = parseInt(nodecontainer1[p].expo);
    createNode(elem);
    var x1 = document.getElementById("decision2");
    x1.style.display = "none";
    //nodecontainer2[p].newnode.mycolor = "red";
    nodecontainer1[p].newnode.mycolor = "red";
    if(p<(nodecontainer1.length)) p=p+1;
    nodecontainer1[p].newnode.mycolor = "green";
    print();
    console.log("Ending----> p: "+p+" q: "+ q);
  }else if(val2 == 3 && nodecontainer1[p].newnode.exponent < nodecontainer2[q].newnode.exponent)
  {
    document.getElementById("Coefficients3").value = parseInt(nodecontainer2[q].coef);
    document.getElementById("Exponents3").value = parseInt(nodecontainer2[q].expo);
    createNode(elem);
    var x1 = document.getElementById("decision2");
    x1.style.display = "none";
    //nodecontainer2[p].newnode.mycolor = "red";
    nodecontainer2[q].newnode.mycolor = "red";
    if(q<(nodecontainer2.length)) q=q+1;
    nodecontainer2[q].newnode.mycolor = "green";
    print();
    console.log("Ending----> p: "+p+" q: "+ q);
  }else{
    alert("Wrong");
  }
  print_result();
}

function find(nodecontainer)
{
  for(i = 0; i<nodecontainer.length; i++)
  {
      if(nodecontainer[i].newnode.mycolor == "green")
      {
          return i;
      }
  }
}

function head1(){
  c_context.beginPath();
  c_context.fillStyle = "#FCE205";
  c_context.fillRect(20,95,40, 40);
  c_context.fillStyle = "black";
  //c_context.strokeStyle = "#FC8A00";
  //c_context.rect(20,95,40, 40);
  c_context.font = "15px Georgia";
  c_context.fillText("p", 35,115);
  //c_context.stroke();
}
function head2(){
  c_context.beginPath();
  c_context.fillStyle = "#ED6274";
  c_context.fillRect(20,225,40, 40);
  c_context.fillStyle = "black";
  c_context.font = "15px Georgia";
  c_context.fillText("q", 35,245);
}
function head3(){
  c_context.beginPath();
  c_context.fillStyle = "#8cc84c";
  c_context.fillRect(20,355,48, 40);
  c_context.fillStyle = "black";
  c_context.font = "15px Georgia";
  c_context.fillText("Result", 22,380);
}

function createNode(elem)
{
  flag1 = 0;
  var coefficient;
  var exponent;
  if(flag == 0)
  {
    if(elem.id == 1)
    {
      head1();
      x = 100;
      y = 100;
      flag = 1;
    }else if(elem.id == 2){
      head2();
      x = 100;
      y = 230;
      flag = 1;
    }else if(elem.id == 3){
      head3();
      x=100;
      y=360;
      flag = 1;
    }
  }
  if(1)
  {
    coefficient = parseInt(document.getElementById("Coefficients"+elem.id).value);
    exponent = parseInt(document.getElementById("Exponents"+elem.id).value);
    if(coefficient>=0 && exponent>=0)
    {
      var node = new myNode(coefficient, exponent);
      if(elem.id == 1){
        nodecontainer1.push({ newnode:node , coef:coefficient , expo:exponent, x_coord: x , y_coord: y, index: index});
        document.getElementById("Coefficients"+elem.id).value="";
        document.getElementById("Exponents"+elem.id).value="";
        elem.disabled = true;    // Disable the button.
        elem.style.cursor = "no-drop";
      } else if(elem.id == 2){
        document.getElementById("Coefficients"+elem.id).value="";
        document.getElementById("Exponents"+elem.id).value="";
        elem.disabled = true;    // Disable the button.
        elem.style.cursor = "no-drop";
        nodecontainer2.push({ newnode:node , coef:coefficient , expo:exponent, x_coord: x , y_coord: y, index: index});
      }else if(elem.id == 3)
         nodecontainer3.push({ newnode:node , coef:coefficient , expo:exponent, x_coord: x , y_coord: y, index: index});
      node.draw();
    }
    index++;
  }
  else {
    alert("You cannot enter more terms. The screen size is less comparatively.");
  }
}


function finish_first(){
  document.getElementById("step3").style.background = "#2196F3";
  document.getElementById("step3").style.border = "2px solid #2196F3";
 var s = document.getElementById("f_p_s");
 s.style.display = "none";
 var p = document.getElementById("s_p_s");
 p.style.display = "block";
  console.log(nodecontainer1);
 flag = 0;
 sorting_nodes(nodecontainer1);
 //null_node(nodecontainer1);
 console.log(nodecontainer1);
print();
  for(i=0;i<nodecontainer1.length-1; i++)
  {
    console.log(nodecontainer1[i].newnode.coefficient);
    var sign;
    var print_p1_poly = document.getElementById("print_p1");
    if(i==(nodecontainer1.length - 2)) sign = "";
    else sign = "+"
    print_p1_poly.innerHTML = print_p1_poly.innerHTML +
    "<span id="+nodecontainer1[i].index+"p1"+">"+nodecontainer1[i].newnode.coefficient+"x<sup>"+nodecontainer1[i].expo+"</sup>"+ sign +"</span>"
  }
    document.getElementById("polynomials").style.display = "block";
    document.getElementById("display_p1").style.display = "block";
}

function finish_second(){
  document.getElementById("step4").style.background = "#2196F3";
  document.getElementById("step4").style.border = "2px solid #2196F3";
  var s = document.getElementById("s_p_s");
  s.style.display = "none";
  var p = document.getElementById("d_s");
  p.style.display = "block";
  flag = 0;
  sorting_nodes(nodecontainer2);
  //null_node(nodecontainer2);
  console.log(nodecontainer2);
  nodecontainer1[0].newnode.mycolor = "green";
  nodecontainer2[0].newnode.mycolor = "green";
  console.log(nodecontainer2);
  print();
  for(i=0;i<nodecontainer2.length-1; i++)
  {
    console.log(nodecontainer2[i].newnode.coefficient);
    var sign;
    var print_p2_poly = document.getElementById("print_p2");
    if(i==(nodecontainer2.length - 2)) sign = "";
    else sign = "+"
    print_p2_poly.innerHTML = print_p2_poly.innerHTML +
    "<span id="+nodecontainer2[i].index+"p1"+">"+nodecontainer2[i].newnode.coefficient+"x<sup>"+nodecontainer2[i].expo+"</sup>"+ sign +"</span>"
  }
  document.getElementById("instructions").style.display = "none";
  document.getElementById("display_p2").style.display = "block";
}

function print()
{
  flag1=1;
  c_context.clearRect(0, 0, c.width, c.height);
  for (i = 0; i < nodecontainer1.length; i++)
  {
      head1();
      nodecontainer1[i].newnode.draw();
      nodecontainer1[i].newnode.pointer();
  }

  for (i = 0; i < nodecontainer2.length; i++)
  {
    head2();
      nodecontainer2[i].newnode.draw();
      nodecontainer2[i].newnode.pointer();
  }
  if(nodecontainer3.length>0){
    for (i = 0; i < nodecontainer3.length; i++)
    {
        head3();
        nodecontainer3[i].newnode.draw();
        nodecontainer3[i].newnode.pointer();
    }

  }
}

function start(){
  var p = document.getElementById("starting");
  p.style.display = "block";
  var s = document.getElementById("start-button");
  s.style.display = "none"
}

function sorting_nodes(nodecontainer){
  var xcord = [];
  for(i = 0; i<nodecontainer.length; i++)
  {
    xcord[i] = nodecontainer[i].newnode.x;
  }
  nodecontainer.sort(function(a, b){return a.expo - b.expo});
  nodecontainer.reverse(function(a, b){return a.expo - b.expo});
  for(i = 0; i<nodecontainer.length; i++)
  {
     nodecontainer[i].newnode.x = xcord[i];
     nodecontainer[i].x_coord = xcord[i];
  }
  var node = new myNode("NULL", "NULL");
  nodecontainer.push({ newnode:node , coef:"NULL" , expo:"NULL", x_coord: x , y_coord: y, index: index});
}
