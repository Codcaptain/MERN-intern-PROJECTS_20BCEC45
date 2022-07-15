const prompt= require('prompt-sync')();
const fs=require('fs');

function item(id,name,quantity,price){
    this.id=id;
    this.name=name;
    this.quantity=quantity;
    this.price=price;
}
exports.additem=()=>{
    const howmanyitems=prompt(`How many items?`);
    let itemarr=[];
    for(let i=0;i<howmanyitems;i++){
        let sum=0;
        const id=Number(prompt(`Enter item no.${i+1} id=`))
        const name=prompt(`Enter item no.${i+1} name=`);
        const quantity=Number(prompt(`Enter the quantity of this item${i+1}=`));
        const price=Number(prompt(`Enter the price of the item${i+1}=`));
        const ite=new item(id,name,quantity,price);
        itemarr=[...itemarr,ite];
        for(let i=0;i<itemarr.length;i++){
            sum=sum+quantity*(itemarr[i].price);
        }
        console.log(`The total price of the item ${sum}`);
    }
    fs.writeFile("user.json",JSON.stringify(itemarr),(err)=>{
        if(err)
        console.log(`something went wrong`)
        else
        console.log(`item(s) saved successfully`);
    })
}