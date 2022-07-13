"use strict";
const ps=require("prompt-sync");
const prompt=ps();

let customer = [];
let count=Number(prompt(`Enter the no. of customer`));
for(let i = 0; i < count; i++){
    let name=prompt(`Enter the customer name=`);
    let email=prompt(`Enter the email=`);
    let phone=prompt(`Enter the phone no.=`);
    let no_of_times_shopped=prompt(`Enter the no. of times the customer shop =`);
    let purchase_history=[];
    for(let j=0; j<no_of_times_shopped; j++){
        let date_of_purchase=prompt("enter the date");
        let no_item = prompt("enter the no. of items purchased on this date");
        let item_purchased=[];
        for(let k=0;k<no_item;k++)
        {
            let product_name=prompt(`enter the product name`);
            let price=prompt(`enter the price of the product`);
            item_purchased.push(itemshopped(product_name,price));
        }
        purchase_history.push(purchasehis(date_of_purchase,no_item,itemshopped));    
        }
    customer.push(customerlist(name,email,phone,no_of_times_shopped,purchasehis));
}
console.log(customer);
function customerlist(cname,cemail,cphone,no_ofcshop,cpurchase)
{
    return{
        name:cname,
        email:cemail,
        phone:cphone,
        no_of_times_shopped:no_ofcshop,
        purchasehis:cpurchase
    }
}
function purchasehis(dop,noi,info)
{
    return{
        date_of_purchase:dop,
        no_item:noi,
        itemshopped:info
    }
}
function itemshopped(pn,p){
    return{
        product_name:pn,
        price:p
    }
}
console.log(customer);
console.log("***********CUSTOMER ORDERS ***********");
console.log("NAMES of the customer who shopped more than 5 times ==")
for(let i=0;i<count;i++)
{
    if(customer[i].no_of_times_shopped>5)
    {
        console.log(customer[i].name);
    }
}

console.log("customers names anf their total bill ");
for(let i=0;i<count;i++)
{
    let sum=0;
   for(let j=0;j<customer[i].no_of_times_shopped;j++)
    {
        for(let k=0;k<customer[i].no_item;k++)
        {
            sum=sum+customer[i].purchasehis[j].itemshopped[k].price;
        }
        
    }
    console.log("NAME="+customer[i].name+"\n"+`Total purchase price=${sum}`);
}
