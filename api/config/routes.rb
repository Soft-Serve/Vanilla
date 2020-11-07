Rails.application.routes.draw do
  devise_for :users
  namespace :api do
    resources :restaurants, only: %i[show create update destroy] do
      resources :dietaries
      resources :menus, only: %i[index show create update destroy]
    end

    resources :menus, except: %i[index show create update destroy] do
      resources :menu_categories, only: %i[index show create update destroy]
    end

    resources :menu_categories, except: %i[index show create update destroy] do
      resources :menu_items, only: %i[index show create update destroy]
    end

    resources :menu_items, except: %i[index show create update destroy] do
      resources :item_sizes, only: %i[index show create update destroy]
      resources :dietary_instances, only: %i[index create destroy]
    end
  end
end
