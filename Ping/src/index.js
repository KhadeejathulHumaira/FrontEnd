let inputField=document.querySelector('.inputField');//Input
let button=document.querySelector('.btn');
let alertSign=document.querySelector('.hide');

function isValidate(email){
    let res=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return res.test(email);
}
// ON CLICKING THE BUTTON EMAIL GETS VERIFIED 
button.addEventListener('click',
function validation(){
    let email=document.getElementById('emailId').value; //Input value
    if(isValidate(email)){
       
        inputField.value='';//To clear the input field 
    }
    else{
        alertSign.style.cssText=`
        color:hsl(354, 100%, 66%);
        display: block;
        padding-left: 1.5rem;
        font-weight: 300;
        `
        inputField.style.border='1px solid hsl(354, 100%, 66%)';
    }
})
