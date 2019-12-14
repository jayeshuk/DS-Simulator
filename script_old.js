var c = document.getElementById("myCanvas");
var c_context = c.getContext("2d");
var c_n_1_flag = 0;
var c_n_2_flag = 0;
var x_f = 10;
var y_f = 10;
var ex1 = [];
var ex2 = [];
var coe1 = [];
var coe2 = [];
var result_coe = [];
var result_ex = [];
function Node() {
  var coeff = document.getElementById("Coefficients").value;
  var expo = document.getElementById("Exponents").value;
  coe1.push(coeff);
  ex1.push(expo);
  console.log(coe1);
  console.log(ex1);
     if(coeff.toString() == "" || expo.toString() == "" || expo<0){ alert("Enter a coefficient"); }
     else{
       if(c_n_1_flag!=0)
       {
         c_context.beginPath();
         c_context.moveTo(x_f - 40,67.5);
         c_context.lineTo(x_f +30, 67.5);
         c_context.lineWidth = 2;
         c_context.stroke();
       }
       else if(c_n_1_flag == 0)
       {
         c_context.strokeStyle = "#f00";
         c_context.strokeRect(10, 10, 30, 30);
         c_context.fillStyle = "#00f";
         c_context.fillRect(10, 10, 30, 30);
         c_context.fillStyle = "#FFFFFF"
         c_context.font = "15px Arial";
         c_context.fillText("p",20,30);
         console.log(c_n_1_flag);
         c_n_1_flag = 1
       }

       c_context.strokeStyle = "#f00";
       c_context.strokeRect(x_f,50, 98, 35);
       //c_context.strokeRect(10, 50, 98, 35);
       c_context.fillStyle = "#00f";
       c_context.fillRect(x_f + 2.5, 52.5, 30, 30);
       c_context.fillStyle = "#00f";
       c_context.fillRect(x_f + 34, 52.5, 30, 30);
       c_context.fillStyle = "#00f";
       c_context.fillRect(x_f+65.5, 52.5, 30, 30);
       c_context.fillStyle = "#FFFFFF";
       c_context.font = "15px Arial";
       c_context.fillText(coeff.toString(),x_f + 5,75);
       c_context.font = "15px Arial";
       c_context.fillText(expo.toString(),x_f+34+5,75);
       c_context.font = "15px Arial";
       c_context.fillText(coeff.toString(),x_f + 5,75);
       x_f = x_f + 128;

            var s = document.getElementById("c_n_1");
            s.style.cursor = "no-drop";
            var p = document.getElementById("add_more");
            p.style.cursor = "default";
            var p = document.getElementById("finish");
            p.style.cursor = "default";
            document.getElementById("c_n_1").disabled = true;
            document.getElementById("add_more").disabled = false;
            document.getElementById("finish").disabled = false;
     }
   }

   function Node2() {
     var coeff2 = document.getElementById("Coefficients2").value;
     var expo2 = document.getElementById("Exponents2").value;
     coe2.push(coeff2);
     ex2.push(expo2);
     console.log(coeff2);
     console.log(expo2);
        if(coeff2.toString() == "" || expo2.toString() == "" || expo2<0){ alert("Enter a coefficient"); }
        else{
          if(c_n_2_flag!=0)
          {
            c_context.beginPath();
            c_context.moveTo(y_f - 40, 150 + 67.5);
            c_context.lineTo(y_f + 10, 150 + 67.5);
            c_context.lineWidth = 2;
            c_context.stroke();
          }
          else if(c_n_2_flag == 0)
          {
            c_context.strokeStyle = "#f00";
            c_context.strokeRect(10, 150, 30, 30);
            c_context.fillStyle = "#00f";
            c_context.fillRect(10, 150, 30, 30);
            c_context.fillStyle = "#FFFFFF"
            c_context.font = "15px Arial";
            c_context.fillText("q",20,165);
            console.log(c_n_2_flag);
            c_n_2_flag = 1
          }

          c_context.strokeStyle = "#f00";
          c_context.strokeRect(y_f,200, 98, 35);
          //c_context.strokeRect(10, 50, 98, 35);
          c_context.fillStyle = "#00f";
          c_context.fillRect(y_f + 2.5, 202.5, 30, 30);
          c_context.fillStyle = "#00f";
          c_context.fillRect(y_f + 34, 202.5, 30, 30);
          c_context.fillStyle = "#00f";
          c_context.fillRect(y_f+65.5, 202.5, 30, 30);
          c_context.fillStyle = "#FFFFFF";
          c_context.font = "15px Arial";
          c_context.fillText(coeff2.toString(),y_f + 5,220);
          c_context.font = "15px Arial";
          c_context.fillText(expo2.toString(),y_f+34+5,220);
          c_context.font = "15px Arial";
          c_context.fillText(coeff2.toString(),y_f + 5,220);
          y_f = y_f + 128;
               var s = document.getElementById("c_n_2");
               s.style.cursor = "no-drop";
               var p = document.getElementById("add_more2");
               p.style.cursor = "default";
               var p = document.getElementById("finish2");
               p.style.cursor = "default";
               document.getElementById("c_n_2").disabled = true;
               document.getElementById("add_more2").disabled = false;
               document.getElementById("finish2").disabled = false;
        }
      }

   function add_more(){
     var s = document.getElementById("c_n_1");
     s.style.cursor = "default";
     var p = document.getElementById("add_more");
     p.style.cursor = "no-drop";
     var p = document.getElementById("finish");
     p.style.cursor = "default";
     document.getElementById("c_n_1").disabled = false;
     document.getElementById("add_more").disabled = true;
     document.getElementById("finish").disabled = false;
     document.getElementById('Coefficients').value = '';
     document.getElementById('Exponents').value = '';

   }




      function add_more2(){
        var s = document.getElementById("c_n_2");
        s.style.cursor = "default";
        var p = document.getElementById("add_more2");
        p.style.cursor = "no-drop";
        var p = document.getElementById("finish2");
        p.style.cursor = "default";
        document.getElementById("c_n_2").disabled = false;
        document.getElementById("add_more2").disabled = true;
        document.getElementById("finish2").disabled = false;
        document.getElementById('Coefficients2').value = '';
        document.getElementById('Exponents2').value = '';
      }

   function finish_first(){
     var s = document.getElementById("f_p_s");
     s.style.display = "none";
     var p = document.getElementById("s_p_s");
     p.style.display = "block";
   }
      function finish_second(){
        var s = document.getElementById("s_p_s");
        s.style.display = "none";
        var p = document.getElementById("d_s");
        p.style.display = "block";
      }

    function start(){
      var p = document.getElementById("starting");
      p.style.display = "block";
      var s = document.getElementById("start-button");
      s.style.display = "none"
    }

    function addition(){
      var l1 = coe1.length;
      var l2 = coe2.length;
      var r1 = ex1.length;
      var r2 = ex2.length;
      console.log(coe1);
      console.log(ex1);
      console.log(coe2);
      console.log(ex2);
      console.log(l1);
      console.log(l2);
      console.log(r1);
      console.log(r2);
      var large;
      if (r1>r2){ large = r2; }
      else{ large = r1; }
      for(i=0; i<large; i++)
      {
        if(ex1[i]==ex2[i]){
          result_coe.push(parseInt(coe1.pop())+parseInt(coe2.pop()));
          result_ex.push(ex1[i]);
        }
        else if(ex1[i]>ex2[i]){
          result_coe.push(parseInt(coe1[i]));
          result_ex.push(parseInt(ex2[i]));
        }
        else if(ex1[i]<ex2[i]){
          result_coe.push(parseInt(coe2[i]));
          result_ex.push(parseInt(ex2[i]));
        }
      }

      console.log(result_coe);
      console.log(result_ex);
    }
