let numofelements = Number(prompt("how many elements you want?"))
var arr =[];
var sum = 0;
let N=3;

for(var i=0;i<numofelements;i++){
    var num=Number(prompt(`Enter ${i} element`));
    arr.push(num);
    if ( num>0 && num%2==0 &&  num%N == 0) 
         {
           sum = sum + num;
         }
       }
       console.log(arr);
       console.log(sum);
