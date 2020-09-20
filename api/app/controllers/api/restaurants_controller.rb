module Api
    class RestaurantsController < ApplicationController  
        before_action :fetch, only: %i[show update destroy]

        def create
        end

        def show
            render json: serialize(@restaurant)
        end

        def update
        end

        def destroy
        end

        private

        def serialize(restaurant)
            RestaurantPresenter.new(restaurant).serialize
        end

        def fetch
            @restaurant = Restaurant.find(params[:id])
        end

        def strong_params
            params.permit(
            :name,
            :primary_colour,
            :secondary_colour,
            )
        end 
    end
end
