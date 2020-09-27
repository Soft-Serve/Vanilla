module Api
    class RestaurantsController < ApplicationController  
        before_action :fetch, only: %i[show update destroy]

        def create
            restaurant = RestaurantInteractor::Create.new(
                author: current_user,
                params: strong_params
              ).call
            
            if restaurant.successful? 
                render json: serialize(restaurant.unwrap!), status: :created
            else
                render json: restaurant.errors, status: :unprocessable_entity
            end
        end

        def show
            render json: serialize(@restaurant)
        end

        def update
            restaurant = RestaurantInteractor::Update.new(
                team: @restaurant,
                team_params: strong_params
            ).call.unwrap!

            if restaurant.successful? 
                render json: serialize(restaurant.unwrap!)
            else
                render json: restaurant.errors, status: :unprocessable_entity
            end
        end

        def destroy
            RestaurantInteractor::Delete.new(
                restaurant: @restaurant
            ).call

            if restaurant.successful? 
                head :no_content
            else
                render json: restaurant.errors, status: :unprocessable_entity
            end   
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
