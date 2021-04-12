const IS_PARTTIME=1;
const IS_FULLTIME=2;
const FULLTIME_HRS=8;
const PARTTIME_HRS=4;
const WAGE_PER_HR=20;
const MAX_NUMBER_OF_WORKING_DAYS=20;
const TOTAL_WORKING_HRS=100;
var dailWage=[];

function getempHrs(empcheck){
    switch(empcheck){
        case 1:
            return PARTTIME_HRS;
        case 2:
            return FULLTIME_HRS;
        default:
            return 0;
    }
}

function calcWage(totalWorkinghrs){
    return totalWorkinghrs*WAGE_PER_HR;
}

let empWage=0;

function sum(dailwage){
    return empWage+=dailwage;
}

let dayCounter=0;
function dayCount(dailwage){
    dayCounter++;
    return dayCounter +" = "+dailwage;
}

function getFulltimwage(dailwage){
    return dailwage.includes("160");
}


function getPartTime(dailwage){
    return dailwage.includes("80");
}

let emphrs=0;
let totalWorkinghrs=0;
let totalworkingDays=0;

while(totalWorkinghrs<=TOTAL_WORKING_HRS && totalworkingDays<MAX_NUMBER_OF_WORKING_DAYS){
    totalworkingDays++;
    let empcheck=Math.floor((Math.random()*10)%3);
    emphrs=getempHrs(empcheck);
    totalWorkinghrs+=emphrs;
    dailWage.push(calcWage(emphrs));
}


dailWage.forEach(sum);

let mapDayWithWage=dailWage.map(dayCount);
console.log(mapDayWithWage);

console.log("Daily wage is: "+dailWage);
console.log("Total Hours: "+totalWorkinghrs);
console.log("Total Working Days: "+totalworkingDays);
console.log("Daily Wage of a employee is: "+empWage);

let fulltimeWage=mapDayWithWage.filter(getFulltimwage);
console.log("Days where is full time wage: ");
console.log(fulltimeWage);

console.log("Day where it is full time wage: "+mapDayWithWage.find(getFulltimwage));

console.log("Check All Element have Full Time Wage "+fulltimeWage.every(getFulltimwage));

console.log("Check for Part time wage: "+mapDayWithWage.some(getPartTime));
