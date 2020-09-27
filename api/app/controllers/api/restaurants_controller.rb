module Api
    class RestaurantsController < ApplicationController  
        before_action :fetch, only: %i[show update destroy]

        def create
            restaurant = RestaurantInteractor::Create.new(
                author: current_user,
                params: strong_params
              ).call.unwrap!
        
            render json: serialize(restaurant), status: :created
        end

        def show
            render json: serialize(@restaurant)
        end

        def update
            restaurant = RestaurantInteractor::Update.new(
                team: @restaurant,
                team_params: strong_params
            ).call.unwrap!
        
            render json: serialize(restaurant)
        end

        def destroy
            RestaurantInteractor::Delete.new(
                restaurant: @restaurant
            ).call.unwrap!
        
            head :no_content
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
            :currency,
            :logo
            )
        end 
    end
end
