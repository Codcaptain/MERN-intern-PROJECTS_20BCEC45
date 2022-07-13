
let numofelements = Number(prompt("how many elements you want?"))
var arr = [];
for(var i=0;i<numofelements;i++){
    var num=Number(prompt(`Enter ${i} element`));
    arr.push(num);
}

console.log(arr);

function negativeAvg(num, numofelements)
{
  var sum = 0;
  var avg=0;
  
  
  if(num<0){
      sum = sum + num;
      avg=sum/numofelements;
  }
  console.log(avg);
}

// Driver Code



negativeAvg(num, numofelements);

// This code is contributed by rdtank

