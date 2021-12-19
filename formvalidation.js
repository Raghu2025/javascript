function validfname(){
    let first_name=document.getElementById('firstname').value
     if(first_name==''){
         displayMsg('FirstName is required','fnamemsg','red')
         return false
           }

    else if(!first_name.match(/^([a-zA-Z])+$/)){
            displayMsg('FirstName must only contain Alphabets','fnamemsg','red')
            return false
        }    


     else if(first_name.length<3){
         displayMsg('FirstName must be greater than 2 Characters','fnamemsg','red')
         return false
          }


     else{
         displayMsg('Valid FirstName','fnamemsg','green')
         return true
          }

    }
function validlname(){
    let  lname = document.getElementById('lastname').value
    if(lname==''){
        displayMsg('LastName is Empty Please Fill it','lnamemsg','red')
        return false
        }
    else if(!lname.match(/^([a-zA-Z]+$)/)){
            displayMsg('LastName must only contain Alphabets','lnamemsg','red')
            return false
        }
    else if(lname.length<=2){
        displayMsg('LastName must be greater then 2 Character','lnamemsg','red')
        return false   
    }
   
    else{
        displayMsg('Valid LastName','lnamemsg','green')
        return true
        
    }
}


function validemail(){
    let email = document.getElementById('email').value
    if(email==''){
        displayMsg('Email is empty','emailmsg','red')
        return false
    }
    else if(!email.match(/^([a-zA-Z0-9])[a-z0-9\.\-\_]+\@+(([a-z])+\.)+([a-z])+$/)){
        displayMsg('Invalid Email Format','emailmsg','red')
        return false

    }
    else{
        displayMsg('Valid Email','emailmsg','green')
        return true
    }
}



function validpassword(){
    let pass = document.getElementById('password').value
    if(pass==''){
        displayMsg('Password is empty','passwordmsg','red')
        return false
    }
    else if(!pass.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@%$&*]).{8,50}$/)){
        displayMsg('Must include at least One Small ,One Capital, One SpecialCharacter and One Number','passwordmsg','red')
        return false
    }
    else{
        displayMsg('Valid password','passwordmsg','green')
        return true
    }


}

function displayMsg(msg,id,color){
       let a = document.getElementById(id)
        a.innerHTML = msg
        a.style.color = color
    }

   

    function validform(){
        if(validfname() && validlname() && validemail() && validpassword()){
            return true
        }
        else{
            return false
        }
     
    }
    let state=true
    function toggle(){
        if(state){
        document.getElementById('password').setAttribute('type','password')
        document.getElementById('ico').setAttribute('class','fas fa-eye-slash')
        state=false
            
        }
        else{
            document.getElementById('password').setAttribute('type','text')
            document.getElementById('ico').setAttribute('class','fas fa-eye')
            state=true    

        }
    }
