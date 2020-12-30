document.getElementById("viewform").addEventListener("submit", (event) => {
    event.preventDefault();
    var keyy=document.getElementById("keys").value;
    let response = document.getElementById("ViewResponse");
    response.innerText = "Processing...";
    $.ajax({
        url:"http://localhost:3000/view",
        type:"post",
        data:{keyy:keyy},
        dataType:"json",

    }).done((res)=>{
        if(res.status == 500) {
            response.innerText ="No Records Found";
    } else if(res.status == 200) {
        response.innerText ="Fetched Successfully ! ";
        console.log(res);
        }
    });
});

