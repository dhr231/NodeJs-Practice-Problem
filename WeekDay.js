function WeekDay(dayNum){
    switch(dayNum){
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
        default:
            console.log("Please Enter number between 1-7");
            break;
    }
}

const readline=require('readline-sync');
const input=readline.question();
WeekDay(Number(input));

