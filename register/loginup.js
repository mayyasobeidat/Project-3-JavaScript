let errors = document.getElementById('errors')
var exist=document.getElementById('signup');
let aa = document.getElementById('signup')


function repasss() {
    let password = sessionStorage.getItem('password')
    let repassword = sessionStorage.getItem('repassword')
    let email = sessionStorage.getItem('email')
    let username = sessionStorage.getItem('username')
    let pass = false
    let exists = false
    let em=false;


    let userObject ={
        email:sessionStorage.getItem('email'),
        username:sessionStorage.getItem('username'),
        password:sessionStorage.getItem('password',),
        result:0,
        answers:[]
     }

     if (password.length >= 6 && password == repassword){
       pass = true    
    }
     
    if (password != repassword) {
          errors.innerHTML = `<p>passwords dont match</p>`
    }

    if (password.length < 6) {
        errors.innerHTML = `<p>password is too short</p>`
        
    }



    for (let i = 1; i <= localStorage.length; i++) {
        if( JSON.parse(localStorage.getItem(i)).email == email){
            errors.innerHTML = `<p>Email / Username Already Exists</p>`
         exists = true
        }
        if(JSON.parse(localStorage.getItem(i)).username == username){
            errors.innerHTML = `<p>Email / Username Already Exists</p>`
            exists = true
        }
     }

     if(email.match(/[\w-\.]+[.|_|-]?[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)==null){
        errors.innerHTML = `<p>Email Invalid</p>`
        em=true;
        
    }

    if(exists==true){
        alert("email already exist");
       
    }

     if (exists == false && pass == true && em==false) {
        localStorage.setItem(`${localStorage.length + 1}` , JSON.stringify(userObject)) 
        aa.setAttribute("href" , "../login/login.html")
        sessionStorage.clear()
     }

     


}



function registerPass(t){
if(t.id == 'password'){
sessionStorage.setItem('password' , t.value)
}
if(t.id == 'repeat-password'){
    sessionStorage.setItem('repassword' , t.value)
}
if (t.id =='email') {
    sessionStorage.setItem('email',t.value)
}
if (t.id =='username') {
    sessionStorage.setItem('username',t.value)
}

}

