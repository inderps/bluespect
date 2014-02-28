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
        $("#connected-device-name").val(deviceName);
        $("#connected-device-address").val(deviceAddress);
        $(".status-message").html("Connecting....");
        bluetoothle.connect(function(s){
            if(s.status == "connected"){
                $(".status-message").html("Currently connected to " + deviceName);
//                         bluetoothle.discover(function(s){
//                            var characteristicsList = $("#characteristics-list");
//                            for(var i=0; i<s.services.length; i++){
//                                $("#services").append("<ul class='list-group' data-service-id='" + s.services[i].uuid +"'></ul>");
//                                for(var j=0; j<s.services[i].characteristics.length; j++){
//                                    $("#services ul").last().append("<li class='characteristic-item list-group-item' data-char-id='" + s.services[i].characteristics[j].uuid +"'> "+ s.services[i].characteristics[j].uuid +" </li>")
//                                }
//                            }
//                         }, function(e){alert(e);});
            }
        }, function(e){alert(e);}, {address: deviceAddress});
    },

    getReading: function(){
        bluetoothle.discover(function(s){
            bluetoothle.write(function(s){
                bluetoothle.read(function(s){
                    alert(s.x);
                }, function(e){alert(e);}, {
                serviceUuid: "f000aa50-0451-4000-b000-000000000000", characteristicUuid: "f000aa51-0451-4000-b000-000000000000"});
            }, function(e){alert(e);}, {
                serviceUuid: "f000aa50-0451-4000-b000-000000000000", characteristicUuid: "f000aa52-0451-4000-b000-000000000000"});
        }, function(e){alert(e)});
}
}