require 'httparty'
require 'json'

class TwitchClipsService

  @logger = Logger.new($stdout)
  @base_url = ENV['TWITCH_BASE_URL']
  @headers = {
    "Accept" => ENV['TWITCH_ACCEPT'],
    "Client-ID" => ENV['TWITCH_CLIENT_ID']
  }

  def self.initialize
    @local_params = { "period" => ENV['FIXED_PERIOD'],
                     "trending" => ENV['FIXED_TRENDING'],
                     "limit" => ENV['FIXED_LIMIT'] }
  end

  def self.get_clips(params)
    TwitchClipsValidator.get_clips_validator(params)
    self.initialize

    params.each do |param|
      param[0] != 'controller' && param[0] !='action' ? @local_params[param[0]] = param[1]: nil
      @logger.info(param)
    end

    url = @base_url + 'period=' + @local_params['period'] + '&trending=' + @local_params['trending']+ '&limit=' + @local_params['limit']
    response = HTTParty.get(url, :headers => @headers)
    return JSON.parse(response.body)
  end
end

