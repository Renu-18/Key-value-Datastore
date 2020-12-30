document.getElementById("addform").addEventListener("submit", (event) => {
    event.preventDefault();
    let keyy = document.getElementById("keyy").value;
    let valuee = document.getElementById("valuee").value;
    let response = document.getElementById("addResponse");
    response.innerText = "Processing...";

    $.ajax({
        url: "http://localhost:3000/add",
        type: "post",
        data: {keyy: keyy, valuee: valuee},
        dataType: "json",
    }).done((res) => {
        if(res.status == 200) {
            response.innerText = "Added Successfully !";
        }
         else {
            response.innerText = "Oops! Problem Occured, Please Try Again Later";

            }
        });

});


