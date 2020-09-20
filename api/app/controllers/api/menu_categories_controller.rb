module Api
    class MenuCategoriesController < ApplicationController  
        before_action :fetch, only: %i[show update destroy]

        def index
            render json: (collection.filter.map { |menu_category| serialize(menu_category) })
        end

        def create
        end

        def show
            render json: serialize(@menu_category)
        end

        def update
        end

        def destroy
        end

        private

        def serialize(menu_category)
            MenuCategoryPresenter.new(menu_category).serialize
        end

        def menu
            @menu ||= Menu.find_by(id: params[:menu_id])
        end

        def collection
            MenuCategoriesCollection.new(menu)
        end

        def fetch
            @menu_category = MenuCategory.find(params[:id])
        end

        def strong_params
            params.permit(
                :name,
                :category_type,
                :menu_id
            )
        end 
    end
end
