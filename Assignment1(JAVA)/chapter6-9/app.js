//___________________________________________TASK : 1___________________________________________

// var a=+prompt("Enter any number: ");
// document.write("<br />The value of a is: "+a);

// document.write("<br /><br />The number of ++a is: "+ ++a);
// document.write("<br />Now The value of a is: "+a);

// document.write("<br /><br />The number of a++ is: "+ a++);
// document.write("<br />Now The value of a is: "+a);

// document.write("<br /><br />The number of --a is: "+ --a);
// document.write("<br />Now The value of a is: "+a);

// document.write("<br /><br />The number of a-- is: "+ a--);
// document.write("<br />Now The value of a is: "+a);

//____________________________________________________TASK : 2___________________________________

// var a = 2, b = 1; 
// var result = --a - --b + ++b + b--; 
// document.write("<br />--a=> means a=1  decreament is done. <br /> --b=> means b=0 fist decreament is done.<br />++b=>means b=1 first increament is done.<br />b-- =>means value print and then decreament will be done in next step.<br />Result: "+result);

//________________________________________________TASK : 3__________________________________________-

// var name= prompt("What is your name: ");
// document.write("<br />Hi! "+name);

//__________________________________________TASK : 5____________________________________________


// document.write("<br /><br />Table of 5");
// var num=+prompt("Enter A number: ");
// if(num>0){
// for(var i=1;i<=10;i++)
// {
//     document.write("<br/>"+num+" * "+i+" ="+i*num);
// }
// }
// else{
//     for(var i=1;i<=10;i++){
//     document.write("<br/>"+5+" * "+i+" ="+i*5);
//     }
// }

//________________________________________TASk : 6__________________________________________________


var sub1=prompt("Enter Subject 1: ");
var sub2=prompt("Enter Subject 2: ");
var sub3=prompt("Enter Subject 3: ");
var tsub1=100;
var tsub2=100;
var tsub3=100;
var tsub=300;
var msub1=+prompt("Obtaines marks of subject 1: ");
var msub2=+prompt("Obtaines marks of subject 2: ");
var msub3=+prompt("Obtaines marks of subject 3: ");
Total=msub1+msub2+msub3;
Percentage1=(msub1/tsub1)*100;
Percentage2=(msub2/tsub3)*100;
Percentage3=(msub3/tsub3)*100;
Percentage=(Total/tsub)*100;

document.write("<h3>Subjects<h3>"+"<br>"+sub1+"=>100 out of: "+msub1+"<br>"+sub2+"=>100 out of: "+msub2+"<br >"+sub3+"=>100 out of: "+msub3);
document.write("<br>Total Marks: "+Total);
document.write("<br>Percentage: "+Percentage+"%");

//_____________________________________________END________________________________________________