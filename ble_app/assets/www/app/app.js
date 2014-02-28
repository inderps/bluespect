/* global cordova, bluetoothSerial, listButton, connectButton, sendButton, disconnectButton */
var app = {
    initialize: function() {
        this.bindEvents();
    },

    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        $("#devices_list_panel").show();
        $("#connected_device_panel").hide();
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


    $("#take-reading-btn").click(function(ev){
        event.preventDefault();
        BluetoothLE.getReading();
    });

    $("#disconnect-btn").click(function(ev){
        event.preventDefault();
        BluetoothLE.disconnect();
    });

    $("#bluetooth-refresh").click(function(event){
        event.preventDefault();
        BluetoothLE.list();
    });

    $("#salesforce-push-btn").click(function(event){
        event.preventDefault();
        $("#reading-modal").modal("hide");
        Loader.start();
        SalesforceEndpoint.send($("#reading-data").text(), $("#taken-at-data").text(), function(res){
            Loader.stop();
            alert("Data sent successfully");
        });
    });

    $("#twitter-push-btn").click(function(event){
        event.preventDefault();
        $("#reading-modal").modal("hide");
        Loader.start();
        TwitterEndpoint.send($("#reading-data").text(), $("#taken-at-data").text(), function(res){
            Loader.stop();
            alert("Data sent successfully");
        });
    });
});

