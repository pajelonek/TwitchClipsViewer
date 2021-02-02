class TwitchClipsValidator
  def self.get_clips_validator(params)
    if params['limit'] == nil or params['period'] == nil
      e = Errors::StandardError.new
      render json: Errors::ErrorSerializer.new(e), status: e.status
    end
  end
end
