let day = prompt('enter day from 1 to 31');
if (day >=1 && day < 11) {
    console.log('1 decade');
} else if (day >=11 && day < 21){
    console.log('2 decade');
} else if (day >=21 && day <= 31){
    console.log('3 decade');
} else {console.log('error')}