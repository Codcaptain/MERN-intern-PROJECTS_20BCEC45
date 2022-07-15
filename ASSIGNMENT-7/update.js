//read from the file
//filter the data u want to except the one that want to update
//enter the data that you want to update
// add the data to existing array what we have extracted
//we need to write it back to the file
const prompt= require('prompt-sync')();
const fs=require('fs');

function item(id,name,quantity,price){
    this.id=id;
    this.name=name;
    this.quantity=quantity;
    this.price=price;
}
exports.updateitem=(id)=>{
    let itemarr=JSON.parse(fs.readFileSync('user.json'));
    console.log(`original item array ${JSON.stringify(itemarr)}`);
    itemarr =itemarr.filter(user=>user.id!=id)
    console.log(`The item array without the item i want to update ${JSON.stringify(itemarr)}`);
    console.log(`Getting the new values for that particular user we want to update with the id-${id}`)
    const name=prompt(`Enter item no. name=`);
    const quantity=prompt(`Enter the quantity of this item=`);
    const price=prompt(`Enter the price of the item=`);
    let sum=0;
    for(let i=0;i<itemarr.length;i++){
        sum=sum+quantity*(itemarr[i].price);
    }
    console.log(`The total price of the item ${sum}`);


    const itemobj=new item(id,name,quantity,price);
    console.log(`adding updated item object to the existing item array`)
    itemarr=[...itemarr,itemobj];
    console.log(`after addition of the updated object the current item array looks like ${JSON.stringify(itemarr)}`);
    fs.writeFile('user.json',JSON.stringify(itemarr),(err)=>{
        if(err)
        console.log(`something went wrong`);
        else
        console.log(`item with ${id} update successfully`)
    })

}