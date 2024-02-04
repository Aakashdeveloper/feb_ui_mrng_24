
function validateFname(){
    let name = document.getElementById('fname').value;
    let fdiv = document.getElementById('fdiv');
    if(name.trim().length == 0){
        fdiv.innerText = 'Please Enter FirstName'
    }else{
        fdiv.innerText = ''
    }
}


const validateEmail = () => {
    let email = document.getElementById('mail').value;
    let ediv = document.getElementById('ediv');
    if(email.trim().length == 0){
        ediv.innerText = 'Please Enter Email'
    }else{
        if(email.match("^([a-zA-Z0-9+])@gmail\.([a-zA-Z]{2,5})$") == null){
            ediv.innerText = 'Please Enter Valid Email'
        }else{
            ediv.innerText = ''
        }
    }
}


const validatePass = () => {
    let pwd = document.getElementById('pass').value;
    let pdiv = document.getElementById('pdiv');
    if(pwd.length < 8){
        pdiv.innerText = 'Min Length is 8'
    }else{
        pdiv.innerText = ''
    }
}