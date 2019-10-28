var dayOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "wednesday",
  "Thursday",
  "Friday",
  "saturday"
];
var maleAkanNames = [
  "Kwasi",
  "Kwadwo",
  "Kwabena",
  "Kwaku",
  "Yaw",
  "Kofi",
  "Kwame"
];

var femaleAkanNames = [
  "Akosua",
  "Adwoa",
  "Abenaa",
  "Akua",
  "Yaa",
  "Afua",
  "Ama"
];
function getDayOfWeek() {
var day = parseInt(document.getElementById("day").value);
var month = parseInt(document.getElementById("month").value);
var year = parseInt(document.getElementById("year").value);
var yearString= year.toString();
var century=parseInt(centuryString);
var centuryString=yearString.slice(0,2);
var dayOfWeek=math.trunc((((century/4)-2*century-1)+((5*year/4)+((26*(month+1/10))+date)%
