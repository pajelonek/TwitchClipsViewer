Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get '/streamers', to: 'streamers#index'
      post '/streamers', to: 'streamers#create'
      get '/streamers/:id', to: 'streamers#show'
      patch '/streamers/:id', to: 'streamers#update'
      delete '/streamers/:id', to: 'streamers#destroy'
      get '/getClips', to: 'clips#get_clips'
    end
  end
end