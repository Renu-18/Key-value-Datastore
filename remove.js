document.getElementById("removeform").addEventListener("submit", (event) => {
    event.preventDefault();
    var keyy=document.getElementById("keypair").value;
    let response = document.getElementById("removeResponse");
    response.innerText = "Processing...";
    $.ajax({
        url:"http://localhost:3000/remove",
        type:"post",
        data:{keyy:keyy},
        dataType:"json",

    }).done((res)=>{
        if(res.status == 200) {
            console.log(res);
            response.innerText =" Removed Successfully";

    } else if(res.status == 500){

        response.innerText ="Oops! Problem Occured, Please Try Again Later! ";

        }
    });
});



