const score=99.5;

if(score>=90 && score<=100){
console.log('Golden A+');
}
else{
    if(score>=80 && score<=89){
        console.log('A+');
    }
    else{
        if(score>=70 && score<=79){
            console.log('B Grade');
        }
        else{
            if(score>=60 && score<=69){
                console.log('C Grade');
            }
            else{
                if(score>=50 && score<=59){
                    console.log('D Grade');
                }
                else{
                    if(score>=0 && score<=49){
                        console.log('F')
                    }
                    else{
                        console.log('Invalid score')
                    }
                }
            }
        }
    }
}
