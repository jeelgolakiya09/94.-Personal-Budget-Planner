window.onload=function(){

        let fn;
        let ln;
        let gen;
        let date;
        let email;
        let city;
        let state;

        let f=document.getElementById("f");
        let l=document.getElementById("l");

        let d=document.getElementById("d");
        let e=document.getElementById("e");
        let gn=document.getElementsByName("gender");
        let c=document.getElementById("city");
        let s=document.getElementById("state");
       


        document.getElementById("sub").addEventListener("click",function(){

            fn=f.value;
            ln=l.value;
            date=d.value;
            email=e.value;
            city=c.value;
            state=s.value;
            for(let i=0; i<gn.length; i++)
                {
                    if(gn[i].checked)
                    {
                        gen=gn[i].value;
                    }
                }

            if(fn==""||ln==""||date==""||email==""||city==""||state==""||gen=="")
            {
                alert("Please Fill all fields before submit")
            }
            else{
            console.log("First name :",fn);
            console.log("Last name :",ln);
            console.log("Gender :",gen);
            console.log("Date :",date);
            console.log("Email :",email);
            console.log("City :",city);
            console.log("State :",state);
            console.log("\n");
            }


        })














}