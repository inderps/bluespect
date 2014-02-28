/* global cordova, bluetoothSerial, listButton, connectButton, sendButton, disconnectButton */
var app = {
    initialize: function() {
        this.bindEvents();
    },

    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        BluetoothLE.list();
    }
};

$(document).ready(function(){
    app.initialize();

    $( "#bluetooth-device-list" ).on( "click", "li", function(ev) {
        ev.preventDefault();
        var device = $(ev.target);
        BluetoothLE.connect(device.attr("data-value"), device.html());
    });


    $("#get-reading").click(function(ev){
        event.preventDefault();
        BluetoothLE.getReading();
    });

    $("#bluetooth-refresh").click(function(event){
        event.preventDefault();
        BluetoothLE.list();
    });
});

