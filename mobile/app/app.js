$(document).ready(function(){
    $("#sendData").click(function(event){
        event.preventDefault();
        TwitterEndpoint.send("45", new Date(), function(result){
            alert(result.message);
        });
    });
});