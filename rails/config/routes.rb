Rails.application.routes.draw do
  resources :projects do
    member do
      post :sort
    end
    resources :lists, shallow: true do
      member do
        post :sort
      end
      resources :items, shallow: true do 
        collection do 
          delete :bulk_destroy
        end
      end
    end
  end

  namespace :api do
    resources :scores, only: [:index, :create]
  end

  root 'projects#index'
end
