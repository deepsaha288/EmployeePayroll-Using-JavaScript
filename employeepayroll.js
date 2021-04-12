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

const findTotal = (totalVal,dailyVal) => {
    return totalVal+dailyVal;
}

let emphrs=0;
let totalWorkinghrs=0;
let totalworkingDays=0;
let empHrsArr=[];

while(totalWorkinghrs<=TOTAL_WORKING_HRS && totalworkingDays<MAX_NUMBER_OF_WORKING_DAYS){
    totalworkingDays++;
    let empcheck=Math.floor((Math.random()*10)%3);
    emphrs=getempHrs(empcheck);
    totalWorkinghrs+=emphrs;
    empHrsArr.push(emphrs);
    dailWage.push(calcWage(emphrs));
}


dailWage.forEach(sum);
let mapDayWithWage=dailWage.map(dayCount);
console.log("Day with employee wage: "+mapDayWithWage);

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


let count=0;
let totalHrs=Array.from(mapDayWithWage.values()).reduce(findTotal,0);
let totalSalary=dailWage.filter(dailwage => dailwage>0).reduce(findTotal,0);
console.log("Emp Wage wit Arrow "+"Total hrs: "+totalHrs+"Total Salary: "+totalSalary);


let nonWorkingDays=[];
let partWorkingDays=[];
let fullWorkingDays=[];

empHrsArr.forEach((value,key,map) => {
    if(value == 8) fullWorkingDays.push(key);
    else if(value == 4)partWorkingDays.push(key);
    else nonWorkingDays.push(key);
});

console.log("Full working Days are: "+fullWorkingDays);
console.log("Part working Days are: "+partWorkingDays);
console.log("Non working Days are: "+nonWorkingDays);
