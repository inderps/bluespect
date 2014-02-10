var TwitterEndpoint = {
    send: function(reading, createdAt, callback){
       BaseEndpoint.send("twitter_post", reading, createdAt, callback);
    }
}