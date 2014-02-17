var BaseEndpoint = {
    send: function(endpoint, reading, createdAt, callback){
        $.ajax({
            url: "http://localhost:3000/" + endpoint,
            type: "POST",
            data: {
                reading: reading,
                created_at: createdAt
            },
            dataType: "json",
            success: function(result){
                callback(result);
            }
        })
    }
}