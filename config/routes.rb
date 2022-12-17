Rails.application.routes.draw do
  resources :skills
  resources :abilities
  resources :weapons
  resources :characters
  resources :users

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
end
