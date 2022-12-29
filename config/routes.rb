Rails.application.routes.draw do
  resources :skills
  resources :abilities
  resources :weapons
  resources :characters
  resources :users

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/me', to: 'users#show'
  post '/signup', to: 'users#create'
  post '/characters/:character_name', to: 'characters#create_or_patch'
  get '/character/:id/abilities', to: 'abilities#show'
  get '/character/:id/skills', to: 'skills#show'
end
