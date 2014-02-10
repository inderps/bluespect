var BluetoothReader = {
    list: function(){
        $(".status-message").html("Searching for devices....");
        bluetoothSerial.list(BluetoothReader.onDeviceList, function(error){
            alert(error);
        });
    },

    connect: function(deviceId, deviceName) {
        $("#connected-device-name").val(deviceName);
        $(".status-message").html("Connecting....");
        bluetoothSerial.connect(deviceId, BluetoothReader.onDeviceConnect, function(error){
            alert(error);
        });
    },

    onDeviceList: function(devices){
        var deviceList = $("#bluetooth-device-list");
        deviceList.html("");
        devices.forEach(function(device) {
            var value = null;
            if (device.hasOwnProperty("uuid")) {
                value = device.uuid;
            } else if (device.hasOwnProperty("address")) {
                value = device.address;
            } else {
                value = "ERROR " + JSON.stringify(device);
            }
            deviceList.append("<li class='list-group-item' data-value='" + value +"'> "+ device.name +" </li>");
        });
        $(".status-message").html("Found " + devices.length + " device" + (devices.length === 1 ? "." : "s."));
    },

    onDeviceConnect: function(){
        $(".status-message").html("Currently connected to " + $("#connected-device-name").val());
    }
}