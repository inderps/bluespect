var RefreshButtonBinding = {
    init: function(){
        $("#bluetooth-refresh").click(function(ev){
            ev.preventDefault();
            BluetoothReader.list();
        });
    }
}