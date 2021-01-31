Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get '/jobs', to: 'jobs#index'
      post '/jobs', to: 'jobs#create'
      get '/jobs/:id', to: 'jobs#show'
      patch '/jobs/:id', to: 'jobs#update'
      delete '/jobs/:id', to: 'jobs#destroy'
      get '/getClips', to: 'clips#get_clips'
      post '/postClips', to: 'clips#post_clips'
    end
  end
end