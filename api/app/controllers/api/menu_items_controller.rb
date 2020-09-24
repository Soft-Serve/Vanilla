module Api
    class MenuItemsController < ApplicationController  
        before_action :fetch, only: %i[show update destroy]

        def index
            render json: (collection.filter.map { |menu_item| serialize(menu_item) })
        end

        def create
            menu_item = MenuItemInteractor::Create.new(
                author: current_user,
                params: strong_params
              ).call.unwrap!
        
            render json: serialize(menu_item), status: :created
        end

        def show
            render json: serialize(@menu_item)
        end

        def update
            menu_item = MenuItemInteractor::Update.new(
                team: @menu_item,
                team_params: strong_params
            ).call.unwrap!
        
            render json: serialize(menu_item)
        end

        def destroy
            MenuItemInteractor::Delete.new(
                menu_item: @menu_item
            ).call.unwrap!
        
            head :no_content
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
