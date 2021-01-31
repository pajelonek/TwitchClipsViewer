require 'httparty'
require 'json'


module Api::V1
  class ClipsController < ApplicationController
    def get_clips
      url = 'https://api.twitch.tv/kraken/clips/top?period=month&trending=true&limit=9'
      headers = {
        "Accept"  => "application/vnd.twitchtv.v5+json",
        "Client-ID" => "k0p7lgsthuzos2rbeh8cry5zdx4uew"
      }
      response = HTTParty.get(url, :headers => headers)
      render json: JSON.parse(response.body)
    end

    def post_clips
      if JSON.parse(request.body.read)['test'] == nil
        e = Errors::StandardError.new
        render json: Errors::ErrorSerializer.new(e), status: e.status
      else render text:"Hello #{request.body.read}"
      end
    end


  end
end
