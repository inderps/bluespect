require 'rubygems'
require 'bundler'
require 'sinatra'
require 'sinatra/cross_origin'
require 'json'
require 'thin'
require 'databasedotcom'

Bundler.require

configure do
  enable :cross_origin
end

post '/data' do
  content_type :json
  if(params[:end_point] == "salesforce")
    salesforce_client = Databasedotcom::Client.new(:host => "ap1.salesforce.com",
                                                   client_id: "3MVG9Y6d_Btp4xp4VMNknjtZ.dNfLj.keuAPeOHX7BBs7jkQl2veFyeBT1VpTDNbjB.jz12zKoVvrBoOboOI0",
                                                   client_secret: "2714833726334434871")
    salesforce_client.authenticate :username => "salesforce.ips@gmail.com", :password => "salesforce1!4Vcz4QKBkvtzbDNgC2x6GA9C5"
    Temperature = salesforce_client.materialize("Temperature__c")
    Temperature.create(reading__c: params[:reading], created_at__c: Time.now)
  end
  {message: "Done!!"}.to_json
end