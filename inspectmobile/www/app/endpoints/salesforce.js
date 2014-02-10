var SalesforceEndpoint = {
    send: function(reading, createdAt, callback){
        BaseEndpoint.send("salesforce_post", reading, createdAt, callback);
    }
}