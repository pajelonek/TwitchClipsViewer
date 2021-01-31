require 'httparty'
require 'json'

module Api::V1
  class ClipsController < ApplicationController
    @@period = 'month'
    @@trending = 'true'
    @@limit = '9'
    @@base_url = 'https://api.twitch.tv/kraken/clips/top?'
    @@headers = {
      "Accept" => "application/vnd.twitchtv.v5+json",
      "Client-ID" => "k0p7lgsthuzos2rbeh8cry5zdx4uew"
    }
    def get_clips
      url = 'https://api.twitch.tv/kraken/clips/top?period=month&trending=true&limit=9'
      headers = {
        "Accept" => "application/vnd.twitchtv.v5+json",
        "Client-ID" => "k0p7lgsthuzos2rbeh8cry5zdx4uew"
      }
      response = HTTParty.get(url, :headers => headers)
      render json: JSON.parse(response.body)
    end

    def post_clips
      if request['limit'] == nil or request['period'] == nil
        e = Errors::StandardError.new
        render json: Errors::ErrorSerializer.new(e), status: e.status
      else
        if request['trending'] != nil
          @@trending = request['trending']
        end
        url = @@base_url+'period='+request['period']+'&trending='+@@trending+'&limit='+request['limit']
        response = HTTParty.get(url, :headers => @@headers)
        render json: JSON.parse(response.body)
      end
    end

  end
end
