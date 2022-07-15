// create a list user 
//update an user and also add new user to the list of user
//list an user
//delete an user
const {additem}= require('./create');
const{updateitem}=require('./update');
const{deleteitem}=require('./delete');
const prompt=require('prompt-sync')();

const operation=prompt(`Enter which operation you want to perform?`);
switch(operation){
    case 'add' :
        additem();
        break;
    case 'update':
        var id= prompt(`Enter the item id that you want to update ? `);
        updateitem(id);
        break;
    case 'delete' :
        var id= prompt(`Enter the item id that you want to delete ? `);
        deleteitem(id);
        break;
    default:
        console.log(`No operation is going to be performed`)
        break;


} 