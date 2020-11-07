Rails.application.routes.draw do
  resources :projects do
    resources :lists, shallow: true do
      member do
        post :sort
      end
      resources :items, shallow: true
    end
  end

  namespace :api do
    resources :scores, only: [:index, :create]
  end

  root 'projects#index'
end
