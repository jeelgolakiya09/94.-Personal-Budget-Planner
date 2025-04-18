window.onload=function(){

        let username;
        let password;
        
        let user=document.getElementById("user");
        let pass=document.getElementById("pass");

        document.getElementById("btn").addEventListener("click",function(){
                username=user.value;
                password=pass.value;


                if(username==""|| password==""){
                        alert("Please Fill all fields before submit");
                }
                console.log("Username:",username);
                console.log("Password :",password);
                user.value="";
                pass.value="";

                

        })












}