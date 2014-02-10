$(document).ready(function(){
    $("#sendData").click(function(event){
        event.preventDefault();
        $.ajax({
            url: "http://localhost:3000/data",
            type: "POST",
            data: {
                reading: "45",
                end_point: "salesforce"
            },
            dataType: "json",
            success: function(result){
                alert(result.message);
            }
        })
    });
});