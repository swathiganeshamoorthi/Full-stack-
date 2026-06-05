var a=10;//reinitialize and redeclare
let b=5;//reinitialize
const c=2;

var ab;
ab=19;
console.log(a);
console.log(b);
console.log(c);
console.log(ab);

var num=34;
var str="swathi";
var underfine;
var Null=null;
var boolean=true;

console.log(typeof num);
console.log(typeof str);
console.log(underfine);
console.log(typeof Null);
console.log(typeof boolean);

var bigInt=123n;
var symbol=Symbol('li');

console.log(typeof bigInt);
console.log(typeof symbol);

var arr=[ 10,20,30];
console.log(typeof arr ,arr);
var obj={
    name:"swathi",
    dept:"CT"

}
console.log(typeof obj,obj)


//arthmetic operator(+,-,*,/,%)
var s=10;
var t="swathi";

console.log(s+t);
console.log(s-t);
console.log(s*t);
console.log(s/t);
console.log(s%t);

//logical operator
var x=true;
var y=false;

console.log(x&&y);
console.log(x||y);
console.log(!x);

//RElationl operator

var e=10;
var f=20;

console.log(e<f);
console.log(e>f);
console.log(e<=f);
console.log(e>=f);
console.log(e==f);
console.log(e===f);
console.log(e!=f);
console.log(e!==f);


d=10;
f=20;
d+=f;//30
console.log(d);

d-=f;
console.log(d);

//uninary operator(--,++)

var m=10;
console.log(m++);
console.log(++m);

var n=20;
console.log(n--);
console.log(--n);

if(true){
    console.log("If Conditional Statements");

}
//conditional statements
var a=10;
var h=20;
//if condition
if(true){
    //template literals
    console.log('$(a)+$(h)=$(a+h)')
    }
//if(true){
// a=10;
// console.log(a);
//}

//var a;//Hoisting

var a=10;
let o=20;
if(true){
console.log(a);
let o=30;
console.log(o);
}
console.log(a);
console.log(o);


var a=10;//Global scope
//let u=20;//Block scope
const u=20;//Block scope
if(true){
    console.log(a);
    //let u=30;//Block scope
    const u=20;//Block scope
console.log(u);
    }
console.log(a);


var mark=80;
if(mark>=90){
    console.log("0 Grade");
}
else if(mark>=70){
    console.log("A Grade");
}
else if(mark>=35){
    console.log("pass");
}
else{
    console.log("fail")
}

var a=10;
//condition?true statements:false statements
var result = a%2==0 ?"Even":"Odd";
console.log(result)

mark=90;
var result=(mark>=90)?"o Grade":
(mark>=70)?"A Grade":
(mark>=35)?"B Grade":
"fail";
console.log(result);

var day =2;
switch(day){
    case 1:{
        console.log("sunday");
        break;
    }
    case 2:{
        console.log("monday");
        break;
    }
    case 3:{
        console.log("tueday");
        break;
    }
    case 4:{
        console.log("wednesday");
        break;
    }
    case 5:{
        console.log("thursday");
        break;
    }
    case 6:{
        console.log("friday");
        break;
    }
    case 7:{
        console.log("saturday");
        break;
    }
    default:{
        console.log("invalid inpit");
        break;
    }

}

//looping

for(var i=1;i<=10;i++){
    console.log(i);
} 

var val= 10246;
var count=0;
while(val>0){
    count++;
    val=Math.floor(val/10);
}
console.log(count);
 //}while(false);


 do{
    //this loop runs only once because the condition is false.
    console.log("do..")
 }while(false);

for(let i=1;i<=10;i++){
    if(i%2==0){
        continue;
    }
    console.log(i);
}

//Function

add();//hoisting

function add(){
    console.log(34+76);

}
function add(a=5,b=6){
    console.log(a+b);

   // add();//hoisting

}

add();//hoisting
var demo=() => {
    console.log(10+20);
};

demo();

//ARRAYS
var arr=[10,20,30];
var arr2=[40,50];
console.log(arr);
console.log(arr2);
var arr3=[...arr,...arr2];
console.log(arr3);

//Deconstructing operator
var [m1,m2,m3,m4,m5]=[99,87,98,78,87];
console.log(m1,m2,m3,m4,m5);

var [name,dept,email]=[
    name="swathi",
    dept="CT",
    email="swathiganeshamoorthi@gmail.com"
]
console.log(name,dept,email);



var arr =[10,20,30,40,50];
for(let index in arr){
    console.log(index);
}
//for..of
for(let value of arr){
    console.log(value)
}



var obj=[
   name="swathi",
    dept="CT",
    email="swathiganeshamoorthi@gmail.com"
]
for(let key in obj){
    console.log(key,obj[key]);
}

var arr =[1,2,3,4,5];
var result = arr.map((val)=>(val*2));
console.log(result);

var Even= arr.filter((val)=>val%2==0);
console.log(Even)

var sum = arr.reduce((add,val)=>(add+val),0);
console.log(sum)

