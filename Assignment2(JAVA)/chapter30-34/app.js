//_____________________________________TASK: 1________________________________________________________

// document.write(new Date());

//___________________________________TASK : 2_______________________________________________

// var date=new Date()
// document.write("Current Date And Time: "+date);
// var a=date.toString();
// var b=a.slice(4,7);
// document.write("<br>Current Month: "+b);

//______________________________________TASK : 3______________________________________________

// var date=new Date();
// var a=date.toString();
// var b=a.slice(0,3);
// document.write("Today is "+b);

//_______________________________________TASK : 4___________________________________________

// var date=new Date();
// var a=date.toString();
// var b=a.slice(0,3);
// if(b=="Sat"||b=="Sun"){
//     document.write("Its Fun day");
// }
// else{
//     document.write("Its not Fun Day");
// }

//________________________________________TASK : 5______________________________________

// var date=new Date();
// var a=date.toString();
// var b=a.slice(8,10);
// document.write(b);
// if(b<=15){
//     document.write("<br>First fifteen days of the months");
// }
// else{
//     document.write("<br>Last days of months");
// }

//___________________________________________TASK : 6___________________________________________

// var pdate=new Date("Jan 1,1970");
// var p=pdate.getTime();
// var date=new Date();
// var a=date.getTime();
// document.write("<br>Current Date: "+date);
// var diff=a-p;
// var diffyear=diff/60000;
// document.write("<br>Elapsed miliseconds since January 1,1970: "+diff);
// document.write("<br>Elapsed minutes since January 1,1970: "+diffyear);

//___________________________________________TASK : 7_________________________________________________

// var date= new Date();
// var a=date.toString();
// var b=a.slice(16,18);
// if(b<=12){
//     alert("Its AM");
// }
// else{
//     alert("Its PM");
// }

//______________________________________TASK : 8____________________________________________________

// laterdate = new Date("Dec 31,2020");
//  document.write("Later Date: "+laterdate);

//________________________________TASK : 9____________________________________________________________

// var ramdan=new Date("Jun 18,2015");
// var days=ramdan.getTime();
// var date=new Date();
// var day=date.getTime();
// var diff=day-days;
// var diffdays=diff/(1000*60*60*24*30*12);
// document.write("<br>"+Math.floor(diffdays*365)+" passed since 1st Ramdan of Jun 18,2015");


//______________________________________TASK : 10____________________________________________________

// var date1=new Date("Dec 5,2015");
// var date2=new Date("Jan 1,2015");
// var dat1=date1.getTime();
// var dat2=date2.getTime();
// var diff=dat1-dat2;
// document.write(diff/1000+" seconds passed since beginning of 2015.");

//________________________________________TASK : 11___________________________________________________

// var today = new Date();
// document.write("Current time :"+today+"<br>");
// var date=today.setHours(today.getHours() - 1);
// document.write("1 hour ago it was "+today+"<br>");


//_________________________________________TASK : 12_________________________________________

// var today = new Date();
// document.write("Current time :"+today+"<br>");
// var date=today.setUTCFullYear(today.getUTCFullYear() - 100);
// document.write("100 Years back, it was "+today+"<br>");

//___________________________________TASK : 13_________________________________________________

// var age=+prompt("Enter your age: ");
// var year=new Date();
// var year1=year.getUTCFullYear();
// var age1=year1-age;
// document.write("<br >Your Birth Year is: "+age1);

//_____________________________________________TASK : 14___________________________________________

// var head="<h1>K- Elecric bill</h1>"; 
// var name=prompt("Enter Your name: ");
// var month=prompt("Enter Month In letters: ");
// var units=+prompt("Enter no of units: ");
// var charges=+prompt("Enter charges per unit: ");
// var a=units*charges;
// var b=a+350;


// document.write("<br>Name: "+name);
// document.write("<br>Month: "+month);
// document.write("<br>No. of units: "+units);
// document.write("<br>charges per unit: "+charges);
// document.write("<br><br><br>Net Amount payable (Within Due Date): "+a);
// document.write("<br>Late payment surcharge: "+350);
// document.write("<br>Gross Amount Payable (after Due Date): "+b);

//___________________________________________END___________________________________________________