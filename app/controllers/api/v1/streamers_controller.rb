module Api::V1
  class StreamersController < ApplicationController

    def index
      @streamers = Streamer.all
      render json: @streamers
    end

    def show
      @streamers = Streamer.find(params[:channel_id])
      render json: @streamers
    end

    def create
      @streamers = Streamer.new(streamer_params)

      if @streamers.save
        render json: @streamers, status: :created
      else
        render json: @streamers.errors, status: :unprocessable_entity
      end
    end

    def update
      @streamers = Streamer.find(params[:id])
      if @streamers.update(streamer_params)
        render json: @streamers
      else
        render json: @streamers.errors, status: :unprocessable_entity
      end
    end

    def destroy
      @streamers = Streamer.find(params[:id])
      @streamers.destroy
    end
    ###############################################################
    private

    def streamer_params
      params
        .require(:streamer)
        .permit(:name, :language, :channel_id)
    end

  end
end