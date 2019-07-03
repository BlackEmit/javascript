////////////  1  ////////////

function valid (a, b){
    if(a < b){
        return 1;
    }else if(b > a){
        return 2;
    }
    return 0;
}

/////////////////////////////

////////////  2  ////////////

function fak(a){
    let fakt = 1;
    for (let b =1; b <= a; b++){
        fact = fact * b;
    }

    return fact;
}

/////////////////////////////

////////////  3  ////////////

function integr(a=3,b=4,c=5){
    let cislo;
    cislo = a * 100;
    cislo += b * 10;
    cislo += c;

    return cislo;
}

/////////////////////////////

////////////  4  ////////////

function cvadr(a, b = a){
    return a * b;
}

/////////////////////////////

////////////  5  ////////////

function PerfactNum( num ){
    perfect = 0;

    for (let i = 1; i < num; i++){

    }
}

/////////////////////////////

////////////  6  ////////////



/////////////////////////////

////////////  7  ////////////

function time(h = 2, m= '00', s='00'){ 
    alert (`${h}:${m}:${s}`);
}

time();

/////////////////////////////

////////////  8  ////////////
function timeToSec(h = 2, m= 20, s=40){
    s += m * 60;
    s += h * 3600;

    return s;
}

/////////////////////////////

////////////  9  ////////////

function timeGo(s){
    let h = 0;
    let m = 0;

    h = parseInt(s / 3600);
    m = parseInt((s - h * 3600) / 60);
    s = s - (h * 3600) - (m * 60); 

    alert (`${h}:${m}:${s}`);
}

timeGo(8440);

/////////////////////////////

////////////  10  ////////////

function Subtraction(h1=3,m1=30,s1=40,h2=2,m2=20,s2=20){
    let a1 = timeToSec(h1,m1,s1);
    let a2 = timeToSec(h2,m2,s2);

    let a3 = a1 - a2;

    alert(timeGo(a3));
}

Subtraction();

/////////////////////////////

////////////  dop 1  ////////////

function cube(a){
    return a ** 3;
}

alert(cube(4));

/////////////////////////////

////////////  dop 2  ////////////
function cvadra(a){
    return a * a;
}

/////////////////////////////

////////////  dop 3  ////////////

function plus(a){
    return a + b;
}

/////////////////////////////

////////////  dop 4  ////////////