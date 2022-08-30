// DATE and TIME

let date = new Date();
let day = date.getDay();
let hour = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
let showDay = document.querySelector(".showD");
let showTime = document.querySelector(".showT");

function findDay(day) {
  switch (day) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
  }
  return day;
}

let hour12t, hour24t;
function hour12() {
  clearInterval(hour24t);
  let cDay = findDay(day);
  hour12t = setInterval((date) => {
    date = new Date();
    hour = date.getHours();
    hour = hour <= 12 ? hour + " PM " : hour - 12 + " AM ";
    hour = hour > 9 ? hour : "0" + hour;
    min = date.getMinutes();
    min = min > 9 ? min : "0" + min;
    sec = date.getSeconds();
    sec = sec > 9 ? sec : "0" + sec;
    showTime.innerText = `${hour} : ${min} : ${sec}`;
    // console.log(day + " | " +hour +" : " +min +" : "+sec);
    // console.log(showTime);
  }, 1000);
  showDay.innerText = cDay + " | ";
  showTime.innerText = ` ${hour} : ${min} : ${sec}`;
}

function hour24() {
  clearInterval(hour12t);
  let cDay = findDay(day);
  hour24t = setInterval((date) => {
    date = new Date();
    hour = date.getHours();
    hour = hour > 9 ? hour : "0" + hour;
    min = date.getMinutes();
    min = min > 9 ? min : "0" + min;
    sec = date.getSeconds();
    sec = sec > 9 ? sec : "0" + sec;
    showTime.innerText = `${hour} : ${min} : ${sec}`;
  }, 1000);
  showDay.innerText = cDay + " |  ";
  showTime.innerText = `${hour} : ${min} : ${sec}`;
}



// Rotate String
inputBox = document.querySelector('.rotate')
res = document.querySelector('.ans');
rotateVal = document.querySelector('.rotateVal');
function rightRotate()
{
    let str = inputBox.value;
    let frtChar = str.slice(str.length-rotateVal.value,str.length);
    // console.log(frtChar);
    let newChar =  str.slice(0,(str.length-rotateVal.value));
    // console.log(newChar);
    res.innerText = `${frtChar}${newChar}`
    // console.log(frtChar+" "+newChar);
}
// Rotate string

// Christmas day Remaining
dateBox = document.querySelector('.cDate');
showDate = document.querySelector('.christmasDay');
function cDatefind(){
  var arr = dateBox.value.split('-');
  var newDate = new Date(Number(arr[0]),Number(arr[1]-1),Number(arr[2]));
  var ChristmasDate = new Date(+arr[0],11,25);
  if(newDate.getMonth() == ChristmasDate.getMonth() && newDate.getDate() > ChristmasDate.getDate())
  {
    ChristmasDate = new Date(+arr[0]+1,11,25);
  }
  const oneDay=24*60*60*1000;
  showDate.innerText = `${Math.ceil((ChristmasDate-newDate)/oneDay)} Days left for next christmas`;
  console.log(Math.ceil((ChristmasDate-newDate)/oneDay));

}
// Christmas day Remaining


// Calculator
calcInp = document.querySelector('.displaynum');

let val = calcInp.value;
let val1 ="";
let check = 0;
let eqlCheck=0;
function calc(num)
{
    if(eqlCheck==1)
    clr();
    eqlCheck=0;
    val+=num;
    console.log(val);
    calcInp.value=val;
}
function mul()
{
    val1 = val;
    val="";
    calcInp.value="";
    check=1;
}
function div()
{
    val1 = val;
    val="";
    calcInp.value="";
    check=2;
}
function eql()
{
    if(check == 1)
    calcInp.value = val1*val;
    else if(check == 2)
    calcInp.value = val1/val;
    eqlCheck=1;
}
function clr()
{
    calcInp.value ="";
    val = "";
    val1 ="";   
    check=0;
}



// first letter of each word is upperCase
let strInp = document.querySelector('.strInp');
let strAns = document.querySelector('.strAns');
function capitalStr()
{
    let finalAns = "";
    const arr = strInp.value.split(" ");
    let ans = "";
    arr.forEach(element => {
        ans=element.charAt(0).toUpperCase();
        let newStr = element.substring(1,element.length)
        finalAns += ans+newStr+" ";
    });
    // console.log(ans);
    strAns.innerText = finalAns;
    console.log(finalAns);
}



