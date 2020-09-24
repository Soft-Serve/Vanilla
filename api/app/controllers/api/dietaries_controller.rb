module Api
    class DietariesController < ApplicationController  
        before_action :fetch, only: %i[show update destroy]

        def index
            render json: (collection.filter.map { |dietary| serialize(dietary) })
        end

        def create
        end

        def show
            render json: serialize(@dietary)
        end

        def update
        end

        def destroy
        end

        private

        def serialize(dietary)
            DietaryPresenter.new(dietary).serialize
        end

        def menu_item
            @menu_item ||= MenuItem.find_by(id: params[:menu_item_id])
        end

        def collection
            DietariesCollection.new(menu_item)
        end

        def fetch
            @dietary = Dietary.find(params[:id])
        end

        def strong_params
            params.permit(
                :name,
                :menu_item_id
            )
        end 
    end
end
