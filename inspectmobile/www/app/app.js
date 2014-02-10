var app = {
    initialize: function() {
        this.bindEvents();
    },

    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        alert("hello");
    }
};

$(document).ready(function(){
    app.initialize();

//    $("#sendData").click(function(event){
//        event.preventDefault();
//        TwitterEndpoint.send("45", new Date(), function(result){
//            alert(result.message);
//        });
//    });
});

