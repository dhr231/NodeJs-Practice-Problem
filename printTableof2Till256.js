function printTable(n){
    n=0;
    while(2^n<=256){
        console.log(2^n);
        n+=1;
    }
}
const readline=require('readline-sync');
const input=readline.question();
printTable(Number(input));