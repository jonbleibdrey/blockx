Rails.application.routes.draw do
  resources :rentals
  resources :subscribers

  resources :subscribers do
    resources :rentals
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
