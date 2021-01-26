require 'httparty'
require 'json'


module Api::V1
  class ClipsController < ApplicationController
    def get_clips
      url = 'https://api.twitch.tv/kraken/clips/top?channel=Twitch&period=month&trending=true&limit=1'
      headers = {
        "Accept"  => "application/vnd.twitchtv.v5+json",
        "Client-ID" => "k0p7lgsthuzos2rbeh8cry5zdx4uew"
      }
      response = HTTParty.get(url, :headers => headers)
      render json: response.parsed_response
    end
  end
end
