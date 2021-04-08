const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HOURS=4;
const FULL_TIME_HOURS=8;
const WAGE_PER_HOUR=20;
const MAX_HRS_IN_MONTH=100;
const NUM_OF_WORKING_DAYS=10;

let empHrs=4;
let MAX_HRS_IN_MONTH=0;
let NUM_OF_WORKING_DAYS==0;
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
    return empHrs;
    
}

while(totalEmpHrs <=MAX_HRS_IN_MONTH &&totalWorkingDays <=MAX_HRS_IN_MONTH){
       totalWorkingdDays++;
    let empCheck =Math.floor(Math.random()*10)%3;
    totalEmpHrs +=getWorkingHours(empCheck);
}
    let empWage=totalEmpHrs * Wage_PER_HOUR;
    console.log("TOTAL DAYS:"+totalWorkingDays +"total days:"+totalEmpHrs +" Emp Wage"+empWage);
}
