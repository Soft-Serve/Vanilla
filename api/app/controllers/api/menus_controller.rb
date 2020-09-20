module Api
    class MenusController < ApplicationController  
        before_action :fetch, only: %i[show update destroy]

        def index
            render json: (collection.filter.map { |menu| serialize(menu) })
        end

        def create
        end

        def show
            render json: serialize(@menu)
        end

        def update
        end

        def destroy
        end

        private

        def serialize(menu)
            MenuPresenter.new(menu).serialize
        end

        def restaurant
            @restaurant ||= Restaurant.find_by(id: params[:restaurant_id])
        end

        def collection
           MenusCollection.new(restaurant)
        end

        def fetch
            @menu = Menu.find(params[:id])
        end

        def strong_params
            params.permit(
            :name,
            :restaurant_id
            )
        end 
    end
end
