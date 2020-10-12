Rails.application.routes.draw do
  devise_for :users
  namespace :api do
    resources :restaurants, only: %i[show create update destroy] do
      resources :menus, only: %i[index show create update destroy] do
        resources :menu_categories, only: %i[index show create update destroy] do
          resources :menu_items, only: %i[index show create update destroy] do
            resources :item_sizes, only: %i[index show create update destroy]
            resources :dietaries, only: %i[index show update create destroy]
          end
        end
      end
    end
  end
end
