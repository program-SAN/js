//coding exercise1
const markm=78;
const markh=1.69;
const johnm=92;
const johnh=1.95;

const BMImark = markm/markh**2;
const BMIjohn = johnm/johnh**2;

console.log(BMIjohn,BMImark);
// const highBMImark = BMIjohn < BMImark;
// console.log(highBMImark);

//coding exercise2
if(BMImark>BMIjohn){
    console.log(`marks BMI is HIGHER thats is ${BMImark}`);
}else{
    console.log(`johns BMI is HIGHER thats is ${BMIjohn}`);
}


//coding exercise3
//test
var dolphin =(96+108+89)/3;
console.log(dolphin);
var koala =(88+91+110)/3;
console.log(koala);

if(dolphin>koala){
    console.log(`dolphin ${dolphin} is greater than koala`);
}else if(dolphin<koala){
    console.log(`koala ${koala} is greater than dolphin`);
}else{
    console.log(`its a draw`);
};

//testbonus1
var dolphin =(97+112+101)/3;
console.log(dolphin);
var koala =(109+95+123)/3;
console.log(koala);

if(dolphin>koala && dolphin>=100){
    console.log(`dolphin ${dolphin} is greater than koala`);
    console.log(`dolphin is the winner`);
}else if(dolphin<koala && koala>=100){
    console.log(`koala ${koala} is greater than dolphin`);
    console.log(`koala is the winner`);
}else{
    console.log(`its a draw`);
};


//testbonus2
var dolphin =(97+112+101)/3;
console.log(dolphin);
var koala =(109+95+106)/3;
console.log(koala);

if(dolphin>koala && dolphin>=100){
    console.log(`dolphin ${dolphin} is greater than koala`);
    console.log(`dolphin is the winner✨`);
}else if(dolphin<koala && koala>=100){
    console.log(`koala ${koala} is greater than dolphin`);
    console.log(`koala is the winner✨`);
}else{
        if (dolphin==koala && dolphin>=100 && koala>=100) {
            console.log(`both are the winner ✨`)    
        }else{
            console.log(`no winner`)
        }
};
