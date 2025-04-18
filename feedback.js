window.onload=function(){

    let user;
    let email;
    let sub;
    let desc;



    let u=document.getElementById("u");
    let e=document.getElementById("e");
    let s=document.getElementById("s");
    let m=document.getElementById("m");


    document.getElementById("btn").addEventListener("click",function(){

        user=u.value;
        email=e.value;
        sub=s.value;
        desc=m.value;

        if(user==""||email==""||sub==""||desc=="")
         {
            alert("Please Fill the all fields.");
         }

         else
         {
            console.log("Username: ",user);
            console.log("Email: ",email);
            console.log("Subject: ",sub);
            console.log("Message/Description: ",desc);
            console.log("\n");
         }

    })



}