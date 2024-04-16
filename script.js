console.log("Hello World");

let arr=[1,2,3,4,5];
//forEach
arr.forEach(function(val){ //normalfunction
  console.log(val);
});



arr.forEach((element) => { //forEach using arrow function
  console.log(element);
});

//-----------------------------------------------------------
//map->it will create an new array with same size of past array
console.log("map");
let newarr=arr.map(function(val){
  return val*2;
})

console.log(newarr);


let newarr2=arr.map((num)=>{
    return num*3;
})
console.log(newarr2);

//-------------------------------------------------------
//filter->it creates new array based on the condition
let ans=arr.filter(function(val){
  if(val >=2){ return true }
  else return false;
})
console.log("filter");
console.log(ans);

let ans1=arr.filter((val)=>{
  if(val >3){return true}
  else return false;
})
console.log(ans1);

//--------------------------------------------------------
//find in array
console.log("find");
let find=arr.find(function(val){
  if(val === 2){return val}
})
//if array contains two 2's then it return first 2

console.log(find);

//--------------------------------------------------------
//index of it will return the index of element
console.log("indexOf")
console.log(arr.indexOf(12))//it return -1 if it is not present
console.log(arr.indexOf(2)) //it return 1 if it is present
//if it contain duplicate it return first element index

//---------------------------------------------------------
//object->key :value pairs, kuchbi:kuchbi
//{}->blank object
console.log("Objects  ");
let myName={
  name:"manish",
  age:21
}
console.log(myName);
console.log(myName.name);
console.log(myName['name']);
console.log(myName.age);
myName.age=23;
console.log(myName.age);
console.log(myName);

Object.freeze(myName);
console.log("After Freezing");//obj values cannot be change
myName.age=25;
console.log(myName.age);
console.log(myName);

//function is also an object
console.log(typeof(function(){}));

function hello(a,b,c,d){
  //no of parameters in function is length of function
}
console.log(hello.length);
console.dir(hello)