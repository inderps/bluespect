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
            if(s.status == "scanResult"){
            alert(s.name);
              window.address = s.address;
             }
            }, function(e){alert(e)});
        }, function(e){alert(e)});
    });

    $("#bluetooth-refresh").click(function(event){
        event.preventDefault();
        bluetoothle.connect(function(s){
        alert(s.status);
        bluetoothle.discover(function(s){
//        var tbl = prettyPrint(s);
            bluetoothle.read(function(d){
                alert(bluetoothle.getBytes(d));

            }, function(e){alert(e);}, {
                serviceUuid: "f000aa20-0451-4000-b000-000000000000",
                characteristicUuid: "f000aa21-0451-4000-b000-000000000000"
            });
        }, function(e){alert(e);});
        }, function(e){alert(e);}, {address: window.address})
    });
});

