//________________________________TASK : 1________________________________________________

// var fname=prompt("Enter First Name: ");
// var lname=prompt("Enter Last Name: ");
// var fullname=fname+" "+lname;
// alert("Welcome! "+fullname);

//__________________________________TASK : 2___________________________________________

// var phone=prompt("What is you favourite phone: ");
// for(var i=1;i<phone.length;i++){

// }
// document.write("My Favourite Phone is: "+phone);
// document.write("<br >Length of string: "+i);

//__________________________________TASK : 3_____________________________________________

// var word="Pakistani";
// document.write("String: Pakistani<br >Index of 'n': "+word.indexOf("n"));

//______________________________TASK : 4________________________________________________

// var word="Hello World";
// document.write("String: Hello world<br >Last Index of 'l': "+word.lastIndexOf("l"));

//_________________________________TASK : 5____________________________________________

// var word="Pakistani";
// document.write("String: "+word+"<br >Character at index 3: "+word[3]);

//_____________________________TASK : 6____________________________________________________


// var fname=prompt("Enter First Name: ");
// var lname=prompt("Enter Last Name: ");
// alert("Welcome! "+fname+" "+lname);

//_______________________________TASK : 7_____________________________________________________

// var word="Hyderabad";
// document.write("City: "+word+"<br >After replacement: "+word.replace("Hyder","Islam"));

//______________________________TASK : 8_______________________________________________

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// document.write("Message: "+message+"<br ><br >After Replacement: "+message.replace(/and/g,"&")); 

//_________________________________TASK : 9___________________________________________________-

// var value="472";
// document.write("String: <br>"+value);
// var num=Number(value);
// document.write("<br >Number: <br>"+num);


//________________________________________TASK: 10____________________________________________

// var input=prompt("Write anything in small letters: ");
// document.write("your word: "+input+"<br >Upper Case: "+input.toUpperCase());

//______________________________________TASK : 11____________________________________________


// var input=prompt("Write anything : ");
// var word1=input[0].toUpperCase();
// var word2=input.slice(1,input.length);
// document.write("User Input: "+input+"<br >Title Case: "+word1+word2);

//___________________________________________TASK : 12___________________________________

// var num=32.36;
// var string=num.toString();
// document.write("Number: "+string);
// var a=string.slice(0,2);
// var b=string.slice(3,5);
// document.write("<br>Result: "+a+b);


//___________________________________________TASK : 13________________________________________

// var name=prompt("Enter your Name: \nno space And Special characters allowed!");
// var str;
// function onlyLetters(str) {
//     var str;
//     var A;
//     if(str.match("^[A-Za-z0-9]+$")){
//        alert("Your Name: "+name);

//     }
// else{
//   alert("Plzz enter a valid user name");
//     }
//     return str;
//   }

// onlyLetters(name);

//___________________________________TASK : 14_________________________________________________________

// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var C=prompt("Welcome to the Backery.What do you want to sir/ma'am?");
// var B=C.toLowerCase();
// for(var b=0;b<1;b++){
// for(var i=0;i<=A.length;i++){
//     if(B==A[i]){
//         alert(B+"is available at index "+i);
//         break;
//     }
// }
// if(B!=A[i]){
//         alert("We are sorry."+B+" is no availble in our backery");
// } 
// }

//_______________________________TASK: 15______________________________________________________

// function onlyLetters(str) {
//     var str;
//     var A;
    
//     if(str.match("^[A-Za-z0-9]+$")){
//        alert("Your Name: "+name);

//     }
// else{
//   alert("Plzz enter a valid user name");
//     }
//     return str;
//   }
// var name=+prompt("Enter your Name: ");
// var str;

// if(str.value.length < 5){
// onlyLetters(name);
// }


//_____________________________________________TASK : 16______________________________________________

// var university="University of karachi";
// var uni=[];
// uni=university.slice(0,10);
// for(var i=0;i<uni.length;i++){
// document.write(uni[i]+"<br>");
// }
// var uni1=[];
// uni1=university.slice(11,14);
// document.write("<br>"+uni1[0]+"<br >"+uni1[1]+"<br><br>");

// var uni2=[];
// uni2=university.slice(14);
// for(var a=0;a<uni2.length;a++){
// document.write(uni2[a]+"<br>");
// }

//_____________________________________TASK : 17_________________________________________________

// var input=[];
// input=prompt("Enter any word: ");
// var a=input.lastIndexOf("");
// document.write("User Input: "+input);
// document.write("<br>Last Character of Input: "+input[a-1]);

//_________________________________________TASK : 18______________________________________


// function count(str) { 
//     return str.split("the").length;
//   }
//   var text="The quick brown fox jumps over the lazy dog";
//   document.write("Text: "+text+"<br >");
//   document.write("<br>There are "+count(text)+" occurrence(s) of word 'the'");

//_______________________________________________END______________________________________________________