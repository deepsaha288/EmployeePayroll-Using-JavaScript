const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HOURS=4;
const FULL_TIME_HOURS=8;
const WAGE_PER_HOUR=20;
function getWorkingHours(empCheck){
    switch(empCheck){
        case IS_PART_TIME:
            empCheck=PART_TIME_HOURS;
            break;
        case IS_FULL_TIME:
            empCheck=FULL_TIME_HOURS;
            break;
        default:
            empHrs=4;
    } 
}
let empHrs=4;
empCheck =Math.floor(Math.random()*10)%3;
empHrs=getWorkingHours(empCheck);
let empWage=empHrs*WAGE_PER_HOUR;
console.log("Employee Wage:"+empWage);
