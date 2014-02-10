require 'rubygems'
require 'bundler'
require 'sinatra'
require 'sinatra/cross_origin'
require 'json'
require 'thin'
require 'databasedotcom'
require 'twitter'

Bundler.require

configure do
  enable :cross_origin
end

twitter_client = Twitter::REST::Client.new do |config|
  config.consumer_key        = "xye1a5G4BKZe8Y0pKNtq2w"
  config.consumer_secret     = "3AJK7IAy6efTJ60ON3gdxC11JGcWhkfTQJdFiKudxc"
  config.access_token        = "2336400037-1VAsykouIrUlafSxt3UKDklpcrvvzKkT5WCYOBH"
  config.access_token_secret = "XHqA1Qoo8qfEgb3gTYPeInr9oN7HcQBBkOlSqHImq9yRr"
end

salesforce_client = Databasedotcom::Client.new(:host => "ap1.salesforce.com",
                                               client_id: "3MVG9Y6d_Btp4xp4VMNknjtZ.dNfLj.keuAPeOHX7BBs7jkQl2veFyeBT1VpTDNbjB.jz12zKoVvrBoOboOI0",
                                               client_secret: "2714833726334434871")
salesforce_client.authenticate :username => "salesforce.ips@gmail.com", :password => "salesforce1!4Vcz4QKBkvtzbDNgC2x6GA9C5"

post '/salesforce_post' do
  content_type :json

  Temperature = salesforce_client.materialize("Temperature__c")
  Temperature.create(reading__c: params[:reading], created_at__c: Time.now)
  {message: "Done!!"}.to_json
end

post '/twitter_post' do
  content_type :json
  twitter_client.update("tweeted reading: #{params[:reading]} at #{params[:created_at]}")
  {message: "Done!!"}.to_json
end