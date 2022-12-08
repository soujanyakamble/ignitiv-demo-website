function clearErrors(){
    errors=document.getElementsByClassName("formerror")

   for(let item of errors)
    {
        item.innerHTML="";
    }
}
function seterror(id,error){
   element=document.getElementById(id)
;
   element.getElementsByClassName('formerror')[0].innerHTML=error;

}
function validateForm(){
    
 var returnval=true;
 clearErrors();

 var name=document.forms['myForm']["fname"].value;
 if(name.length<=2){
   seterror("name","name must contain 2 letters or more");
   returnval=false;
 }
 if(name.length==0){
   seterror("name","length of name cannot be zero");
   returnval=false;
 }
 var email=document.forms['myForm']["femail"].value;
 if(email.length>15){
   seterror("email","length of email to long");
   returnval=false;
 }
 var phone=document.forms['myForm']["fphone"].value;
 if(phone.length!=10){
   seterror("phone","phone number should be 10 digit");
   returnval=false;
 }
  var password=document.forms['myForm']["fpass"].value;
  if(password.length<6){
    seterror("pass","password should be atleast 6 charactor long");
    returnval=false;
  }
  var cpassword=document.forms['myForm']["fcpass"].value;
  if(cpassword != password){
    seterror("cpass","password and confirm password should be match");
    returnval=false;
  }
 return returnval;
}