function digitToWord(digit){
    if(digit==0){
        console.log('ZERO');
    }
    else if(digit==1){
        console.log('ONE');
    }
    else if(digit==2){
        console.log('TWO');
    }
    else if(digit==3){
        console.log('THREE');
    }
    else if(digit==4){
        console.log('FOUR');
    }
    else if(digit==5){
        console.log('FIVE');
    }
    else if(digit==6){
        console.log('SIX');
    }
    else if(digit==7){
        console.log('SEVEN');
    }
    else if(digit==8){
        console.log('EIGHT');
    }
    else if(digit==9){
        console.log('NINE');
    }
    else{
        console.log('ENTER VALID DIGIT')
    }
}

const readline=require('readline-sync');
const input=readline.question('ENTER DIGIT FROM 0-9 :');
digitToWord(Number(input));
