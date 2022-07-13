const form=document.getElementsByTagName('form')[0];
form.addEventListener('submit',(event)=>{
    const full_name=document.querySelector("#full_name").value;
    console.log(full_name);
    const emailid=document.querySelector("#emailid").value;
    console.log(emailid);
    const phoneno=document.querySelector("#phoneno").value;
    console.log(phoneno);
    const gender=document.querySelector("#gender").value;
    console.log(gender);
    let shift="";
    const shiftValues=document.getElementsByName('shift');
    for(let i=0;i<shiftValues.length;i++){
        if(shiftValues[i].checked){
            shift=shiftValues[i].value;
        }
    }
    console.log('shift',shift);
    const address=document.querySelector("#address").value;
    console.log(address);
    const pincode=document.querySelector("#pincode").value;
    console.log(pincode);
    const password=document.querySelector("#password").value;
    console.log(password);
    const confirmpassword=document.querySelector("#confirmpassword").value;
    console.log(confirmpassword);
    const check=document.querySelector("#i_agree").checked ? document.querySelector('#i_agree').value:'';
    console.log(check);

    event.preventDefault();
})