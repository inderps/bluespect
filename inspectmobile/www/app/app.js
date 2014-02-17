/* global cordova, bluetoothSerial, listButton, connectButton, sendButton, disconnectButton */
var app = {
    initialize: function() {
        this.bindEvents();
    },

    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {

//        BluetoothBindings.init();
    }
};

$(document).ready(function(){
    app.initialize();
    $("#send").click(function(ev){
        event.preventDefault();
        bluetoothle.init(function(){
            bluetoothle.startScan(function(s){
                alert(s.status);
            }, function(e){alert(e)});
        }, function(e){alert(e)});
    });

    $("#sendData").click(function(event){
        event.preventDefault();
        bluetoothle.init(function(){
            bluetoothle.startScan(function(s){
                alert(s.status);
            }, function(e){alert(e)});
        }, function(e){alert(e)});
    });
});

