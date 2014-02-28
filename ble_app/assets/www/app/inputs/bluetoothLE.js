var BluetoothLE = {
    list: function(){
        var deviceList = $("#bluetooth-device-list");
        deviceList.html("");
        $(".status-message").html("Searching for devices....");
        bluetoothle.init(function(){
            bluetoothle.startScan(function(s){
                $(".status-message").html("");
                if(s.status == "scanResult"){
                    deviceList.append("<li class='list-group-item' data-value='" + s.address +"'> "+ s.name +" </li>");
                }
            }, function(e){alert(e)});
        }, function(e){alert(e)});
    },

    connect: function(deviceAddress, deviceName) {
        $("#connected_device").html(deviceName);
        $(".status-message").html("Connecting....");
        bluetoothle.connect(function(s){
            if(s.status == "connected"){
                $(".status-message").html("");
                $("#devices_list_panel").hide();
                $("#connected_device_panel").show();
            }
        }, function(e){alert(e);}, {address: deviceAddress});
    },

    getReading: function(){
        bluetoothle.discover(function(s){
            bluetoothle.write(function(s){
                bluetoothle.read(function(s){
                    $("#reading-data").html("X: " + s.x + ", Y: " + s.y + ", Z: " + s.z);
                    $("#taken-at-data").html(new Date());
                    $("#reading-modal").modal("show");
                    alert(s.x);
                }, function(e){alert(e);}, {
                serviceUuid: "f000aa50-0451-4000-b000-000000000000", characteristicUuid: "f000aa51-0451-4000-b000-000000000000"});
            }, function(e){alert(e);}, {
                serviceUuid: "f000aa50-0451-4000-b000-000000000000", characteristicUuid: "f000aa52-0451-4000-b000-000000000000"});
        }, function(e){alert(e)});
    },

    disconnect: function(){
        bluetoothle.disconnect(function(s){
            $("#devices_list_panel").show();
            $("#connected_device_panel").hide();
        }, function(e){alert(e)});
    }
}