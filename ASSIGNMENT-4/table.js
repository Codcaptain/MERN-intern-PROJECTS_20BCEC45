const table=document.getElementsByTagName('table')[0];
// table.tHead.rows[0].cells[3].style.backgroundColor='red'
// table.tHead.rows[0].cells[1].style.backgroundColor='red'


 table.tBodies[0].rows[0].style.backgroundColor='blue'
 table.tBodies[0].rows[1].style.backgroundColor='aqua'
 table.tBodies[0].rows[2].style.backgroundColor='yellow'
 table.tBodies[0].rows[3].style.backgroundColor='pink'
 table.tBodies[0].rows[4].style.backgroundColor='green'
 table.tBodies[0].rows[0].style.backgroundColor='blue'
 table.tBodies[0].rows[1].style.backgroundColor='aqua'
 table.tBodies[0].rows[2].style.backgroundColor='yellow'
 table.tBodies[0].rows[3].style.backgroundColor='pink'
 table.tBodies[0].rows[4].style.backgroundColor='green'
// console.log(table.tBodies[0].rows[0].cells[0].innerText);
// console.log(table.tBodies[0].rows[0].cells[2].innerText);
// console.log(table.tBodies[0].rows[0].cells[4].innerText);
// console.log(table.tBodies[0].rows[1].cells[1].innerText);
// console.log(table.tBodies[0].rows[1].cells[3].innerText);
// console.log(table.tBodies[0].rows[2].cells[0].innerText);
// console.log(table.tBodies[0].rows[2].cells[2].innerText);
// console.log(table.tBodies[0].rows[2].cells[4].innerText);
// console.log(table.tBodies[0].rows[3].cells[1].innerText);
// console.log(table.tBodies[0].rows[3].cells[3].innerText);
// console.log(table.tBodies[0].rows[4].cells[0].innerText);
// console.log(table.tBodies[0].rows[4].cells[2].innerText);
// console.log(table.tBodies[0].rows[4].cells[4].innerText);
for(let i=0;i<5;i++)
{
    for(let j=0;j<5;j++)
    {
        var k=i+j;
        if(k%2==0)
        {
            console.log(table.tBodies[0].rows[i].cells[j].innerText);
        }
    }
}
