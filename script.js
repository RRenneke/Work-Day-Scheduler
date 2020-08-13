//variables to get the current date and time from"https://tecadmin.net/get-current-date-time-javascript/""
var today = new Date();
var currentDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
var currentHour = today.getHours();

// get the current date and show it in HTML where id equals currentDate
document.getElementById("currentDate").innerText = currentDate

//variables for each hour
var time9 = document.getElementById("input9")
var time10 = document.getElementById("input10")
var time11 = document.getElementById("input11")
var time12 = document.getElementById("input12")
var time1 = document.getElementById("input1")
var time2 = document.getElementById("input2")
var time3 = document.getElementById("input3")
var time4 = document.getElementById("input4")
var time5 = document.getElementById("input5")

//change the background color based on the hour
//method add(class) = Adds one or more class names to an element. From https://www.w3schools.com/jsref/prop_element_classlist.asp
if (currentHour > 9) {
    time9.classList.add("past");
    }
    else if (currentHour < 9) {
        time9.classList.add("future");
    }
    else {
        time9.classList.add("currentHour");
    }

if (currentHour > 10) {
    time10.classList.add("past");
    }
    else if (currentHour < 10) {
        time10.classList.add("future");
    }
    else {
        time10.classList.add("currentHour");
    }

if (currentHour > 11) {
        time11.classList.add("past");
    }
    else if (currentHour < 11) {
        time11.classList.add("future");
    }
    else {
        time11.classList.add("currentHour");
    }

if (currentHour > 12) {
        time12.classList.add("past");
    }
    else if (currentHour < 12) {
        time12.classList.add("future");
    }
    else {
        time12.classList.add("currentHour");
    }

if (currentHour > 1) {
        time1.classList.add("past");
    }
    else if (currentHour < 1) {
        time1.classList.add("future");
    }
    else {
        time1.classList.add("currentHour");
    }

if (currentHour > 2) {
        time2.classList.add("past");
    }
    else if (currentHour < 2) {
        time2.classList.add("future");
    }
    else {
        time2.classList.add("currentHour");
    }


if (currentHour > 3) {
        time3.classList.add("past");
    }
    else if (currentHour < 3) {
        time3.classList.add("future");
    }
    else {
        time3.classList.add("currentHour");
    }

if (currentHour > 4) {
        time4.classList.add("past");
    }
    else if (currentHour < 4) {
        time4.classList.add("future");
    }
    else {
        time4.classList.add("currentHour");
    }

if (currentHour > 5) {
        time5.classList.add("past");
    }
    else if (currentHour < 5) {
        time5.classList.add("future");
    }
    else {
        time5.classList.add("currentHour");
    }


//function retrieves data from local storage to create a new variable
//https://developer.mozilla.org/en-US/docs/Web/API/Storage/getItem

function getInputedTask() {
    var task9 = localStorage.getItem('input9');
    var task10 = localStorage.getItem('input10');
    var task11 = localStorage.getItem('input11');
    var task12 = localStorage.getItem('input12');
    var task1 = localStorage.getItem('input1');
    var task2 = localStorage.getItem('input2');
    var task3 = localStorage.getItem('input3');
    var task4 = localStorage.getItem('input4');
    var task5 = localStorage.getItem('input5');
  
    document.getElementById('input9').value = task9;
    document.getElementById('input10').value = task10;
    document.getElementById('input11').value = task11;
    document.getElementById('input12').value = task12;
    document.getElementById('input1').value = task1;
    document.getElementById('input2').value = task2;
    document.getElementById('input3').value = task3;
    document.getElementById('input4').value = task4;
    document.getElementById('input5').value = task5;

};

//function uses variable to post value in local storage
function postInputedTask() {
    localStorage.setItem('task9', 'input9.value');
    localStorage.setItem('task10', 'input10.value');
    localStorage.setItem('task11', 'input11.value');
    localStorage.setItem('task12', 'input12.value');
    localStorage.setItem('task1', 'input1.value');
    localStorage.setItem('task2', 'input2.value');
    localStorage.setItem('task3', 'input3.value');
    localStorage.setItem('task4', 'input4.value');
    localStorage.setItem('task5', 'input5.value');
  }

  //make a call to get the current date. 
  new Date()
  getInputedTask()
  postInputedTask() 