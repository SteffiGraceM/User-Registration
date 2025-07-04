
const form=document.querySelector('#form');
const username=document.querySelector('#username');
const email=document.querySelector('#email');
const password=document.querySelector('#password');
const cpassword=document.querySelector('#cpassword');


form.addEventListener('submit' , (e)=>
    {
        if(!validateInputs()){
            e.preventDefault();
        }   
})

function validateInputs()
{
   const usernameVal=username.value.trim();
   const emailVal=email.value.trim();
   const passwordVal=password.value.trim();
   const cpasswordVal=cpassword.value.trim();
   let success=true

   if(usernameVal==='')
   {
    success=false;
    setError(username,'username is required')
   }
   else 
   {
    setSuccess(username)
   }
   if(emailVal==='')
   {
    success=false;
    setError(email,'email is required')
   }
   else if(!validateEmail(emailVal))
   {
      success=false;
      setError(email,'Enter a valid Email')
   }
   else
   {
      setSuccess(email)
   }
   if(passwordVal==='')
    {
       success=false;
       setError(password,'password is required')
    }
    else if(passwordVal.length<8)
    {
        success=false;
        setError(password,'password must be atleast 8 characters')
    }  
    else{
        setSuccess(password)
    }
    if(cpasswordVal==='')
    {
        success=false;
        setError(cpassword,'confirm paassword is required')
    }
    else if(cpasswordVal!==passwordVal)
    {
        success=false;
        setError(cpassword,'password does not match')
    }
    else{
        setSuccess(cpassword)
    }
    return success;
     
}

function setError(element,message)
{
    const inputGroup=element.parentElement;
    const errorElement=inputGroup.querySelector('.error')

    errorElement.innerText=message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}

function setSuccess(element)
{
    const inputGroup=element.parentElement;
    const errorElement=inputGroup.querySelector('.error')

    errorElement.innerText='';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
}

const validateEmail=(email)=>
{
     return String(email)
     .toLowerCase()
     .match(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    );
};