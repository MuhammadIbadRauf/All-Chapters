//_______________________________________TASK : 1_________________________________________________

// function power(a,b){
// var value = Math.pow(a, b);
// return value
// }
// var no=+prompt("Enter your number: ");
// var po=+prompt("Enter its power: ");
// var result=power(no,po);
// document.write("Answer : " + result);

//_______________________________________________TASK : 2______________________________________________

// function LeapYear (year) {
//  if((year % 4 === 0) && (!(year % 100 === 0) || (year % 400 === 0))){
//   return document.write("Its Leap Year");
//  }
//  else{
//    return document.write("Its not Leap Year!");
//  }
//   }
// var year=+prompt("Enter Year: ");
// LeapYear(year)

//________________________________________TASK : 3______________________________________________________

// var one=+prompt("Enter length1 of a triangle: ");
// var two=+prompt("Enter length2 of a triangle: ");
// var three=+prompt("Enter length3 of a triangle: ");

// var result1=first(one,two,three);
// function first(a,b,c){
//   return (a+b+c)/2;
// }
// document.write("Value of S: "+result1);
// var result2=area(result1,one,two,three)
// function area(s,a,b,c){
//   var Area=s*(s-a)*(s-b)*(s-c);
//   return Area
// }
// document.write("<br />Area of triangle : "+result2);

//___________________________________Task : 4___________________________________________________________

// var sub1=+prompt("Enter sub1 marks: ");
// var sub2=+prompt("Enter sub2 marks: ");
// var sub3=+prompt("Enter sub3 marks: ");

// function ave(a,b,c){
//   return a+b+c/3;

// }
// var result1=ave(sub1,sub2,sub3);

// function per(d,e,f){
//   return (d+e+f)*100/300; 
// }
// var percentage=per(sub1,sub2,sub3);

// function main(x,y){
//   return document.write("Average Marks: "+x+"<br />Percentage: "+y);
// }
// main(result1,percentage);

//__________________________________________TASK : 5_______________________________________________________

// var word=prompt("Enter name to find its letter: ");
// var chara=prompt("Which word do you want to find: ");
// function indexOf(word, character){
//   for (let i = 0; i < word.length; i++) {
//     if (word[i] === character) {
//       return i;
//     }
//   }

//   return-1
// }

// document.write("Your word is at index: "+indexOf(word,chara));

//__________________________________________TASK : 6______________________________________________________

// function removeVowels(str) {
//   return str.replace(/[aeiou]/gi, '');
// }

// document.write( removeVowels("Write a function to delete all vowels from a sentence"));

//______________________________________________TASK : 7____________________________________________

// function findOccurrences() {
//   var str = "Pleases read this application and give me gratuity";
//   var res = str.match(/[ea]{2}/g);
//   return res ? res.length : 0;
// }

// var found = findOccurrences();

// document.write(found);

//_________________________________________TASK : 8___________________________________________

// var dis=+prompt("Write distance b/w 2 cities in km: ");

// function meters(a){
//   return a*1000
// }
// var result1=meters(dis);

// function feet(b){
//     return b*3281
// }
// var result2=feet(dis);

// function inches(c){
//     return c*39370
// }

// var result3=inches(dis)

// function centimeters(d){
//    return d*1000000
// }
// var result4=centimeters(dis);

// document.write("<br />Distance in meters: "+result1);
// document.write("<br />Distance in feet: "+result2);
// document.write("<br />Distance in inches: "+result3);
// document.write("<br />Distance in centimeters: "+result4);


//___________________________________________TASK : 9__________________________________________

// var work=+prompt("Total hours with overtime do you work: ");
// function Overtime(a){
//     if(a>40){
//         var b=a-40;
//         return document.write("Total amount of "+b+ " overtimes hours : "+ b*1200);
//     }
//     else{
//         return document.write("No over time overs!")
//     }
// }
// Overtime(work);


//__________________________________________TASK : 10___________________________________________

// var amount=+prompt("Enter no.of amounts: ");
// function hund(a){
//     var one=Math.floor(a / 100);
//     return one;
// }
// var result1=hund(amount);

// function fif(b){
//     var two=Math.floor((b%100)/50);
//     return two
// }
// var result2=fif(amount);

// function ten(c){
//     var three=Math.floor(((c%100)%50)/10);
//     return three
// }
// var result3=ten(amount);

// document.write("You will have "+result1+" hundred notes "+result2+" fifty notes "+result3+" ten notes");



//__________________________________________________END______________________________________________________
