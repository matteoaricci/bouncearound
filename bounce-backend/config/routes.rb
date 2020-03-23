Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :users
  resources :levels

  post '/user/login', to: "sessions#create_user_login"
  post '/user/finduser', to: "users#find_user"
end
