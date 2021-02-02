module Api::V1
  class ClipsController < ApplicationController
    @logger = Logger.new($stdout)
    def get_clips
      logger.info('Getting request on GET /clips')
      render json: TwitchClipsService.get_clips(params)
    end

  end
end
