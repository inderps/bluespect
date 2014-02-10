var BluetoothReader = {
    list: function(){
        $(".status-message").html("Searching for devices....");
        bluetoothSerial.list(BluetoothReader.onDeviceList, function(error){
            alert(error);
        });
    },

    onDeviceList: function(devices){
        var deviceList = $("#bluetooth-device-list");
        deviceList.html("");
        devices.forEach(function(device) {
            deviceList.append("<li class='list-group-item'> "+ device.name +" </li>")
        });
        $(".status-message").html("Found " + devices.length + " device" + (devices.length === 1 ? "." : "s."));
    }
}