const ticketPrice=800;
const age =25;
const isStudent=false;

if(age<10){
    console.log('Free');
}
else{
    if(isStudent){
        console.log(ticketPrice*50/100);
    }
    else{
        if(age>=60){
            console.log(ticketPrice*15/100);
        }
        else{
            console.log(ticketPrice);
        }
    }
}