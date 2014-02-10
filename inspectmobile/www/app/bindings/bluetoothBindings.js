var BluetoothBindings = {
    init: function(){
        BluetoothBindings.refreshBinding();
        BluetoothBindings.deviceConnectBinding();
    },

    refreshBinding: function(){
        $("#bluetooth-refresh").click(function(ev){
            ev.preventDefault();
            BluetoothReader.list();
        });
    },

    deviceConnectBinding: function(){
        $( "#bluetooth-device-list" ).on( "click", "li", function(ev) {
            BluetoothReader.connect($(ev.target).data("value"), $(ev.target).html());
        });
    }
}