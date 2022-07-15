const prompt= require('prompt-sync')();
const fs=require('fs');

function item(id,name,quantity,price){
    this.id=id;
    this.name=name;
    this.quantity=quantity;
    this.price=price;
}
exports.deleteitem=(id)=>{
    let itemarr=JSON.parse(fs.readFileSync('user.json'));
    console.log(`original item array ${JSON.stringify(itemarr)}`);
    itemarr =itemarr.filter(user=>user.id!=id)
    console.log(`The item array without the item i want to delete ${JSON.stringify(itemarr)}`);
    console.log(`Getting the items by deleting the id-${id}`)
    //const name=prompt(`Enter item no. name=`);
    const quantity=prompt(`Enter the quantity of this item=`);
    //const price=prompt(`Enter the price of the item=`);
    let sum=0;
    for(let i=0;i<itemarr.length;i++){
        sum=sum+quantity*(itemarr[i].price);
    }
    console.log(`The total price of the item ${sum}`);
    
    console.log(`After DELETION of the object the current item array looks like ${JSON.stringify(itemarr)}`);
    fs.writeFile('user.json',JSON.stringify(itemarr),(err)=>{
        if(err)
        console.log(`something went wrong`);
        else
        console.log(`Item with ${id} delete successfully`)
    })

}