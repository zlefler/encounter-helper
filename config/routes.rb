Rails.application.routes.draw do
  resources :skills
  resources :abilities
  resources :weapons
  resources :characters
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
