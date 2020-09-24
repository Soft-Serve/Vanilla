module Api
    class MenuCategoriesController < ApplicationController  
        before_action :fetch, only: %i[show update destroy]

        def index
            render json: (collection.filter.map { |menu_category| serialize(menu_category) })
        end

        def create
            menu_category = MenuCategoryInteractor::Create.new(
                author: current_user,
                params: strong_params
              ).call.unwrap!
        
            render json: serialize(menu_category), status: :created
        end

        def show
            render json: serialize(@menu_category)
        end

        def update
            menu_category = MenuCategoryInteractor::Update.new(
                team: @menu_category,
                team_params: strong_params
            ).call.unwrap!
        
            render json: serialize(menu_category)
        end

        def destroy
            MenuCategoryInteractor::Delete.new(
                menu_category: @menu_category
            ).call.unwrap!
        
            head :no_content
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
