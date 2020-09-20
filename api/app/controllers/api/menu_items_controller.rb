module Api
    class MenuItemsController < ApplicationController  
        before_action :fetch, only: %i[show update destroy]

        def index
            render json: (collection.filter.map { |menu_item| serialize(menu_item) })
        end

        def create
        end

        def show
            render json: serialize(@menu_item)
        end

        def update
        end

        def destroy
        end

        private

        def serialize(menu_item)
            MenuItemPresenter.new(menu_item).serialize
        end

        def menu_category
            @menu_category ||= MenuCategory.find_by(id: params[:menu_category_id])
        end

        def collection
            MenuItemsCollection.new(menu_category)
        end

        def fetch
            @menu_item = MenuItem.find(params[:id])
        end

        def strong_params
            params.permit(
                :name,
                :description,
                :menu_category_id,
                :photo
            )
        end 
    end
end
