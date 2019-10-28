var submit = document.getElementById("submit");

submit.addEventListener("click", function() {
  var dayOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  var malesNames = [
    "Kwasi(",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame"
  ];

  var femalesNames = [
    "Akosua",
    "Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua",
    "Ama"
  ];
  var day = document.getElementById("date").value;
  var month = document.getElementById("month").value;
  var year = document.getElementById("year").value;
  var date= new Date(year + "-" + month + "-" + date + "-");
  var dayOfWeek=date.getDay();
  var male = document.getElementById("male");
  var female = document.getElementById("female");
  var result= document.getElementById("display");

  if(day <1 || day >31){
    alert("incorrect date");
  }
   else if(month<1 || month >12){
     alert("incorrect month");
   }
   else if(year.toString().length !== 4){
     alert("incorrect year");
   }
   
  
});
