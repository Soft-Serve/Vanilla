Rails.application.routes.draw do
  devise_for :users, controllers: { sessions: "sessions" }

  resources :restaurants, only: %i[show create update destroy] do
    resources :dietaries, only: %i[index]
    resources :menus, only: %i[index]
  end

  resources :dietaries, only: %i[show create update destroy]

  resources :menus, only: %i[show create update destroy] do
    resources :menu_categories, only: %i[index]
  end

  resources :menu_categories, only: %i[show create update destroy] do
    resources :menu_items, only: %i[index]
  end

  resources :menu_items, only: %i[show create update destroy] do
    resources :item_sizes, only: %i[index show create update destroy]
    resources :dietary_instances, only: %i[index create destroy]
  end
end
